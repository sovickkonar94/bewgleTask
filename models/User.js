const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
	name:{
		type:String
	},
	age:{
		type:Number
	}
},{timestamps : true});

module.exports = mongoose.model('user',UserSchema);
