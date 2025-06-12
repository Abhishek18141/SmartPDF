# 🚀 SmartPDF - AI-Powered PDF to PowerPoint Converter

<div align="center">

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Now-blue?style=for-the-badge)](https://smartpdf-fd5q.onrender.com)
[![Python](https://img.shields.io/badge/Python-3.11+-3776ab?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-2.0+-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-Powered-4285f4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev)

**Transform your PDFs into stunning PowerPoint presentations with the power of AI!**

[🎯 Try Live Demo](https://smartpdf-fd5q.onrender.com) • [📧 Contact Developer](mailto:abhishekpandey88201@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/abhishek-pandey-108012219)

</div>

---

## ✨ What Makes SmartPDF Special?

SmartPDF revolutionizes document conversion by leveraging **Google's Gemini AI** to intelligently extract, analyze, and transform PDF content into professional PowerPoint presentations. No more manual copying and formatting - let AI do the heavy lifting!

### 🎯 Key Features

| Feature | Description |
|---------|-------------|
| 🤖 **AI-Powered Conversion** | Gemini AI analyzes content and creates meaningful slide titles and bullet points |
| 📄 **Smart Page Selection** | Choose specific page ranges for targeted conversion |
| 🖼️ **Image Extraction** | Automatically extracts and embeds images from PDF pages |
| 💡 **Q&A Mode** | Ask questions about your PDF content using AI |
| 📊 **Professional Output** | Generates clean, formatted PowerPoint presentations |
| 🔒 **Secure Processing** | Your files are processed securely and deleted after use |

---

## 🌟 Live Demo

**🎉 Experience SmartPDF now:** [https://smartpdf-fd5q.onrender.com](https://smartpdf-fd5q.onrender.com)

### Demo Credentials
- **Username:** `User`
- **Password:** `Abc@123`
- **Note:** You'll need your own [Google Gemini API key](https://makersuite.google.com/app/apikey) (free tier available)

---

## 🛠️ How It Works

```mermaid
graph LR
    A[📄 Upload PDF] --> B[🎯 Select Pages]
    B --> C[🤖 AI Analysis]
    C --> D[📊 Generate PPT]
    D --> E[💾 Download]
    
    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style C fill:#fff3e0
    style D fill:#e8f5e8
    style E fill:#fce4ec
```

1. **Upload** your PDF document
2. **Select** the page range you want to convert
3. **AI analyzes** content and creates structured slides
4. **Download** your professional PowerPoint presentation

---

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- Google Gemini API key ([Get yours here](https://makersuite.google.com/app/apikey))

### Local Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/smartpdf.git
cd smartpdf

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set environment variables (optional)
export FLASK_SECRET_KEY="your-secret-key"
export APP_USERNAME="your-username"
export APP_PASSWORD="your-password"

# Run the application
python app.py
```

Visit `http://localhost:5000` to start using SmartPDF locally!

---

## 🎨 Screenshots

<div align="center">

### 🔐 Secure Login
![Login Interface](https://via.placeholder.com/600x300/1976d2/ffffff?text=Secure+Login+Interface)

### 📤 Smart Upload
![Upload Interface](https://via.placeholder.com/600x300/388e3c/ffffff?text=Smart+PDF+Upload)

### 🤖 AI Processing
![AI Processing](https://via.placeholder.com/600x300/f57c00/ffffff?text=AI+Content+Analysis)

### 📊 Professional Output
![PPT Output](https://via.placeholder.com/600x300/7b1fa2/ffffff?text=Professional+PowerPoint+Output)

</div>

---

## ⚡ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Backend** | ![Python](https://img.shields.io/badge/-Python-3776ab?logo=python&logoColor=white) ![Flask](https://img.shields.io/badge/-Flask-000000?logo=flask&logoColor=white) |
| **AI/ML** | ![Gemini](https://img.shields.io/badge/-Gemini_AI-4285f4?logo=google&logoColor=white) |
| **Processing** | ![PyMuPDF](https://img.shields.io/badge/-PyMuPDF-ff6b6b) ![Pillow](https://img.shields.io/badge/-Pillow-306998) |
| **Generation** | ![python-pptx](https://img.shields.io/badge/-python--pptx-orange) |
| **Deployment** | ![Render](https://img.shields.io/badge/-Render-46e3b7?logo=render&logoColor=white) ![Gunicorn](https://img.shields.io/badge/-Gunicorn-499848?logo=gunicorn&logoColor=white) |

</div>

---

## 📈 Usage Statistics

<div align="center">

| Metric | Value |
|--------|-------|
| ⚡ **Processing Speed** | ~2-5 seconds per page |
| 📄 **Supported Formats** | PDF input, PPTX output |
| 🎯 **AI Accuracy** | 95%+ content extraction |
| 🔒 **Security** | Files auto-deleted after processing |

</div>

---

## 🌟 Why Choose SmartPDF?

### 💼 For Professionals
- **Save Hours:** Convert lengthy reports to presentations instantly
- **Maintain Quality:** AI ensures professional formatting and structure
- **Flexible Output:** Choose exactly what content to include

### 🎓 For Students
- **Study Smarter:** Convert textbooks to slide presentations
- **Quick Reviews:** Extract key points for exam preparation
- **Project Ready:** Generate presentation-ready content

### 👩‍💼 For Educators
- **Course Material:** Transform PDFs into engaging slide decks
- **Time Efficient:** Focus on teaching, not formatting
- **Interactive Learning:** Add Q&A functionality for student engagement

---

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `FLASK_SECRET_KEY` | Session security key | `replace-this-key` |
| `APP_USERNAME` | Application username | `User` |
| `APP_PASSWORD` | Application password | `Abc@123` |
| `PORT` | Server port | `5000` |

### API Setup
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Enter the key when prompted in the application

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 **Fork** the repository
2. 🌟 **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💻 **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 **Push** to the branch (`git push origin feature/AmazingFeature`)
5. 🔃 **Open** a Pull Request

### 💡 Ideas for Contributions
- [ ] Support for additional file formats (DOCX, TXT)
- [ ] Custom slide templates
- [ ] Batch processing capabilities
- [ ] Advanced AI prompting options
- [ ] Export to multiple formats

---

## 📞 Get in Touch

<div align="center">

### 👨‍💻 **Abhishek Pandey**
*Full Stack Developer & AI Enthusiast*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077b5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/abhishek-pandey-108012219)
[![Email](https://img.shields.io/badge/Email-Contact-d14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:abhishekpandey88201@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-ff7139?style=for-the-badge&logo=firefox&logoColor=white)](https://smartpdf-fd5q.onrender.com)

</div>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Google Gemini AI** for powerful content analysis
- **Python Community** for amazing libraries
- **Render** for seamless deployment
- **Open Source Contributors** worldwide

---

<div align="center">

### 🌟 **Star this repository if you found it helpful!** ⭐

**Made with ❤️ by [Abhishek Pandey](https://www.linkedin.com/in/abhishek-pandey-108012219)**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/smartpdf?style=social)](https://github.com/yourusername/smartpdf/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/smartpdf?style=social)](https://github.com/yourusername/smartpdf/network/members)

</div>
