const router = require('express').Router();
const borrow = require('../controllers/borrows');

// Add new borrow
router.post('/add',borrow.borrowBook);

// View list of all borrowings
router.get('/list',borrow.borrowList);


module.exports = router;