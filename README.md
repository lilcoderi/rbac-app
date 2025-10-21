# React RBAC & CRUD Dashboard

This project is a basic React application demonstrating **Role-Based Access Control (RBAC)** and **local CRUD (Create, Read, Update, Delete)** functionalities, enhanced with a professional and user-friendly interface.

---

## How to Run the App

Follow these steps to get the application up and running on your local machine:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/lilcoderi/rbac-app.git
    cd rbac-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the application:**

    ```bash
    npm run dev
    ```

    Open your browser and navigate to the URL provided in the terminal (e.g., `http://localhost:5173`).

---

## Role Permissions Overview

The application features a login screen where users can select one of three roles: **Admin**, **Editor**, or **Viewer**. Each role has distinct permissions for interacting with the data on the dashboard.

* **Admin**: Can perform all operations: **Add**, **Edit**, **Delete**, and **View** any item.
* **Editor**: Can **Edit**, **Delete**, and **View** items, but **cannot Add** new ones.
* **Viewer**: Can only **View** item details.

---

## Technologies and Features Used

This application leverages several key technologies and implements important features:

* **React (with Vite)**: The core JavaScript library for building the user interface. Vite is used for fast development and bundling.
* **React-Bootstrap & Bootstrap**: Used for building a responsive, modern, and professional-looking UI with pre-built components and utility classes. This provides a clean and consistent design across the application.
* **SweetAlert2**: Integrated for attractive and interactive alert and confirmation dialogs (e.g., for logout, delete actions, and item details).
* **React Icons**: Used to easily incorporate scalable vector icons (like eye, edit, trash, add, logout) into the application.
* **Public API**: Data is fetched from `https://jsonplaceholder.typicode.com/posts` to simulate real-world data interaction.
* **Local State Management**: All CRUD operations (Add, Edit, Delete) are handled using React's local state, without needing a backend. This simplifies the demonstration of RBAC and CRUD.
* **Modal Forms**: "Add Item" and "Edit Item" functionalities are presented within Bootstrap modals, providing a smooth and focused user experience.
* **Sticky Header**: The dashboard header remains fixed at the top of the screen when scrolling, ensuring easy navigation and access to user information and logout functionality.
* **Responsive Design**: The layout is designed to be fully responsive, ensuring optimal viewing and interaction across various device sizes.

---
