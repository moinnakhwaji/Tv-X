import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "/no-image.jpg";

function Topnav() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const title = "movie"; // Assuming default title is "movie"

  const getSearchResults = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearch(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getSearchResults();
  }, [query]);

  return (
    <div className="relative w-full h-[10vh] text-white text-2xl flex justify-center items-center">
      <i className="ri-search-fill text-zinc-400 mx-4"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        va
        className="text-xl border-none outline-none p-2 rounded-md  w-full lg:w-[70%] xlg:w-[60%]  text-white"
        type="text"
        placeholder="Search here..."
      />
      {query.length > 0 && (
        <i onClick={() => setQuery("")} className="ri-close-line"></i>
      )}

      <div className="absolute w-full lg:w-3/4 max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto font-semibold rounded-lg">
        {search.map((s, i) => (
    <Link to={`/${s.media_type || title}/details/${s.id}`}
            key={i}
            className="block p-5 bg-zinc-200 border-b-2 text-zinc-700  border-zinc-300 hover:text-zinc-900 w-full lg:w-[75%]"
          >
            <img
              className="w-20 h-20 rounded-lg shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span className="capitalize text-md text-black bg-[#e4e4e7]">
              {s.original_title || s.name || s.title || s.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;
