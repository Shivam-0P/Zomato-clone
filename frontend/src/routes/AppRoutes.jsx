import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import UserRegister from '../pages/user/UserRegister'
import UserLogin from '../pages/user/UserLogin'
import FoodPartnerRegister from '../pages/foodPartner/FoodPartnerRegister'
import FoodPartnerLogin from '../pages/foodPartner/FoodPartnerLogin'
import Profile from '../pages/foodPartner/Profile'
import Home from '../General/Home'
import Createfood from '../pages/foodPartner/Createfood'

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				{/* <Route path="/" element={<Navigate to="/user/register" replace />} /> */}
				<Route path="/user/register" element={<UserRegister />} />
				<Route path="/user/login" element={<UserLogin />} />
				<Route path="/food-partner/register" element={<FoodPartnerRegister />} />
				<Route path="/food-partner/login" element={<FoodPartnerLogin />} />
				<Route path="/food-partner/profile" element={<Profile />} />
				<Route path="/" element={<Home/>}/>
				<Route path="/create_food" element = {<Createfood />} />
				<Route path = "/food-partner/:id" element = {<Profile/>}/>
			</Routes>
		</Router>
	)
}

export default AppRoutes
