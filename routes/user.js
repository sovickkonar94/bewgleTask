const router = require('express').Router();
const controller = require('../controllers/users');

// Add a new User
router.post('/add',controller.addUser);

//All User
router.get('/list',controller.allUser);

module.exports = router;