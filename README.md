# 💬 Async Chat: Ghost Protocol Implementation

**A Low-Stakes, Anonymous Social Interaction System.**

---

## 🚩 The Problem Statement
Traditional social media platforms often create an environment of high-pressure validation. The constant need to maintain a curated identity leads to:
*   **Reduced Authentic Interaction:** Users filter themselves to fit a persona.
*   **Increased Anxiety:** The "permanent record" of social media creates fear of judgment.

### 🎭 The Scenario
In a student environment, identity pressure can stifle spontaneous conversation. **Ghost Protocol** (Async Chat) is designed for students to interact anonymously through temporary conversations, removing the weight of social status and identity tracking.

---

## 💡 The Solution
Async Chat is a **privacy-first social platform** focused on spontaneous, low-pressure communication. By removing the login barrier and enforcing message ephemerality, it creates a "safe zone" for authentic, real-time human connection.

### ✅ Meeting Core Requirements:
*   **Anonymous Interaction:** Zero-onboarding. No sign-ups, no profiles to maintain.
*   **Message Posting:** Seamless real-time message delivery.
*   **Temporary Chats:** A "sliding window" of history—only the last 50 messages exist.
*   **Context Feed:** Threaded replies to keep conversations organized without clutter.
*   **Simple UI:** A distraction-free interface focused purely on the text.

---

## 🚀 Features

- 🕶️ **Total Anonymity**: No personal data collection or identity tracking.
- 🌐 **Real-Time Vibe**: Powered by WebSockets for instant, live interactions.
- 👤 **Ephemeral Identity**: Set a temporary alias and avatar for the current session only.
- 💬 **Threaded Context**: High-context replies that allow multiple conversations to happen at once.
- 🧹 **Auto-Purge**: Older messages are automatically removed to ensure the conversation stays in the "now."

---

## 🛠️ Tech Stack (MERN)

The "Ghost Protocol" is built using a modern, scalable MERN architecture:

-   **Frontend:** React.js (via Vite) for a high-performance, reactive user interface.
-   **Backend:** Node.js & Express.js for handling the protocol logic and API.
-   **Real-time:** Socket.io for the low-latency communication layer.
-   **Database:** MongoDB & Mongoose for lightweight, ephemeral message storage.

---

## 📂 Project Structure

The project follows a clean separation of concerns to maintain the "Ghost" architecture:

```text
VIBE/
├── backend/                # The Ghost Protocol Server
│   ├── controllers/
│   │   └── worldchat.js    # Logic for managing anonymous rooms
│   ├── models/
│   │   └── PublicChat.js   # Ephemeral data schema
│   ├── app.js              # Express & Socket.io integration
│   └── .env                # Secret configurations
├── frontend/               # The Client-Side Interface
│   ├── src/
│   │   ├── component/
│   │   │   ├── chat.jsx    # Real-time chat logic
│   │   │   └── home.jsx    # Entry point for anonymous users
│   │   ├── assets/         # Visual assets (e.g., anime-dance.gif)
│   │   ├── App.jsx         # Component orchestration
│   │   └── main.jsx        # App mounting
│   ├── vite.config.js       # Lightning-fast build config
│   └── package.json
└── README.md

## 🖼️ Screenshots

### 🏠 Main Page

![Main Page](./home.png)

> Landing page with anonymous entry and call-to-action to join the world chat.

---

### 💬 Chat Interface

![Chat Page](./chat.png)

> Real-time global chat with threaded replies and user presence.

---

## 🛠️ Tech Stack (Example)

> _(Customize this section based on your actual stack)_

- **Frontend:** React / Next.js / Vue
- **Backend:** Node.js / Express / WebSockets
- **Real-time:** Socket.IO / WebRTC / Firebase
- **Storage:** In-memory / Redis (for last 50 messages)

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/async-chat.git

# Navigate into the project
cd async-chat

# Install dependencies
npm install

# Start development server
npm run dev
