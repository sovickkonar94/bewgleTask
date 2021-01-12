const router = require('express').Router();
const book = require('../controllers/books');

// View All Books
router.get('/list',book.allBooks);


// Add New Book
router.post('/add',book.addBook);



module.exports = router;