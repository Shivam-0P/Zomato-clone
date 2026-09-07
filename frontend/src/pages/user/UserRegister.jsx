import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import '../../styles/auth-pages.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		
		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;

	const response = await	axios.post("http://localhost:3000/api/auth/user/register",{
			fullName:name,
			email,
			password
		},{
			withCredentials:true
		})
		console.log(response.data);
		navigate("/user/login")
	};
	return (
		<main className="auth-shell">
			<section className="auth-card" aria-labelledby="auth-title">
				<div className="auth-header">
					<span className="auth-badge">User Account</span>
					<h1 className="auth-title" id="auth-title">Create your user account</h1>
					<p className="auth-description">A clean sign-up screen for ordering, tracking, and managing your meals.</p>
				</div>

				<form className="auth-form" onSubmit={handleSubmit}>
					<label className="field">
						<span className="field-label">Full name</span>
						<input type="text" name="name" placeholder="Enter your name" aria-label="Full name" />
					</label>

					<label className="field">
						<span className="field-label">Email address</span>
						<input type="email" name="email" placeholder="you@example.com" aria-label="Email address" />
					</label>

					<label className="field">
						<span className="field-label">Password</span>
						<input type="password" name="password" placeholder="Create a password" aria-label="Password" />
					</label>

					<button type="submit" className="auth-button">Create account</button>
				</form>

				<div className="auth-footer">
					<p>Already have an account?</p>
					<Link to="/user/login">Login</Link>
				</div>

				<p className="auth-note">Designed to stay minimal and comfortable in both light and dark system themes.</p>
			</section>
		</main>
	)
}

export default UserRegister