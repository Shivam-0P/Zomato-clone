const foodPartnerModel = require("../models/foodpartner.model")
const UserModel = require("../models/user.model")
const jwt = require("jsonwebtoken");

async function authfoodpartnermiddleware(req,res,next){
	const token = req.cookies.token;
	if(!token){
		return res.status(401).json({
			message:"please login first"
		})
	}
	try{
      const decoded =  jwt.verify(token,process.env.JWT_SECRET)
			const foodPartner = await foodPartnerModel.findById(decoded.id);
			if(!foodPartner){
				return res.status(401).json({
					message:"please login first"
				})
			}
			req.foodPartner = foodPartner
			next()
	}
	catch(err){
       return res.status(401).json({
				message:"Invalid token"
			 })
	}
}
async function authUserMiddleware(req,res,next){
	 const token = req.cookies.token;
	 if(!token){
		return res.status(401).json({
			message:"please login first"
		})
		
	 }
	 try{
		const decoded = jwt.verify(token,process.env.JWT_SECRET)

		const user = await UserModel.findById(decoded.id);
		if(!user){
			return res.status(401).json({
				message:"please login first"
			})
		}
		req.user = user
		next()
	 }catch(err){
		return res.status(401).json({
			message:"invalid token"
		})
	 }
}
module.exports = {
	authfoodpartnermiddleware,
	authUserMiddleware
}