Project Overview

# To-Do-app
A simple to-do application

# Description 
A simplle RestFul API for managing task, built with Node.js, Express and MongoDB. This API allows users to create, read, update and delete tasks. 

# Technologies Used 
NodeJS - Javascript runtime environment
ExpressJS - Wen framework for Node.js
MongoDB - NoSQL database
Mongoose - Mongoose object modelling
express-validator - Input validation
dotenv - Evironment variable management 

# Set up and installation
Clone repo
    git clone <https://github.com/ellaomoni/To-Do-app.git>
    cd to-do-app

Install Dependencies
    npm install

Environment configuration
Create dotenv file in root directory  
    MONGO_URI = mongodb://127.0.0.1:27017/todoDB
    PORT = 3000

Start server 
npm start 
The server runs on http://localhost:3000

# API Endpoints 
http://localhost:3000/api/tasks

- Get all task 
URL: /
Method: GET
Description: Fetches all tasks
Response: 
[
    {
        "_id": "6780e4643e48acfb609a410c",
        "title": "Make Dinner",
        "description": "Preparing rice and chicken stew for dinner.",
        "status": "pending",
        "createdAt": "2025-01-10T09:12:04.727Z",
        "updatedAt": "2025-01-10T09:12:04.727Z",
        "__v": 0
    }
]

- Create a New Task
URL: /
Method: POST
Description: Creates a new task.
Request Body: 
{
  "title": "Finish project"
}

Response: 
{
    "title": "completed project",
    "status": "pending",
    "_id": "678298cce3cdc9bb220cd6b7",
    "createdAt": "2025-01-11T16:14:04.412Z",
    "updatedAt": "2025-01-11T16:14:04.412Z",
    "__v": 0
}

- Update a Task
URL: /:id
Method: PUT
Description: Updates a task by its ID.
Request Body: 
{
  "title": "completed project update",
  "completed": true
}

Response: 
{
    "_id": "678298cce3cdc9bb220cd6b7",
    "title": "completed project update",
    "status": "pending",
    "createdAt": "2025-01-11T16:14:04.412Z",
    "updatedAt": "2025-01-11T16:18:29.137Z",
    "__v": 0
}

- Delete a Task
URL: /:id
Method: DELETE
Description: Deletes a task by its ID.
Response:
{
    "message": "Task deleted successfully"
}

- Register User 
URL: /register
Method: POST
Description: Register a user
Response: 
{
 "message": "User registered successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OGJmYWNkZmM0YjI1NGU3ZGJhZjcyOSIsImlhdCI6MTczNzIyNjk1OCwiZXhwIjoxNzM3MjMwNTU4fQ.xUnsIP7KxFZ-tQ-OazEHpC3GOy2F0yBl-4hlLlLx7PE",
    "user": {
        "id": "678bfacdfc4b254e7dbaf729",
        "name": "Ella Omoni",
        "email": "ellaomoni@gmail.com"
    }
}

- Login 
URL: /login
Method: POST
Description: Login the user
Response: 
{
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OGJmYWNkZmM0YjI1NGU3ZGJhZjcyOSIsImlhdCI6MTczNzIyNjk3MCwiZXhwIjoxNzM3MjMwNTcwfQ.uAvOty_0vjYsm4h7sUftyO5syZhzeVX1N_AwlCSY72E",
    "user": {
        "id": "678bfacdfc4b254e7dbaf729",
        "name": "Ella Omoni",
        "email": "ellaomoni@gmail.com"
    }
}

# Validation Rules
Email must be a valid email format 
Password must be at least 8 characters

# Error Handling 
- Common Error Responses
400 Bad Request: Validation errors (missing fields, invalid data)
404 Not Found: Task not found
500 Internal Server Error: Server-side errors
- Invalid credentials
401: Unauthorized




# Future Development
Add user authentication (JWT)

#Author 
Emmanuella Omoni - Backend Developer 
Email: ellaomoni@gmail.com
LinkedIn: https://www.linkedin.com/in/emmanuella-omoni
X: https://x.com/ellaomoni







