import React, { useEffect, useState } from 'react';
import '../styles/home-reels.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/api/food', {
                withCredentials: true,
            })
            .then((response) => {
                setVideos(response.data.fooditems);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <main className="reels-page">
            <section className="reels-feed" aria-label="Store reels">
                {videos.map((item) => (
                    <article
                        className="reel-card"
                        key={item._id}
                        aria-label={item.description}
                    >
                        <video
                            className="reel-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        >
                            <source src={item.video} type="video/mp4" />
                        </video>

                        <div className="reel-overlay" />

                        <div className="reel-content">
                            <p className="reel-description">
                                {item.description}
                            </p>

                            <Link
                                className="reel-btn"
                                to={`/food-partner/${item.foodPartner}`}
                            >
                                Visit Store
                            </Link>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}

export default Home;