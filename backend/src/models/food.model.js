const mongoose = require('mongoose');

const foodschema = new mongoose.Schema({
	name: {
		type:String,
		required:true,
	},
	video: {
		type:String,
     required:true,
	},
	description: {
		type: String,
	}, 
	foodPartner:{
		type: mongoose.Schema.Types.ObjectId,
		ref: "foodpartner"
	}
})
const foodmodel = mongoose.model("food",foodschema);
module.exports = foodmodel;