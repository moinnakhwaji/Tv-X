import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Load from "./partial/Load";
import Card from "./partial/Card";
import InfiniteScroll from 'react-infinite-scroll-component'
import Topnav from "./partial/Topnav";

function Movie() {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [hasMore, setHasMore] = useState(true);
  const [ category,setCategory]= useState("")
    const getMovies = async () => {
        try {
            const { data } = await axios.get(`/movie/top_rated?page=${page}`);
            if (data.results.length > 0) {
              // (`${category}/popular?page=${page}`)
                setMovies((prevState) => [...prevState, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
            setHasMore(false);
        }
    };

    const fetchMoreData = () => {
        getMovies();
    };

    useEffect(() => {
        getMovies();
    }, []);

    return movies.length > 0 ? (
        <div className="min-h-screen bg-[#1F1E24] text-white">
            <div className="flex flex-col md:flex-row bg-[#1F1E24]">
                <div className="flex items-center w-full md:w-1/2">
                    <h2 className="capitalize text-md font-black text-zinc-400 p-4">
                        <i onClick={() => navigate(-1)} className="ri-corner-up-left-line mr-2 cursor-pointer text-md"></i>
                      Movies
                    </h2>
                    <Topnav className="h-[15vh] w-full" /> {/* Adjusted height */}
                </div>
                <div className="flex-grow"></div>
            </div>
            <InfiniteScroll
                className="overflow-y-auto"
                dataLength={movies.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<Load />}
            >
                <Card data={movies} title="movie" />
            </InfiniteScroll>
        </div>
    ):<Load></Load>
}

export default Movie;
