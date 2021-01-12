require('dotenv').config(); 

let DB 		= null;
let ENV 	= null;
let PORT 	= null;

ENV = process.env.NODE_ENV;

if( ENV === 'development' ) {
	
	DB 		= process.env.DEV_MONGODB_URI;
	PORT 	= process.env.DEVPORT;

} else if( ENV === 'production' ) {
	
	DB 		= process.env.PROD_MONGODB_URI;
	PORT 	= process.env.PRODPORT;

} 


module.exports = {
	MONGO_URI : DB,
	PORT 		
}