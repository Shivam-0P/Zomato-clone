const mongoose = require("mongoose");
function connectDB(){
	mongoose.connect(process.env.MONGOOSE_URI)
	.then(()=>{
		console.log("database connect");
	})
	.catch((err)=>{
		console.log("something went  worng",err);
	})
}
module.exports=connectDB;