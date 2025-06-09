(() => { 
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      const isPageValid = validatePageRange();
      if (!form.checkValidity() || !isPageValid) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        const submitButtons = form.querySelectorAll("button[type='submit']");
        submitButtons.forEach(btn => {
          btn.disabled = true;
          btn.innerHTML = <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span> Processing...;
        });
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

document.addEventListener("DOMContentLoaded", () => {
  const pdfInput = document.getElementById("pdf_file");
  const startPageInput = document.getElementById("start_page");
  const endPageInput = document.getElementById("end_page");
  const errorMsg = document.getElementById("page-range-error");
  const qaBtn = document.getElementById("qaBtn");
  const pptBtn = document.getElementById("pptBtn");

  let totalPages = 0;
  let pdfUploaded = false;

  function toggleButtons(state) {
    qaBtn.disabled = !state;
    pptBtn.disabled = !state;
  }

  function validatePageRange() {
    const start = parseInt(startPageInput.value);
    const end = parseInt(endPageInput.value);
    const isValid = (
      !isNaN(start) &&
      !isNaN(end) &&
      start >= 1 &&
      end >= 1 &&
      start <= end &&
      end <= totalPages
    );
    errorMsg.style.display = isValid ? "none" : "block";
    toggleButtons(pdfUploaded && isValid);
    return isValid;
  }

  pdfInput.addEventListener("change", () => {
    const file = pdfInput.files[0];
    if (!file) {
      pdfUploaded = false;
      toggleButtons(false);
      return;
    }

    const formData = new FormData();
    formData.append("pdf_file", file);

    fetch("/get_page_count", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        totalPages = data.total_pages;

        startPageInput.min = 1;
        startPageInput.max = totalPages;
        endPageInput.min = 1;
        endPageInput.max = totalPages;

        startPageInput.value = 1;
        endPageInput.value = totalPages;

        pdfUploaded = true;
        validatePageRange();
      } else {
        alert(data.error || "❌ Failed to read PDF.");
        pdfUploaded = false;
        toggleButtons(false);
      }
    })
    .catch(() => {
      alert("❌ Could not contact server. Check your connection.");
      pdfUploaded = false;
      toggleButtons(false);
    });
  });

  startPageInput.addEventListener("input", validatePageRange);
  endPageInput.addEventListener("input", validatePageRange);
});
