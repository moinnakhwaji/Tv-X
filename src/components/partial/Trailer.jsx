import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import  Eroor from "./Eroor"

function Trailer() {
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const yt = useSelector((state) => state[category].info.videos);
    const navigate = useNavigate();

    return (
        <div className='w-full h-screen bg-black absolute top-0 left-0 flex justify-center items-center'>
            <Link onClick={() => navigate(-1)}>
                <i className="ri-close-large-line absolute top-[2%] right-[4%] text-3xl text-white"></i>
            </Link>
            <div className="w-full h-full flex justify-center items-center">
                {yt ? (
                    <ReactPlayer
                        className='react-player'
                        url={`https://www.youtube.com/watch?v=${yt.key}`}
                        width='80vw' // Adjust width based on viewport width
                        height='60vh' // Adjust height based on viewport height
                        controls={true}
                    />
                ) : (
                    <Eroor />
                    // <h2>ok</h2>
                )}
            </div>
        </div>
    );
}

export default Trailer;
