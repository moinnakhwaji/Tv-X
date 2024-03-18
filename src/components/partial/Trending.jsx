import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./Dropdown";
import axios from "../../utils/axios";
import Load from "./Load";
import Card from "./Card";
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [trendings, setTrendings] = useState([]);
    const [duration, setDuration] = useState("week");
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
            if (data.results.length > 0) {
                setTrendings((prevState) => [...prevState, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const refresh = () => {
        setPage(1);
        setTrendings([]);
        setHasMore(true);
        getTrending();
    };

    useEffect(() => {
        refresh();
    }, [category, duration]);

    const fetchMoreData = () => {
        getTrending();
    };

    return trendings.length > 0 ? (
        <div className="min-h-screen bg-[#1F1E24] text-white">
            <div className="flex flex-col items-center justify-between md:flex-row bg-[#1F1E24] relative z-10">
                <div className="flex items-center w-full md:w-auto">
                    <h2 className="capitalize text-md font-black text-zinc-400 p-4">
                        <i onClick={() => navigate(-1)} className="ri-corner-up-left-line mr-2 cursor-pointer text-md"></i>
                        Trending
                    </h2>
                    <div className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative z-10">
                        <Topnav />
                    </div>
                </div>
                <div className="flex justify-center md:justify-end w-full md:w-auto">
                    <Dropdown
                        title="Filter"
                        options={['tv', 'movie', 'all']}
                        func={(e) => setCategory(e.target.value)}
                    />
                    <Dropdown
                        title="Latest"
                        options={['week', 'day']}
                        func={(e) => setDuration(e.target.value)}
                    />
                </div>
            </div>

            <InfiniteScroll
                className="overflow-y-auto"
                dataLength={trendings.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<Load />}
            >
                <Card data={trendings} title="movie" />
            </InfiniteScroll>
        </div>
    ) : <Load />;
}

export default Trending;


