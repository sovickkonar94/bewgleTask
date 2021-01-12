
const Borrow = require('../models/Borrow');
const Book = require('../models/Book');


const borrowBook = async (req,res)=>{
	try{
		if(!req.body.user || !req.body.book)
			throw new Error('All required fields are not available');
		else{
			
			// Check if the book is availble for borrow 
			let book = await Book.findOne({
				_id:req.body.book
			})

			if(book.isAvailable){
				// Check the Number of Books already borrowed by the User
				let count = await Borrow.countDocuments({user:req.body.user});
				if(count <2){
					let saveBorrow = new Borrow({
						user:req.body.user,
						book:req.body.book,
					})

					let saved = await saveBorrow.save();
					// Update the status of the book 
					let updatedBook = await Book.findOneAndUpdate({_id:saveBorrow.book},{$set:{isAvailable:false}},{new:true});
					console.log(updatedBook)
					return res.json({
						error:false,
						result:saved
					})

				}else{
					throw new Error('Limit of borrowing books is 2')
				}

			}else{
				throw new Error('This book cannot be borrowed right now')
			}

		}

	}catch(err){
		console.log('error := ',err.message);
		res.json({
			error:true,
			message:err.message
		})
	}
}


const borrowList = async (req,res)=>{
	try{
		let result = await Borrow.find({})
						.populate("user")
						.populate("book");
		if(result.length === 0){
			return res.json({
				error 	: false,
				message : 'No borrowing done' 
			});
		}else{
			return res.json({
				error 	: false,
				list 	: result
			})
		}

	}catch(err){
		res.json({
			error:true,
			message:err.message
		})
	}
}




module.exports = {
	borrowBook,
	borrowList
}