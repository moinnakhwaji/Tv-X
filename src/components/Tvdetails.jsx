import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoad, removetv } from "../store/actions/tvaction";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Load from "./partial/Load";
import Horicard from "./partial/Horicard";

const TvDetails = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.tv);

    useEffect(() => {
        dispatch(asyncLoad(id));
        return () => {
            dispatch(removetv());
        };
    }, [dispatch, id]);

    return info ?  (
        <div className="w-full min-h-[200vh]  overflow-hidden">
            <div
                className="w-full min-h-[200vh] p-4"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(${`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}`})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
               
                <nav className="w-full flex gap-6 items-center">
                    <i onClick={() => navigate(-1)} className="ri-corner-up-left-line text-3xl cursor-pointer text-white"></i>
                    <a target="_blank" href={info.detail.homepage}><i className="ri-global-fill text-white text-xl"></i></a>
                    <a target="_blank" href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-links-fill"></i></a>
                    <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>imdb</a>
                </nav>

                {/* Content */}
                <div className="w-full mt-6 flex flex-col md:flex-row">
                    {/* Image */}
                    <img className="h-[40vh] w-[30vh] object-cover shadow-[8px_17px_35px_2px_rgba(0,0,0,0.5)]" src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.profile_path}`} alt="" />

                    {/* Details */}
                    <div className="ml-8">
                        <h1 className="text-4xl font-extrabold mb-2">
                            {info.detail.name || info.detail.origin_name || info.detail.title || info.origin_title}
                            <span className="text-xl">
                                {info.detail.release_date && info.detail.release_date.split("-")[0]}
                            </span>
                        </h1>
                        <h1 className="capitalize font-medium">{info.detail.release_date}</h1>
                        <span className="capitalize font-medium">{info.detail.runtime}min</span>
                        <h1 className="capitalize font-medium">{info.detail.genres.map((g) => g.name).join(",")}</h1>
                        <h1 className="text-xl mb-3">overview</h1>
                        <p>{info.detail.overview}</p>
                        <h1 className="text-xl capitalize mt-3 font-extrabold mb-5">tv translated by</h1>
                        {info.translations && info.translations.length > 0 && <p>{info.translations.join(" ")}</p>}
                        <Link to={`${pathname}/trailer`} className="capitalize p-4 bg-[#6556CD] border-none m-2 rounded-lg shadow-md">play trailer</Link>
                    </div>
                </div>

                {/* Watch Providers */}
                <div className="flex flex-wrap justify-center mt-4">
                    {/* Flatrate */}
                    <div className="flex flex-wrap">
                        <p className="m-4 capitalize font-semibold">flatrate</p>
                        {info.watchprovider && info.watchprovider.flatrate && info.watchprovider.flatrate.map((w, i) => (
                            <img title={w.provider_name} className="w-[5vh] h-[5vh] rounded-md m-4 object-cover" key={i} src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
                        ))}
                    </div>
                    
                    {/* Available on Rent */}
                    <div className="flex flex-wrap">
                        <p className="m-4 capitalize font-semibold">Available on rent</p>
                        {info.watchprovider && info.watchprovider.rent && info.watchprovider.rent.map((w, i) => (
                            <img title={w.provider_name} className="w-[5vh] h-[5vh] rounded-md m-4 object-cover" key={i} src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
                        ))}
                    </div>
                    
                    {/* Buy from here */}
                    <div className="flex flex-wrap">
                        <p className="m-4 capitalize font-semibold">Buy from here</p>
                        {info.watchprovider && info.watchprovider.buy && info.watchprovider.buy.map((w, i) => (
                            <img title={w.provider_name} className="w-[5vh] h-[5vh] rounded-md m-4 object-cover flex" key={i} src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
                        ))}
                    </div>
                </div>

                {/* Recommendations */}
                <h1 className="capitalize text-xl font-black">related  & similarstuff</h1>
                <Horicard data={(info.recommendations && info.recommendations.length > 0) ? info.recommendations : info.similar} />
                
                {/* Nested Routes */}
                <Outlet />
            </div>
        </div>
    ) : <Load />;
    
};

export default TvDetails;


