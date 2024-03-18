import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Load from "./partial/Load";
import Card from "./partial/Card";
import InfiniteScroll from 'react-infinite-scroll-component'
import Topnav from "./partial/Topnav";

function Popular() {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState("movie"); // Default category
    const [popular, setPopular] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    const getPopularity = async () => {
        try {
            const { data } = await axios.get(`${category}/popular?page=${page}`);
            if (data.results.length > 0) {
                setPopular((prevState) => [...prevState, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching popularity:', error);
            setHasMore(false);
        }
    };

    const fetchMoreData = () => {
        getPopularity();
    };

    useEffect(() => {
        getPopularity();
    }, [category]);

    return (
        <div className="min-h-screen bg-[#1F1E24] text-white">
            <div className="flex flex-col md:flex-row bg-[#1F1E24]">
                <div className="flex flex-col md:flex-row items-center w-full">
                    <h2 className="capitalize text-md md:text-lg lg:text-xl font-black text-zinc-400 p-4">
                        <i onClick={() => navigate(-1)} className="ri-corner-up-left-line mr-2 cursor-pointer text-md"></i>
                        popular
                    </h2>
                    <Topnav className="md:h-[15vh] w-full" /> {/* Adjusted height */}
                </div>
            </div>
            <InfiniteScroll
                className="overflow-y-auto"
                dataLength={popular.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<Load />}
            >
                <Card data={popular} title="movie" />
            </InfiniteScroll>
        </div> 
    );
}

export default Popular;
