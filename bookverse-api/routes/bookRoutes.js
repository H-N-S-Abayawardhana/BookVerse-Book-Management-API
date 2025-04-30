const express = require('express');
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  filterBooksByRating,
  searchBooks
} = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');
const validateBook = require('../utils/validateBook');

const router = express.Router();

// Apply auth middleware to all routes
router.use(protect);

// Search and filter routes
router.route('/filter').get(filterBooksByRating);
router.route('/search').get(searchBooks);

// CRUD routes
router.route('/')
  .get(getAllBooks)
  .post(validateBook, createBook);

router.route('/:id')
  .get(getBookById)
  .put(validateBook, updateBook)
  .delete(deleteBook);

module.exports = router;