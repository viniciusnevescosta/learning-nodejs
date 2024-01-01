# Learning NodeJs

![image](https://github.com/viniciusnevescosta/learning-nodejs/assets/66970818/d88e6db5-1019-496c-a6f7-bd8ed0644d3f)

Welcome to the repository of my NodeJs learning project! Here, I explored the vast universe of NodeJs, creating a simple yet powerful user management application.

- [Read in english](en_README.md)

## Summary of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [How to Test](#how-to-test)
- [Learning Acquired](#learning-acquired)
  
## Overview

This project is part of my learning journey, where I delved into web development with NodeJs, MongoDB and Express. The proposal was to create a CRUD API to manage users.

## Technologies Used

- **NodeJs:** The engine that drives the entire application, allowing JavaScript code to be executed on the server side.
- **MongoDB:** The NoSQL database that stores and retrieves user data.
- **Express:** The framework that simplifies the construction of web applications with NodeJs, facilitating the creation of routes and middleware.

## Functionalities

1. **User Registration:**
    - Create new user records, providing information such as name, email and password.

2. **User Inquiry:**
    - Retrieve details of existing users via API queries.

3. **Data Update:**
    - Update user information, keeping the database always up to date.

4. **User Removal:**
    - Delete users that are no longer needed, keeping the database clean.

## How to Test

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/viniciusnevescosta/learning-nodejs.git
    ```

2. **Install Dependencies:**
    ```bash
    cd learning-nodejs
    pnpm i
    ```

3. **Configure the Environment:**
    - Create a `.env` file in the project root and provide the necessary environment variables:<br><br>
    ```env
    MONGODB_USERNAME=your_mongodb_user
    MONGODB_PASSWORD=your_mongodb_password
    ```

4. **Run the Application:**
    ```bash
    pnpm start:dev
    ```

5. **Explore the API:**
    - Navigate to `http://localhost:8080` and use the defined ```/users``` route to interact with the API.

## Learning Acquired

During the construction of this project, I gained valuable knowledge, including:

- 🚀 In-depth understanding of the NodeJs environment and its role in web development.
- 📊 Practical experience in integrating and manipulating data with MongoDB.
- 🌐 RESTful API routing and creation skills using the Express framework.

---

**Note:** This project has been archived as it represents a successfully completed study. There are no plans for further development as its objectives have been successfully achieved.
