BookVerse API Endpoints for Postman Testing
Here are all the endpoints from your Book Management API to test in Postman. I'll include the URL, method, required headers, body parameters, and examples for each endpoint.
Base URL
http://localhost:5000
Authentication Endpoints
1. Register a new user

URL: /api/auth/register
Method: POST
Headers:
Content-Type: application/json

Body:
json{
  "username": "testuser",
  "email": "test@example.com",
  "password": "123456"
}

Response: Returns JWT token on success
json{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}


2. Login a user

URL: /api/auth/login
Method: POST
Headers:
Content-Type: application/json

Body:
json{
  "email": "test@example.com",
  "password": "123456"
}

Response: Returns JWT token on success
json{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}


3. Get current user profile

URL: /api/auth/me
Method: GET
Headers:
Authorization: Bearer <your_token>

Response: Returns user data
json{
  "success": true,
  "data": {
    "_id": "60a12345b789c123456789ab",
    "username": "testuser",
    "email": "test@example.com",
    "createdAt": "2023-05-16T10:30:00.000Z"
  }
}


Book Endpoints
4. Create a new book

URL: /api/books
Method: POST
Headers:
Content-Type: application/json
Authorization: Bearer <your_token>

Body:
json{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "description": "A fantasy novel about the adventures of a hobbit",
  "genre": "Fantasy",
  "publishedYear": 1937,
  "pages": 310,
  "rating": 5
}

Response: Returns created book data
json{
  "success": true,
  "data": {
    "_id": "60b12345c789c123456789ab",
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "description": "A fantasy novel about the adventures of a hobbit",
    "genre": "Fantasy",
    "publishedYear": 1937,
    "pages": 310,
    "rating": 5,
    "user": "60a12345b789c123456789ab",
    "createdAt": "2023-05-16T10:35:00.000Z"
  }
}


5. Get all books (with pagination)

URL: /api/books
Method: GET
Headers:
Authorization: Bearer <your_token>

Query Parameters (optional):

page: Page number (default: 1)
limit: Items per page (default: 10)


Response: Returns array of books
json{
  "success": true,
  "count": 1,
  "pagination": {
    "prev": null,
    "next": null
  },
  "data": [
    {
      "_id": "60b12345c789c123456789ab",
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "description": "A fantasy novel about the adventures of a hobbit",
      "genre": "Fantasy",
      "publishedYear": 1937,
      "pages": 310,
      "rating": 5,
      "user": "60a12345b789c123456789ab",
      "createdAt": "2023-05-16T10:35:00.000Z"
    }
  ]
}


6. Get a single book by ID

URL: /api/books/:id
Method: GET
Headers:
Authorization: Bearer <your_token>

Example URL: /api/books/60b12345c789c123456789ab
Response: Returns single book object
json{
  "success": true,
  "data": {
    "_id": "60b12345c789c123456789ab",
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "description": "A fantasy novel about the adventures of a hobbit",
    "genre": "Fantasy",
    "publishedYear": 1937,
    "pages": 310,
    "rating": 5,
    "user": "60a12345b789c123456789ab",
    "createdAt": "2023-05-16T10:35:00.000Z"
  }
}


7. Update a book

URL: /api/books/:id
Method: PUT
Headers:
Content-Type: application/json
Authorization: Bearer <your_token>

Example URL: /api/books/60b12345c789c123456789ab
Body (include only fields you want to update):
json{
  "rating": 4,
  "description": "Updated description for The Hobbit"
}

Response: Returns updated book data
json{
  "success": true,
  "data": {
    "_id": "60b12345c789c123456789ab",
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "description": "Updated description for The Hobbit",
    "genre": "Fantasy",
    "publishedYear": 1937,
    "pages": 310,
    "rating": 4,
    "user": "60a12345b789c123456789ab",
    "createdAt": "2023-05-16T10:35:00.000Z"
  }
}


8. Delete a book

URL: /api/books/:id
Method: DELETE
Headers:
Authorization: Bearer <your_token>

Example URL: /api/books/60b12345c789c123456789ab
Response: Returns empty data object on success
json{
  "success": true,
  "data": {}
}


9. Filter books by rating

URL: /api/books/filter
Method: GET
Headers:
Authorization: Bearer <your_token>

Query Parameters:

rating: Book rating (1-5)


Example URL: /api/books/filter?rating=5
Response: Returns filtered books
json{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "60b12345c789c123456789ab",
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "description": "A fantasy novel about the adventures of a hobbit",
      "genre": "Fantasy",
      "publishedYear": 1937,
      "pages": 310,
      "rating": 5,
      "user": "60a12345b789c123456789ab",
      "createdAt": "2023-05-16T10:35:00.000Z"
    }
  ]
}


10. Search books

URL: /api/books/search
Method: GET
Headers:
Authorization: Bearer <your_token>

Query Parameters:

query: Search term for title, author, or genre


Example URL: /api/books/search?query=fantasy
Response: Returns matching books
json{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "60b12345c789c123456789ab",
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "description": "A fantasy novel about the adventures of a hobbit",
      "genre": "Fantasy",
      "publishedYear": 1937,
      "pages": 310,
      "rating": 5,
      "user": "60a12345b789c123456789ab",
      "createdAt": "2023-05-16T10:35:00.000Z"
    }
  ]
}


Testing Tips in Postman

Create a Collection for BookVerse API
Create Environment Variables:

Create a variable named base_url with value http://localhost:5000
Create a variable named token (initially empty)


Set up Authentication Flow:

After successful login/register, use a script to save the token:

js// In the "Tests" tab of your login request
const response = pm.response.json();
if (response.success && response.token) {
  pm.environment.set('token', response.token);
}

Use Environment Variables in Requests:

Base URL: {{base_url}}/api/books
Authorization header: Bearer {{token}}


Testing Order:

Register a user
Login to get the token
Check your profile with /api/auth/me
Create a few books
Try all the CRUD operations
Test filtering and searching