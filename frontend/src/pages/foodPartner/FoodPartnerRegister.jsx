import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import '../../styles/auth-pages.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const FoodPartnerRegister = () => {

	const navigate = useNavigate();

	const Formsubmit = async (e) =>{
		e.preventDefault();

    const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;

		const response = await axios.post("http://localhost:3000/api/auth/food-partner/register",{
			name,
			email,
			password
		},{
			withCredentials:true
		})
		navigate("/create_food")


	}


	return (
		
		<main className="auth-shell">
			<section className="auth-card" aria-labelledby="auth-title">
				<div className="auth-header">
					<span className="auth-badge">Food Partner</span>
					<h1 className="auth-title" id="auth-title">Register your partner profile</h1>
					<p className="auth-description">A simple onboarding screen for restaurants, kitchens, and delivery partners.</p>
				</div>

				<form className="auth-form" onSubmit={Formsubmit}>
					<label className="field">
						<span className="field-label">Business name</span>
						<input type="text" name="name" placeholder="Your restaurant name" aria-label="Business name" />
					</label>

					<label className="field">
						<span className="field-label">Work email</span>
						<input type="email" name="email" placeholder="partner@example.com" aria-label="Work email" />
					</label>

					<label className="field">
						<span className="field-label">Password</span>
						<input type="password" name="password" placeholder="Create a password" aria-label="Password" />
					</label>

					<button type="submit" className="auth-button">Create partner account</button>
				</form>

				<div className="auth-footer">
					<p>Already partnered?</p>
					<Link to="/food-partner/login">Login</Link>
				</div>

				<p className="auth-note">Built to feel lightweight and aligned with the rest of the onboarding flow.</p>
			</section>
		</main>
	)
}

export default FoodPartnerRegister