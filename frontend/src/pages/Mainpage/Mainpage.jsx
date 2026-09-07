import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/mainpage.css'

const Mainpage = () => {
	const navigate = useNavigate()

	return (
		<main className="role-choice" aria-labelledby="role-choice-title">
			<section className="role-choice__card">
				<span className="role-choice__brand">Zomato</span>
				<h1 id="role-choice-title">How would you like to continue?</h1>
				<p>Choose the account that best describes you.</p>

				<div className="role-choice__actions">
					<button type="button" onClick={() => navigate('/food-partner/register')}>
						As a Food Partner
					</button>
					<button type="button" onClick={() => navigate('/user/register')}>
						As a User
					</button>
				</div>
			</section>
		</main>
	)
}

export default Mainpage
