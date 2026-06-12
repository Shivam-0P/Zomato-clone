const app = require('./app');
const connectDB = require('./db/db');
require('dotenv').config(); 

connectDB();

 app.listen(3000,()=>{
	console.log("app is running");
	
 })