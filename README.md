# InnSight Hotel Booking Platform

![InnSight](https://i.ibb.co.com/BXvcTMp/InnSight.png) 

## 🌟 Live Demo  
🔗 [InnSight Hotel Booking Platform](https://inn-sight-95eaf.web.app/) 

## 📂 **GitHub Repository:**  
- [Main Repository](https://github.com/programming-hero-web-course2/b10a11-client-side-AnantaBG)  
- [Personal Repository](https://github.com/AnantaBG/InnSight) 

## 📖 Introduction  

**InnSight** is a modern and user-friendly hotel booking platform designed to provide a seamless experience for users to discover and book hotel rooms. With an intuitive interface, interactive maps, and a robust authentication system, InnSight ensures a hassle-free booking experience.  

## 📌 Table of Contents  
- [🌟 Live Demo](#-live-demo)  
- [📖 Introduction](#-introduction)  
- [📌 Features](#-features)  
  - [🏠 Homepage](#-homepage)  
  - [🔐 User Authentication](#-user-authentication)  
  - [🏕️ Navigation Bar](#-navigation-bar)  
  - [🏨 Rooms Page](#-rooms-page)  
  - [🏠 Room Details Page](#-room-details-page)  
  - [📅 My Bookings Page](#-my-bookings-page)  
  - [⭐ Review System](#-review-system)  
  - [🔐 Access Control](#-access-control)  
  - [🚫 404 Page](#-404-page)  
- [🛠️ Tech Stack & Dependencies](#%EF%B8%8F-tech-stack--dependencies)  
- [🚀 Optional Features (Planned Enhancements)](#-optional-features-planned-enhancements)  
- [⚙️ Deployment Guidelines](#%EF%B8%8F-deployment-guidelines)  
- [🏆 Challenges Faced](#-challenges-faced)  
- [📜 License](#-license)

## 📌 Features  

### 🏠 Homepage  
- **Banner Slider** – Displays a welcoming message with a "Rooms" button.  
- **Interactive Map** – Uses `react-leaflet` to show the hotel's location.  
- **Featured Rooms** – Highlights six top-rated rooms with images and descriptions.  
- **User Reviews Section** – Displays feedback from previous guests.  

### 🔐 User Authentication  
- **Login** – Supports email/password and Google authentication.  
- **Registration** – Requires name, email, photo URL, and password.  
- **Password Validation** – Ensures strong password security (uppercase, lowercase, minimum length).  
- **Toast/SweetAlert Notifications** – Provides real-time feedback on authentication events.  

### 🏕 Navigation Bar  
- **Links to "Rooms" & "My Bookings" pages.**  
- **Access Control:** "My Bookings" is restricted to authenticated users only.  

### 🏨 Rooms Page  
- Displays all available rooms in **card or table format**.  
- Each room has an **image, name, price, and total reviews**.  
- Clicking a room opens the **Room Details Page**.  

### 🏠 Room Details Page  
- Displays detailed room information and multiple images in a **slider system**.  
- **User Reviews Section** (shows all reviews or a message if none exist).  
- **Booking Modal:**  
  - Displays **room summary, price, and booking date selection** (via date picker).  
  - **Ensures availability** and updates the database upon successful booking.  

### 📅 My Bookings Page  
- Lists **all rooms booked** by the logged-in user.  
- Provides **cancel booking** functionality with a confirmation modal.  
- **Update Date** – Allows users to change their booking date.  
- **Review Button** – Enables users to submit reviews for booked rooms.  

### ⭐ Review System  
- Users can only review rooms **they have booked**.  
- **Review Modal:**  
  - Includes **username (read-only), rating (1-5), comment, and timestamp**.  
- Reviews appear on the **Room Details Page** for other users.  

### 🔐 Access Control  
- **Non-logged-in users cannot book rooms** (redirected to login).  
- **Non-logged-in users can view room details but cannot post reviews.**  

### 🚫 404 Page  
- Displays a **creative image/GIF** with a "Back to Home" button.  

## 🛠️ Tech Stack & Dependencies  

- **Frontend:** React, React Router  
- **State Management:** Context API  
- **Authentication:** Firebase Authentication  
- **Database:** Firebase Firestore  
- **Styling:** Tailwind CSS  
- **Packages Used:**  
  - `helmet` – Manage browser tab titles & metadata  
  - `react-leaflet` – Interactive maps  
  - `react-toastify` – Notifications  
  - `react-datepicker` – Booking date selection  
  - `moment.js` – Time-based operations  
  - `jwt-decode` (if JWT authentication is implemented)  

## 🚀 Optional Features (Planned Enhancements)  
- Booking duration selection.  
- **Hotel Gallery** – Showcasing rooms, amenities, and events.  
- **Special Offers Section** – Displays promotions on the homepage.  
- **Room Filtering** – Filter by price range (server-side).  
- **Booking Cancellation Rule** – Users can cancel bookings **at least 1 day before**.  
- **JWT Authentication** – Store user tokens on the client-side for secure requests.  
- **Room Sorting** – Filter rooms by available offers and date range.  
- **Toggle View** – Switch between card/table view for rooms.  
- **"About Us" & "Contact Us" Pages**.  

## ⚙️ Deployment Guidelines  

1. **Ensure server-side functionality works** without CORS/404/504 errors.  
2. **Live link should work flawlessly** on all routes without reload errors.  
3. **Private routes should persist user sessions** on reload.  
4. **Add domain authorization in Firebase** (if deploying on Netlify, Surge, or Vercel).  

## 🏆 Challenges Faced  

- **User Reviews Sorting:** Displaying the latest reviews first (server-side sorting).  
- **Room Filtering:** Implementing price range filtering effectively.  
- **Booking Cancellation Logic:** Ensuring proper date-based restrictions.  
- **JWT Authentication:** Securely storing and managing user tokens.  

## 📜 License  


This project is licensed under the **MIT License**.  

📌 **Developed by [AnantaBG](https://github.com/AnantaBG)**  


---

🔗 **Live Demo:** [InnSight Hotel Booking Platform](https://inn-sight-95eaf.web.app/)  

💬 Feel free to contribute or provide feedback! 🚀  
