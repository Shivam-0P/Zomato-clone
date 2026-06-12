const mongoose = require('mongoose');
const foodModel = require('../models/food.model');
const storageService = require('../Services/storage.services');
const{v4:uuid}=require("uuid")


async function createFood(req,res){

    console.log(req.body);
    console.log(req.file);
	const fileuplodresult = await storageService.uploadFile(req.file.buffer,uuid())
	const fooditem = await foodModel.create({
		name:req.body.name,
		description:req.body.description,
		video:fileuplodresult.url,
		foodPartner:req.foodPartner._id
	})
	res.status(201).json({
		message:"food created successfully",
		food:fooditem,
	})
}
async function getFoodItem(req,res){
    const fooditems = await foodModel.find({})
		res.status(200).json({
			message:"food items fetched successfully",
			fooditems
		})
}

async function getFoodItemsByPartner(req,res){
	const { id } = req.params;

	if(!mongoose.Types.ObjectId.isValid(id)){
		return res.status(400).json({message:"Invalid partner id"});
	}
	const fooditems = await foodModel.find({ foodPartner: id });

	res.status(200).json({
		message:"food items fetched successfully",
		fooditems
	})
}

async function getFoodItemsForCurrentPartner(req,res){
	const fooditems = await foodModel.find({ foodPartner: req.foodPartner._id });

	res.status(200).json({
		message:"food items fetched successfully",
		fooditems
	})
}
module.exports = {
	createFood,
	getFoodItem,
	getFoodItemsByPartner,
	getFoodItemsForCurrentPartner
}