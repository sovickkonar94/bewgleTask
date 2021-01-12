# Bewgle Backend Task

## Description
This REST api is for library management such that users can see and borrow books from the library 
## Usage
To run the project, please use the command line the following:
- npm run start 
  - this will run the server on port 3000


## API Endpoints
- base endpoint : http://localhost:3000/api

### User
#### Add new User
- method 	: POST
- body 	 	: {'name':"abc",age:23}
- url	 	: http://localhost:3000/api/user/add

#### List all User
- method	: GET
- url		: http://localhost:3000/api/user/list

## Book
### Add new Book
- method : POST
- body  : {name:"harry Potter"}
- url : http://localhost:3000/api/book/add

### List All Book
- method : GET
- url : http://localhost:3000/api/book/list

## Borrow
### Add new borrow 
- method : POST
- body :{user:"userID",book:"bookID"}
- url : http://localhost:3000/api/borrow/add
### List All Borrow
- method : GET
- url : http://localhost:3000/api/borrow/list

## Thoughts
- Whenever a user wants to borrow a book the userid and bookid are passed to store the borrowing details in the Borrow Model
- If the number of borrowing for a user is greater than 2 in the Borrow model the user is restricted to borrow anymore.



