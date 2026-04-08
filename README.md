# 💬 Async Chat: Ghost Protocol Implementation

**A Low-Stakes, Anonymous Social Interaction System.**

---

## 🚩 The Problem Statement
Traditional social media platforms often create an environment of high-pressure validation. The constant need to maintain a curated identity leads to:

- **Reduced Authentic Interaction:** Users filter themselves to fit a persona.  
- **Increased Anxiety:** The "permanent record" of social media creates fear of judgment.

### 🎭 The Scenario
In a student environment, identity pressure can stifle spontaneous conversation. **Ghost Protocol** is designed for users to interact anonymously through temporary conversations, removing the weight of social status.

---

## 💡 The Solution
This platform is a **privacy-first social solution** focused on spontaneous communication. By removing the login barrier and enforcing message ephemerality, it creates a safe zone for authentic connection.

### ✅ Core Requirements Met:
- **Anonymous Interaction:** No sign-ups or identity tracking  
- **Message Posting:** Instant real-time delivery via WebSockets  
- **Temporary Chats:** Only the **last 50 messages** are retained  
- **Context Feed:** Organized threaded replies  
- **Simple UI:** Minimalist design to reduce cognitive load  

---

## 🚀 Features

- 🕶️ **Total Anonymity**: No data collection or tracking  
- 🌐 **Real-Time Vibe**: Instant updates using Socket.io  
- 👤 **Custom Profiles**: Temporary display name + avatar  
- 💬 **Threaded Context**: Reply to messages easily  
- 🧹 **Auto-Purge**: Old messages are automatically deleted  

---

## 🖼️ UI Preview

### 🏠 Home Page
![Home](./home.png)

### 💬 Chat Interface
![Chat](./chat.png)

---

## 🛠️ Tech Stack

- **Frontend:** React / Next.js  
- **Backend:** Node.js + Express  
- **Realtime:** Socket.io  
- **Styling:** Tailwind CSS  

---

## ⚙️ Setup Instructions

```bash
# Clone the repo
git clone https://github.com/your-username/your-repo.git

# Install dependencies
npm install

# Run the dev server
npm run dev
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
