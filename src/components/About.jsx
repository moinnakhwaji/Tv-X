import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto px-4 py-8">
            <Link onClick={() => navigate(-1)}>
                <i className="ri-arrow-left-line text-2xl mb-4 inline-block"></i>
            </Link>
            <div className="text-center">
                <h1 className="text-3xl font-semibold mb-4">About Movie X</h1>
                <p className="text-lg mb-8">Welcome to Movie X, your ultimate destination for all things movies!</p>
                <div className="sm:flex sm:justify-around sm:items-start">
                    <div className="mb-8 sm:w-1/2 sm:mr-4">
                        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                        <p className="text-lg">At Movie X, we are passionate about movies and committed to providing you with the best possible experience. Our mission is to...</p>
                    </div>
                    <div className="sm:w-1/2 sm:ml-4">
                        <h2 className="text-2xl font-semibold mb-4">Features</h2>
                        <ul className="text-lg">
                            <li>Explore a vast collection of movies.</li>
                            <li>Discover information about the latest releases.</li>
                            <li>Read detailed movie descriptions and reviews.</li>
                            <li>Watch trailers and teasers.</li>
                            <li>Save your favorite movies for later.</li>
                            <li>Stay updated with upcoming releases and news.</li>
                            <li>And much more!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
