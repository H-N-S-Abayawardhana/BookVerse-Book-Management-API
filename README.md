
# 📚 BookVerse-Book-Management-API

A RESTful API for managing books with user authentication built with Node.js, Express, and MongoDB.

## Features

- User authentication (register, login, get current user)
- Full CRUD operations for books
- Filter books by rating
- Search books by title, author, or genre
- Authentication middleware to protect routes
- Error handling middleware
- Input validation

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- bcryptjs for password hashing

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bookverse-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bookverse
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=24h
```

4. Make sure MongoDB is running locally

5. Start the server:
```bash
npm start
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/auth/me` - Get current user (requires auth)

### Books

- `GET /api/books` - Get all books for current user (requires auth)
- `POST /api/books` - Create a new book (requires auth)
- `GET /api/books/:id` - Get a single book by ID (requires auth)
- `PUT /api/books/:id` - Update a book (requires auth)
- `DELETE /api/books/:id` - Delete a book (requires auth)
- `GET /api/books/filter?rating=5` - Filter books by rating (requires auth)
- `GET /api/books/search?query=fantasy` - Search books by title/author/genre (requires auth)

## Example Requests

### Register a user

```
POST /api/auth/register
Content-Type: application/json

{
  "username": "testuser",
  "email": "test@example.com",
  "password": "123456"
}
```

### Create a book

```
POST /api/books
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "description": "A fantasy novel about the adventures of a hobbit",
  "genre": "Fantasy",
  "publishedYear": 1937,
  "pages": 310,
  "rating": 5
}
```

## License

MIT
