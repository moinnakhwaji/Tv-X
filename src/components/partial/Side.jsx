import React from 'react';
import { Link } from 'react-router-dom';

function Side() {
  return (
    <div className='h-screen md:w-1/4 lg:w-1/5 xl:w-1/5 sm:w-1/4 border-r border-zinc-600 pb-4 bg-transparent'>
      {/* Responsive line for small devices */}
      <div className="sm:flex sm:items-center sm:justify-center my-2">
        <i className="ri-tv-fill text-[#6556CD] text-lg md:text-xl lg:text-2xl mr-1 p-1"></i>
        <span className='font-black text-base md:text-lg'>MOVIE</span>
      </div>
      {/* Navigation */}
      <nav className='flex flex-col text-sm md:text-base lg:text-lg'>
        <Link to={"/trending"} className='text-zinc-300 capitalize p-2 mt-3 md:p-3 hover:bg-[#6556CD] duration-300 rounded-lg'>
          <i className="ri-fire-fill bg-transparent"></i> Trending
        </Link>
        <Link to={"/popular"} className='text-zinc-300 capitalize p-2 mt-3  md:p-3 hover:bg-[#6556CD] duration-300 rounded-lg '>
          <i className="ri-bard-fill mr-1 bg-transparent"></i> Popular
        </Link>
        <Link to={"/movie"} className='text-zinc-300 capitalize p-3 mt-3  md:p-3 hover:bg-[#6556CD] duration-300 rounded-lg'>
          <i className="ri-movie-2-line mr-1 bg-transparent"></i> Movies
        </Link>
        {/* TV Shows Link and Icon in one line */}
       
          <Link to={"/tv"} className='text-zinc-300 capitalize p-3 mt-3  md:p-3 hover:bg-[#6556CD] duration-300 rounded-lg'>
            <i className="ri-tv-line mr-1 bg-transparent"></i>Tv shows
          </Link>
       
        <Link to={"/person"} className='text-zinc-300 capitalize p-2 mt-3  md:p-3 hover:bg-[#6556CD] duration-300 rounded-lg'>
          <i className="ri-team-fill mr-2 bg-transparent"></i> People
        </Link>
      </nav>
      {/* Contact and About */}
      <hr className='border-t border-zinc-600 my-4 md:my-8' />
      <nav className='flex flex-col text-xs md:text-sm lg:text-base'>
        <Link to={"/about"} className='text-zinc-300 capitalize mt-3  p-4 md:p-3 hover:bg-[#6556CD] duration-300 rounded-lg'>
          <i className="ri-information-fill mr-1 bg-transparent"></i> About
        </Link>
        <Link to={"/contact"} className='text-zinc-300 capitalize my-3  p-3  md:p-3 hover:bg-[#6556CD] duration-300 rounded-lg'>
          <i className="ri-phone-fill mr-1 bg-transparent"></i> Contact
        </Link>
      </nav>
    </div>
  );
}

export default Side;


