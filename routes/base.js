const router = require('express').Router();
const user = require('./user');
const book = require('./book');
const borrow = require('./borrow');


router.get('/',(req,res)=>{
	res.json({message:'server is up and running'});
})

router.use('/user',user);
router.use('/book',book);
router.use('/borrow',borrow);


module.exports = router;