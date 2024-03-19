// import React from 'react';
// import { Link } from 'react-router-dom';

// function Hs({ data }) {
//   return (
//     <div
//       style={{
//         background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(${
//           data?.backdrop_path || data?.profile_path
//             ? `https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path}`
//             : 'https://via.placeholder.com/150'
//         })`,
//         backgroundPosition: 'top 10%',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         overflowY: 'hidden',
//         width: '100%',
//         height: 'auto',
//         minHeight: '50vh', // Adjusted for small devices
//       }}
//       className='h-[100vh] md:h-[70vh] xl:h-[80vh] w-full flex flex-col md:flex-row p-5 md:p-10 justify-end items-center text-center overflow-hidden'
//     >
//       <div className="w-full md:w-[50%] xl:w-full mb-4 md:mb-0 md:mr-4 ">
//         <img
//           src={data?.backdrop_path || data?.profile_path
//             ? `https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path}`
//             : 'https://via.placeholder.com/150'
//           }
//           alt={data.original_title || data.name || data.title || data.original_name}
//           className="w-full h-auto"
//         />
//       </div>
//       <div className="w-full md:w-[50%] xl:w-full text-center md:text-left">
//         <h1 className='text-lg md:text-xl xl:text-2xl text-[#6556CD] font-black mb-4'>
//           <i className="ri-tv-fill text-[#6556CD] text-lg md:text-xl lg:text-2xl mr-2"></i>
//           <span className='font-black text-sm md:text-base lg:text-lg'>MOVIE X</span>
//         </h1>
//         <h1 className='text-xl md:text-2xl xl:text-3xl text-white font-black mb-4'>{data.original_title || data.name || data.title || data.original_name}</h1>
//         <p className='text-sm md:text-base lg:text-lg font-medium my-2'>
//           {data.overview.slice(0, 200)}
//         </p>
//         <p className="text-xs text-gray-400 mt-1"><i className="ri-album-fill mb-2 text-yellow-400"></i>{data.media_type} </p>
//         <p className="text-xs text-gray-400"><i className="ri-megaphone-fill text-yellow-400"></i>{ data.first_air_date || "no information"}</p>
//         <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='py-2 px-4 rounded-lg bg-[#6556CD] capitalize font-bold mt-4 text-xs block w-full md:w-auto'>Watch trailer</Link>
//       </div>
//     </div>
//   );
// }

// export default Hs;

import React from 'react';
import { Link } from 'react-router-dom';

function Hs({ data }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(${
          data?.backdrop_path || data?.profile_path
            ? `https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path}`
            : 'https://via.placeholder.com/150'
        })`,
        backgroundPosition: 'top 10%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        overflowY: 'hidden',
        width: '100%',
        height: 'auto',
        minHeight: '50vh', // Adjusted for small devices
      }}
      className='h-[100vh] bg-transparent md:h-[70vh] xl:h-[80vh] w-full flex flex-col md:flex-row p-5 md:p-10 justify-end items-center text-center overflow-hidden'
    >
      <div className="w-full md:w-[50%] xl:w-full mb-4 md:mb-0 md:mr-4  bg-transparents">
        <img
          src={data?.backdrop_path || data?.profile_path
            ? `https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path}`
            : 'https://via.placeholder.com/150'
          }
          alt={data.original_title || data.name || data.title || data.original_name}
          className="w-full h-auto"
        />
      </div>
      <div className="w-full md:w-[50%] xl:w-full text-center md:text-left bg-transparent">
        <h1 className='text-lg md:text-xl xl:text-2xl text-[#6556CD] font-black mb-4 bg-transparent '>
          <i className="ri-tv-fill text-[#6556CD] text-lg md:text-xl lg:text-2xl mr-2 bg-transparent"></i>
          <span className='font-black text-sm md:text-base lg:text-lg bg-transparent'>MOVIE X</span>
        </h1>
        <h1 className='text-xl md:text-2xl xl:text-3xl text-white font-black mb-4 bg-transparent'>{data.original_title || data.name || data.title || data.original_name}</h1>
        <p className='text-sm md:text-base lg:text-lg font-medium my-2 bg-transparent'>
          {data.overview.slice(0, 200)}
        </p>
        <p className="text-xs text-gray-400 mt-1  bg-transparent"><i className="ri-album-fill mb-2 text-yellow-400"></i>{data.media_type} </p>
        <p className="text-xs text-gray-400  bg-transparent"><i className="ri-megaphone-fill text-yellow-400"></i>{ data.first_air_date || "no information"}</p>
        <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='py-2 px-4 rounded-lg bg-[#6556CD] capitalize font-bold mt-4 text-xs block w-full md:w-auto'>Watch trailer</Link>
      </div>
    </div>
  );
}

export default Hs;
