# CRUD API for Comments using Express.js

This repository contains a simple CRUD (Create, Read, Update, Delete) API for managing comments built using Express.js, a web application framework for Node.js. The API allows users to perform various operations on comments, including creating, reading, updating, and deleting them.

## **Features**
*Create Comment:* Add a new comment.
*Read Comments:* Retrieve a list of all comments or a specific comment by ID.
*Update Comment:* Modify an existing comment.
*Delete Comment:* Remove a comment by ID.


## Technologies Used
Node.js: JavaScript runtime environment.
Express.js: Web framework for Node.js.
Body-Parser: Middleware to parse incoming request bodies.

## Prerequisites
Node.js and npm installed on your machine.
MongoDB installed locally or a MongoDB Atlas account (if using MongoDB).

## Installation
Clone the repository:

**bash**
Copy code
git clone https://github.com/your-username/comments-crud-api.git
cd comments-crud-api
Install the dependencies:

**bash**
Copy code
npm install
Set up environment variables. Create a .env file in the root directory and add the following:

**bash**
Copy code
npm start
The server will start on http://localhost:3000.

## API Endpoints
**Create a Comment**
URL: /comments
Method: POST

**Read All Comments**
URL: /comments
Method: GET

**Read a Specific Comment**
URL: /comments/:id
Method: GET

**Update a Comment**
URL: /comments/:id
Method: PUT

**Delete a Comment**
URL: /comments/:id
Method: DELETE

**Contributing**
Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.
