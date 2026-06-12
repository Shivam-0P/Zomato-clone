const express = require('express');
const foodcontroller = require('../controllers/food.controller')
const authMiddleware = require("../middleware/auth.middleware")
const router = express.Router(); 
const multer = require('multer');

const upload = multer({
	storage:multer.memoryStorage(),
})
// router.post('/',authMiddleware.authfoodpartnermiddleware,upload.single("video") ,foodcontroller.createFood)
router.post(
  '/',
  authMiddleware.authfoodpartnermiddleware,
  upload.single("video"),
  foodcontroller.createFood
);
router.get('/',foodcontroller.getFoodItem)
router.get('/partner/me', authMiddleware.authfoodpartnermiddleware, foodcontroller.getFoodItemsForCurrentPartner)
router.get('/partner/:id', foodcontroller.getFoodItemsByPartner)
module.exports = router;