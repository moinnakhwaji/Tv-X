

import React from 'react';
import { Link } from 'react-router-dom';

function Horicard({ data }) {
    const title = "movie";
    console.log(data);
    return (
        <div className='container mx-auto px-5 scrollable-element'>
            <div className="flex flex-no-wrap overflow-x-auto">
                {data.map((d, i) => (
                    <Link 
                        to={`/${d.media_type || title}/details/${d.id}`} 
                        // to={`/movie/details/${d.id}`} 
                        key={i} 
                        className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
                    >
                      
                        
                        <div className="bg-zinc-900 rounded shadow-lg overflow-hidden" style={{ height: 'auto' }}>
                            <img
                                className='w-full h-40 sm:h-52 object-cover rounded-t'
                                src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`}
                                alt={d.original_title || d.name || d.title || d.original_name}
                            />
                            <div className="p-4">
                                <h1 className='text-xl md:text-2xl font-black mb-3'>{(d.original_title || d.name || d.title || d.original_name).slice(0, 30)}</h1>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Horicard;




// import React from 'react';
// import { Link } from 'react-router-dom';

// function Horicard({ data }) {
//     // const title = "movie";
//     console.log(data);
//     return (
//         <div className='container mx-auto px-5 scrollable-element'>
//             <div className="flex flex-no-wrap overflow-x-auto">
//                 {data.map((d, i) => (
                  
//                     <Link to={`/movie/details/${d.id}`}  key={i}
//                         className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
//                     >
//                         <div className="bg-zinc-900 rounded shadow-lg overflow-hidden" style={{ height: 'auto' }}>
//                             <img
//                                 className='w-full h-40 sm:h-52 object-cover rounded-t'
//                                 src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`}
//                                 alt={d.original_title || d.name || d.title || d.original_name}
//                             />
//                             <div className="p-4">
//                                 <h1 className='text-xl md:text-2xl font-black mb-3'>{(d.original_title || d.name || d.title || d.original_name).slice(0, 30)}</h1>
//                             </div>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Horicard;

