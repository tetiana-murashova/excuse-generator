
# 🤖 Excuse Generator Machine

A fun and interactive web app that generates random excuses for developers, managers, QA engineers, interns, and even AI.  
Built with **React + TypeScript + Tailwind**, with smooth animations and a playful UX.

---

## ✨ Features

### 🎲 Random Excuse Generator  
- Pick a category (Developer / Manager / QA / Intern / AI / Any).  
- Generate a random excuse with one click.

### 📋 One-Click Copy  
- Copy the excuse to clipboard for Slack, Jira, email, or emergencies 😅.

### 🧑‍💼 Corporate Translator  
- Instantly converts a funny excuse into a “serious” corporate-sounding version.

### 🌙 Dark / Light Theme  
- Modern UI with smooth transitions.

### 🎞 Animations  
- Excuses animate in using Framer Motion.

### ⌨️ Keyboard Shortcuts  
- Press **G** → Generate  
- Press **C** → Copy  

---

## 🧱 Tech Stack

- **React 18**  
- **TypeScript**  
- **Vite**  
- **Tailwind CSS**  
- **Framer Motion**  
- **Clipboard API**  
- **JSON data source** for excuses  

---

## 📁 Project Structure

```
src/
├─ App.tsx
├─ main.tsx
├─ index.css
└─ data/
   └─ excuses.json
```

---

## 🚀 Getting Started

### Install dependencies
```bash
npm install
# or
pnpm install
# or
yarn install
```

### Run the development server
```bash
npm run dev
```

Then open:  
👉 http://localhost:5173

---

## 🏗 Build for production

```bash
npm run build
npm run preview
```

---

## 🧩 Customization

### Add or edit excuses  
Modify this file:
```
src/data/excuses.json
```

### Change the theme / UI  
All styling is in Tailwind classes — edit directly in components.

### Ideas to extend
- Save generated excuses in history  
- “Share to Slack” button  
- Export excuse as PNG  
- Random avatar per excuse  
- Add tags/filtering  

---

## 📄 License  
MIT License — free for personal and commercial use.

---

Created with ❤️  
By **Tetiana Murashova**
