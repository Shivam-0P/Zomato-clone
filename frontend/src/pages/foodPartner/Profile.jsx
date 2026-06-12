import React, { useEffect, useState } from 'react'
import '../../styles/profile.css'
import axios from 'axios'

function Profile() {
	const [foodItems, setFoodItems] = useState([])
	const getdata = async () => {
  try {
    const foodRes = await axios.get(
  "http://localhost:3000/api/food",
  { withCredentials: true }
);
    setFoodItems(foodRes.data.fooditems);

    console.log(foodRes.data);
    
  } catch (error) {
    console.log(error);
  }
};
const firstitem = foodItems[0];
useEffect(() => {
  getdata();
}, []);
	return (
  <main className="profile-page">
    <section className="profile-container">

      {/* Header */}
      <div className="profile-top">

        <div className="profile-left">
          <div className="profile-avatar">
            <img className='profile-img' src="https://static.vecteezy.com/system/resources/previews/026/418/808/large_2x/man-head-user-profile-character-free-png.png" alt="" />
          </div>
        </div>

        <div className="profile-right">
          <h2>{firstitem?.name || "Business Name"}</h2>
          <p>{firstitem?.description || "Address"}</p>
        </div>

      </div>

      {/* Stats */}
      <div className="profile-stats">

        <div className="stat-box">
          <span>Total Meals</span>
          <h3>{foodItems.length}</h3>
        </div>

        <div className="stat-box">
          <span>Customers Served</span>
          <h3>15K</h3>
        </div>

      </div>

      <div className="divider"></div>

      {/* Videos */}
      <div className="video-grid">
        {foodItems.map((item) => (
          <div className="video-card" key={item._id}>
            <video
              src={item.video}
              className="grid-video"
              controls
            />
          </div>
        ))}
      </div>

    </section>
  </main>

	)
}

export default Profile
