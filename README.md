# Rock Paper Scissors ✊✋✌️

A modern, interactive, and gamified take on the classic Rock Paper Scissors game. Built with React and Tailwind CSS, this project focuses on sleek UI/UX, dynamic state management, and engaging micro-interactions.

## 🚀 Live Demo
https://new-rockpaperscissor.netlify.app/

## ✨ Features
* **Interactive Gameplay:** Play against a randomized computer opponent with instant visual feedback.
* **Win Streak Tracker:** Gamified state tracking that counts consecutive wins to keep players engaged.
* **Dynamic UI States:** The result banner dynamically changes colors (Emerald Green for Win, Red for Lose, Gray for Draw) with glassmorphic glowing effects.
* **Animations:** Features a custom CSS shake animation for losses and a canvas-based confetti blast for wins.
* **WhatsApp Integration:** A "Click to Chat" contact button utilizing secure environment variables.
* **Fully Responsive:** Optimized for both desktop and mobile viewing.

## 🛠️ Tech Stack
* **Frontend:** React.js (built with Vite)
* **Styling:** Tailwind CSS
* **Animations:** `canvas-confetti`, Custom CSS Keyframes
* **Deployment:** Netlify

## 💻 Local Setup & Installation

To run this project locally on your machine, follow these steps:

**1. Clone the repository:**
```bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name
```

**2. Install dependencies:**
```bash
npm install
```

**3. Configure Environment Variables:**

This project uses a .env file to securely store the WhatsApp contact number.
Create a file named .env in the root directory.
Add your phone number (including country code, but without the + sign).
```bash
VITE_WHATSAPP_NUMBER=919876543210
```

**4. Start the development server:**
```bash
npm run dev
```

## 📂 Project Structure highlights

App.jsx - Main game logic, state management, and UI rendering.

tailwind.css / index.css - Custom theme variables, font imports (Uncial Antiqua & Lora), and custom keyframe animations.

.env - Environment variables (ignored by Git).

## 👨‍💻 Author

Sriram Kannan V
