import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Load from "./partial/Load";
import Card from "./partial/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Topnav from "./partial/Topnav";

function Person() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const getPeople = async () => {
    try {
      const { data } = await axios.get(`/person/popular?page=${page}`);
      if (data.results.length > 0) {
        setPeople((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching people:", error);
      setHasMore(true);
    }
  };

  const fetchMoreData = () => {
    getPeople();
  };

  useEffect(() => {
    getPeople();
  }, []);

  return people.length > 0 ? (
    <div className="min-h-screen bg-[#1F1E24] text-white">
      <div className="flex flex-col md:flex-row bg-[#1F1E24]">
        <div className="flex items-center w-full md:w-1/2">
          <h2 className="capitalize text-md font-black text-zinc-400 p-4">
            <i
              onClick={() => navigate(-1)}
              className="ri-corner-up-left-line mr-2 cursor-pointer text-md"
            ></i>
            Popular People
          </h2>
          <Topnav className="h-[15vh] w-full" />
        
        </div>
        <div className="flex-grow"></div>
      </div>
      <InfiniteScroll
        className="overflow-y-auto"
        dataLength={people.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Load />}
      >
        <Card data={people} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Load></Load>
  );
}

export default Person;
