import React from 'react';
import { Link } from 'react-router-dom';

function Card({ data,title }) {
// const title = "movie"

  return (
    <div className='flex flex-wrap bg-[#1e1d23] p-0 md:pl-[9vw] justify-center'>
    
      {data.map((d, i) => (
        <Link to={`/${d.media_type || title}/details/${d.id}`}  key={i} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-2 my-2 rounded-md p-0 border border-zinc-500 hover:border-zinc-300'>
          <img className='rounded-md w-full h-[30vh] md:h-[40vh] object-cover shadow-[8px_17px_35px_2px_rgba(0,0,0,0.5)]' src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path || d.poster_path }`} alt="" />
          <h2 className='text-xl md:text-2xl font-semibold mt-2 mb-2 text-zinc-400'>{d.name || d.title || d.original_name || d.original_title}</h2>
        </Link>
      ))}
    </div>
  );
}

export default Card;






