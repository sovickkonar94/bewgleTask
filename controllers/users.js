const User = require('../models/User');

const allUser = async(req,res)=>{
	try{
		let users = await User.find({});
		if(users.length == 0)
			return res.json({
				error:false,
				message:'No existing users'
			})
		else{
			return res.json({
				error:false,
				users
			})
		}

	}catch(err){
		console.log('error := ',err.message);
		return res.json({
			error:true,
			message:err.message
		})
	}
}


const addUser = async (req,res)=>{

	try{
		if(!req.body.name || !req.body.age)
			throw new Error('All required fields not available');

		let user = new User({
			name : req.body.name,
			age  : req.body.age
		})

		let result = await user.save();
		return res.json({
			error:false,
			user:result
		})

	}catch(err){
		console.log('error := ',err.message);
		return res.json({
			error:true,
			message:err.message
		})
	}
}



module.exports = {
	allUser,
	addUser
}