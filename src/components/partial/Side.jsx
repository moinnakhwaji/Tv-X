import React from 'react';
import { Link } from 'react-router-dom';

function Side() {
  return (
    <div className='h-screen md:w-1/4 lg:w-1/5 xl:w-1/5 border-r border-zinc-600 pb-4'>
      <h1 className='text-lg md:text-xl ml-2 py-2'>
        <i className="ri-tv-fill text-[#6556CD] text-lg md:text-xl lg:text-2xl mr-2"></i>
        <span className='font-black text-base md:text-lg'>MOVIE X</span>
      </h1>
      <nav className='flex flex-col text-sm md:text-base lg:text-lg'>
        <h1 className='text-lg md:text-xl lg:text-2xl font-bold mt-4 md:mt-8 mb-2 md:mb-4 pl-2 md:pl-4 sm:m-2 sm:p-2'>New Feeds</h1>
        <Link to={"/trending"} className='text-zinc-300 capitalize p-2 md:p-3 hover:bg-[#6556CD] duration-300 rounded-lg'>
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link to={"/popular"} className='text-zinc-300 capitalize p-2 md:p-3 hover:bg-[#6556CD] duration-300 rounded-lg '>
          <i className="ri-bard-fill mr-2"></i> Popular
        </Link>
        <Link to={"/movie"} className='text-zinc-300 capitalize p-2 md:p-3 hover:bg-[#6556CD] duration-300 rounded-lg'>
          <i className="ri-movie-2-line mr-2"></i> Movies
        </Link>
        <Link to={"/tv"} className='text-zinc-300 capitalize p-2 md:p-3 hover:bg-[#6556CD] duration-300 rounded-lg'>
          <i className="ri-tv-line mr-2"></i> Tv shows
        </Link>
        <Link to={"/person"} className='text-zinc-300 capitalize p-2 md:p-3 hover:bg-[#6556CD] duration-300 rounded-lg'>
          <i className="ri-team-fill mr-2"></i> People
        </Link>
      </nav>
      <hr className='border-t border-zinc-600 my-4 md:my-8' />
      <nav className='flex flex-col text-sm md:text-base lg:text-lg'>
        <Link to={"/about"} className='text-zinc-300 capitalize p-2 md:p-3 hover:bg-[#6556CD] duration-300 rounded-lg'>
          <i className="ri-information-fill mr-2"></i> About
        </Link>
        <Link to={"/contact"} className='text-zinc-300 capitalize p-2 md:p-3 hover:bg-[#6556CD] duration-300 rounded-lg'>
          <i className="ri-phone-fill mr-2"></i> Contact
        </Link>
      </nav>
    </div>
  );
}

export default Side;
