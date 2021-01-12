const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BorrowSchema = Schema({
	user:{
		type:Schema.Types.ObjectId,
		ref:'user'
	},
	book:{
		type:Schema.Types.ObjectId,
		ref:'book'
	}
},{timestamps : true});

module.exports = mongoose.model('borrow',BorrowSchema);