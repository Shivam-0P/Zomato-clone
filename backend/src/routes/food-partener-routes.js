const express = require('express');
const { authfoodpartnermiddleware } = require('../middleware/auth.middleware');
const foodPartnerController = require('../controllers/food-partner.controller');

const router = express.Router();


router.get("/me", authfoodpartnermiddleware, foodPartnerController.getCurrentFoodpartner)
router.get("/:id", foodPartnerController.getFoodpartnerById)
module.exports = router