const mongoose = require('mongoose');
const foodpartnerModel = require('../models/foodpartner.model');

async function getFoodpartnerById(req,res){
	const getFoodpartnerById = req.params.id;

	if(!mongoose.Types.ObjectId.isValid(getFoodpartnerById)){
		return res.status(400).json({message:"Invalid partner id"});
	}

	const foodPartner = await foodpartnerModel.findById(getFoodpartnerById)

	if(!foodPartner){
		return res.status(404).json({message:"Food partner not found"});
	}
	res.status(200).json({
		message:"food partner retive successfully",
  foodPartner
	});
}

async function getCurrentFoodpartner(req,res){
	if (!req.foodPartner) {
		return res.status(401).json({ message: "please login first" });
	}

	res.status(200).json({
		message:"food partner retive successfully",
		foodPartner: req.foodPartner
	});
}
module.exports ={
	getFoodpartnerById,
	getCurrentFoodpartner,
}