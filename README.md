# Bewgle Backend Task

## Description
This REST api is for library management such that users can see and borrow books from the library 

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

