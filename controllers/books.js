const Book = require('../models/Book');

const allBooks = async (req,res)=>{
	try{
		let books = await Book.find({isAvailable:true});
		if(books.length === 0){
			return res.json({
				error:false,
				message:'Library Empty'
			})
		}else{
			return res.json({
				error:false,
				books
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

const addBook = async (req,res)=>{
	try{
		if(!req.body.name)
			throw new Error('Book name not provided')

		let book = new Book({
			name:req.body.name,
			isAvailable:true,
		})

		let result = await book.save();
		return res.json({
			error:false,
			book : result
		})

	}catch(err){
		console.log("error := ",err.message);
		return res.json({
			error:false,
			message:err.message
		})
	}
}

module.exports = {
	allBooks,
	addBook
}