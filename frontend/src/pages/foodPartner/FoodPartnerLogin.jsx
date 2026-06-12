import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/auth-pages.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FoodPartnerLogin = () => {
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;

		const response = await axios.post("http://localhost:3000/api/auth/food-partner/login", {
			email,
			password
		}, {
			withCredentials: true
		});

		localStorage.setItem('foodPartnerId', response.data.foodPartner._id);
		localStorage.setItem('foodPartnerName', response.data.foodPartner.name || '');
		navigate(`/create_food`);
	};

	return (
		<main className="auth-shell">
			<section className="auth-card" aria-labelledby="auth-title">
				<div className="auth-header">
					<span className="auth-badge">Food Partner</span>
					<h1 className="auth-title" id="auth-title">Partner login</h1>
					<p className="auth-description">Use this screen to enter your dashboard and manage listings.</p>
				</div>

				<form className="auth-form" onSubmit={handleSubmit}>
					<label className="field">
						<span className="field-label">Email address</span>
						<input type="email" name="email" placeholder="partner@example.com" aria-label="Email address" />
					</label>

					<label className="field">
						<span className="field-label">Password</span>
						<input type="password" name="password" placeholder="Enter your password" aria-label="Password" />
					</label>

					<button type="submit" className="auth-button">Login</button>
				</form>

				<div className="auth-footer">
					<p>Need a new partner account?</p>
					<Link to="/food-partner/register">Register</Link>
				</div>
			</section>
		</main>
	)
}

export default FoodPartnerLogin