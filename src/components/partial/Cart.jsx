import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ data }) {
    console.log(data)
    return (
        <div className='container mx-auto px-5'>
            <div className="flex flex-wrap justify-center">
                {data.map((d, i) => (
                    <Link to={`/${d.media_type || title}/details/${d.id}`} key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
                        <div className="bg-zinc-900 rounded shadow-lg">
                            <img
                                className='w-full h-60 object-cover rounded-t'
                                src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`}
                                alt={d.original_title || d.name || d.title || d.original_name}
                            />
                            <div className="p-4">
                                <h1 className='text-xl md:text-2xl font-black mb-3'>{d.original_title || d.name || d.title || d.original_name.slice(0, 30)}</h1>
                                <p className='text-white text-sm mt-2'>{d.overview.slice(0, 100)}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Cart;

