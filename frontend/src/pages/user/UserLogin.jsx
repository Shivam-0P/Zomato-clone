import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/auth-pages.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const UserLogin = () => {
	const navigate = useNavigate();
	const Handlesubmit = async (e) =>{
		e.preventDefault();
   
		const email = e.target.email.value;
		const password = e.target.password.value;

		const response = await	axios.post("http://localhost:3000/api/auth/user/login",{
			email,
			password
		},{
			withCredentials:true
		})

    navigate("/")
	}

	return (
		<main className="auth-shell">
			<section className="auth-card" aria-labelledby="auth-title">
				<div className="auth-header">
					<span className="auth-badge">User Account</span>
					<h1 className="auth-title" id="auth-title">Welcome back</h1>
					<p className="auth-description">Sign in to continue your food browsing and checkout flow.</p>
				</div>

				<form className="auth-form" onSubmit={Handlesubmit}>
					<label className="field">
						<span className="field-label">Email address</span>
						<input type="email" name="email" placeholder="you@example.com" aria-label="Email address" />
					</label>

					<label className="field">
						<span className="field-label">Password</span>
						<input type="password" name="password" placeholder="Enter your password" aria-label="Password" />
					</label>

					<button type="submit" className="auth-button">Login</button>
				</form>

				<div className="auth-footer">
					<p>New here?</p>
					<Link to="/user/register">Create account</Link>
				</div>
			</section>
		</main>
	)
}

export default UserLogin