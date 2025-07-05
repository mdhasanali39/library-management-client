# 📚 Minimal Library Management System

A lightweight, responsive, and functional **Library Management System** built with **React**, **Redux Toolkit Query (RTK Query)**, and **TypeScript**. This project demonstrates effective API integration, state management, and UI/UX design without authentication or complex features.

---

## 🚀 Live Demo

🔗 **Frontend:** [Live Site URL]  
🔗 **Backend API:** [Live API URL]  
🔗 **GitHub (Frontend):** [Frontend Repo Link](https://github.com/mdhasanali39/library-management-client) <br/>
🔗 **GitHub (Backend):** [Backend Repo Link](https://github.com/mdhasanali39/library-management-server) 

---

## 📌 Project Overview

This project provides a minimal yet complete client-side application for managing library resources. Users can:

- View available books
- Perform CRUD operations
- Borrow books with quantity and due date
- View a summarized report of borrowed books

This application is built for educational purposes and showcases modular structure, proper API integration, and a clean UI—all without authentication or payment features.

---

## 🧩 Features

### ✅ Public Access
All pages are accessible without login—built for quick access and usability testing.

### 📚 Book Management
- View book list in tabular format with:
  - Title, Author, Genre, ISBN, Copies, Availability, and Actions
- CRUD operations:
  - **Create:** Add new books using a form
  - **Read:** Browse all books
  - **Update:** Edit book details inline with validations
  - **Delete:** Remove book with confirmation
- Business Logic:
  - If copies = 0 → Book marked as unavailable

### 🔄 Borrowing System
- Borrow a book by specifying quantity and due date
- Validations:
  - Cannot borrow more than available copies
  - Auto mark unavailable when copies = 0
- Successful borrow redirects to borrow summary

### 📊 Borrow Summary
- Aggregated view of borrowed books
- Fields: Title, ISBN, Total Quantity Borrowed

### 🧭 Navigation & Layout
- **Navbar**: Routes to all major sections
- **Footer**: Branding or credits
- **Responsive UI**: Adapts to all device sizes
- **Minimalist Design** using Tailwind CSS

---

## ⚙️ Technology Stack

| Layer | Technology |
| ----- | ---------- |
| Frontend | React + TypeScript |
| State Management | Redux Toolkit + RTK Query |
| Styling | Tailwind CSS |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |

---

## 🌐 API Integration

- All API calls handled via **RTK Query**
- Strong typing for endpoints and responses
- Global state managed through Redux slices

## 🚀 Setup Instructions

1️⃣ **Clone the repo**

```bash
git clone https://github.com/mdhasanali39/library-management-client.git
```
```bash
cd library-management-client
```
2️⃣ **Install dependencies**
```bash
 npm install
```

4️⃣ **Run the server**
```bash
npm run start
```


🧑‍💻 Author <br>
Md Hasan ali <br>
[GitHub Profile](https://github.com/mdhasanali39)

