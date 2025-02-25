# 🚀 CI/CD Pipeline for Full-Stack Application

## 📌 Overview
This project implements a **CI/CD pipeline** using **GitHub Actions** to:
- ✅ Run Cypress component tests on Pull Reports to `develop`
- ✅ Deploy the application to Render when `develop` is merged into `main`

## 📖 Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/mauricek12d/CI-CD-Project.git
   cd CI CD Project
   ```

2. **Install dependencies:
```bash
npm install
```

2. **Start the application:
```bash
npm start
```
3. **Run Cypress tests:
```bash

npx cypress run --component
```

## 🌍 Deployment
The application is automatically deployed to Render when develop is merged into main.
GitHub Secrets are used to store sensitive environment variables.

## 🤝 Contributing
Create a feature branch:
```bash

git checkout -b feature/your-feature
Make changes & commit:

git add .
git commit -m "feat: Add a new feature"
Push to GitHub & create a PR.
```