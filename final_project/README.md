# Practice-Project

## [Project Overview](https://author-ide.skills.network/render?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZF9pbnN0cnVjdGlvbnNfdXJsIjoiaHR0cHM6Ly9jZi1jb3Vyc2VzLWRhdGEuczMudXMuY2xvdWQtb2JqZWN0LXN0b3JhZ2UuYXBwZG9tYWluLmNsb3VkL0lCTURldmVsb3BlclNraWxsc05ldHdvcmstQ0QwMjIwRU4tU2tpbGxzTmV0d29yay9sYWJzL0ZpbmFsUHJvamVjdC9maW5hbC1wcm9qZWN0X25ldy9Qcm9qZWN0LU92ZXJ2aWV3X1NjZW5hcmlvLWFuZC1SZXZpZXctQ3JpdGVyaWEubWQiLCJ0b29sX3R5cGUiOiJpbnN0cnVjdGlvbmFsLWxhYiIsImF0bGFzX2ZpbGVfaWQiOjI3MDYyLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTczMDE1NTI1OX0.DPBy0VcsLq3pPao0Q6Agz4A3spXHobMIA1-vEZW95Aw)

In this project you will assume the role of a back-end developer working for an online retailer selling books. You have been tasked with developing a server-side application that stores, retrieves and manages book ratings and reviews.

Your server-side application is required to provide the following features and capabilities to allow users to:

- Retrieve a list of all books available in the bookshop
- Search for specific books and retrieve their details based on the book’s ISBN code, author names and titles
- Retrieve reviews/comments for specified books
- Register as a new user of the application
- Login to the application
- Add a new review for a book (logged in users only)
- Modify a book review (logged in users can modify only their own reviews)
- Delete a book review (logged in users can delete only their own reviews)
- (Multiple users) Access the application at the same time to view and manage different book reviews simultaneously

As is the case with most software development projects, different people in the team work on different parts of the application. Another front-end developer in your team is working on the web-based client-side application that will communicate with your server-side application using REST. Therefore your job is to implement your server-side application as a RESTful web service. A software architect on your team has written the skeleton code for your server-side application using Node.js and Express.js.

To complete the project you will fork the skeleton code into your own repo, clone it locally into your development environment, and develop the code further to implement the CRUD capabilities listed above as HTTP methods in your Express server and test them using Postman. You will also implement Session and JWT authentication to allow only logged in users to perform certain operations. For your reference, this application comes preloaded with all of the book information.

Furthermore you will need to enhance your code using Promises, Callbacks or Async/Await functions to allow multiple users to interact with the application simultaneously and not have to wait for each other’s operations to complete.

### Evaluation Criteria –30 marks total

Please take the particular screenshots for each particular task for your peer review as mentioned in the lab instructions. Your peers who are also completing the course during the same session will grade this project. This project carries 30 points toward your final grade and is weighted as follows:

#### General users

Task 1: Get the book list available in the shop - 2 Points

Task 2: Get the books based on ISBN - 2 Points

Task 3: Get all books by Author - 2 Points

Task 4: Get all books based on Title - 2 Points

Task 5: Get book Review - 2 Points

Task 6: Register New user – 3 Points

Task 7: Login as a Registered user - 3 Points

#### Registered Users

Task 8: Add/Modify a book review - 2 Points

Task 9: Delete book review added by that particular user - 2 Points

#### Node.JS program with 4 methods

> Use Async/Await or Promises with Axios in Node.js for all the four methods.

Task 10: Get all books – Using async callback function – 2 Points

Task 11: Search by ISBN – Using Promises – 2 Points

Task 12: Search by Author – 2 Points

Task 13: Search by Title - 2 Points

Task 14: Submission of Project GitHub Link - 2 Points

## [Project Breakdown](https://author-ide.skills.network/render?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZF9pbnN0cnVjdGlvbnNfdXJsIjoiaHR0cHM6Ly9jZi1jb3Vyc2VzLWRhdGEuczMudXMuY2xvdWQtb2JqZWN0LXN0b3JhZ2UuYXBwZG9tYWluLmNsb3VkL0lCTURldmVsb3BlclNraWxsc05ldHdvcmstQ0QwMjIwRU4tU2tpbGxzTmV0d29yay9sYWJzL0ZpbmFsUHJvamVjdC9maW5hbC1wcm9qZWN0X25ldy9Qcm9qZWN0LUJyZWFrZG93bi5tZCIsInRvb2xfdHlwZSI6Imluc3RydWN0aW9uYWwtbGFiIiwiYXRsYXNfZmlsZV9pZCI6MjcwNjQsImFkbWluIjpmYWxzZSwiaWF0IjoxNzMwMTU1MjYyfQ.xRqTWlWUaRzs1_MybYPrinqz1f95TEzwhShJ2doLLYs)

This final project for this course has several steps that you must complete. To give you an overview of the project, all the high-level steps are listed below. The project is then divided into several tasks that give the detailed instructions for each step. You must complete all the task to successfully complete the project.

### Prerequisite: You need to complete the following two labs before starting the final project

1. Hands-on Lab - CRUD operations with Node.js.
2. Practice Project - CRUD operations on Express server with JWT & Session Authentication.

### Part A: Fork the Git repository to have the server side book review application code you need to start

1. Create your own copy of the git repository which has the code you need to start the project.
2. Clone the repository into the theia environment.

### Part B: npm install the necessary packages and Postman Login

1. Change to the express JS server directory and install all the packages required in your local environment for the server to run.
2. Use your Google mail credentials to register or log in with Postman and test the API endpoints for your final project.

### Part C: Implementing Authentication for using the Book Review application

1. You will create access restrictions to some endpoints using JWT and session level authentication.

### Part D: Access the book review application as general purpose user and register user

1. General user can access all the books available in the shop and get all books based on ISBN,Author,Title,Review.
2. Once a user register with the app, they are able to add or modify and delete book reviews.

### Part E: Use Async/Await or Promises with Axios in Node.js for each of the four CRUD Operations

1. Using the async,callback function, retrieve all books. Using Promises, search for the book by ISBN and then search by author or title.
2. Now test the API endpoints using Postman.

### Submit your project for Grading

- To be graded, submit the Github URL of your Book Review application code.
- In this lab, you will be prompted to take the required screenshots, similar to a sample provided, and to give it a specific name.
- Make sure to use the name specified, as the person reviewing your lab will be able to identify the correct screenshot based on that and review accordingly.
