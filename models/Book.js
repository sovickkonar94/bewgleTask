const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = Schema({
	name:{
		type:String
	},
	isAvailable:{
		type:Boolean
	}
},{timestamps : true});

module.exports = mongoose.model('book',BookSchema);