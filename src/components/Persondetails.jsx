// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import {removperson} from "../store/actions/movieAction"
// import { removeperson } from "../store/actions/personaction";
// import { Outlet, useLocation, useParams } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
// import Load from "./partial/Load";
// import Horicard from "./partial/Horicard";
// // import { asyncLoad } from "../store/actions/movieAction";
// import { asyncLoad } from "../store/actions/personaction";
// // import Horicard from "./partial/Horicard";

// function Persondetails() {
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { info } = useSelector((state) => state.person);

//   useEffect(() => {
//     dispatch(asyncLoad(id));
//     return () => {
//       dispatch(removeperson());
//     };
//   }, [dispatch, id]);
//   console.log(info)
//   return info ? (
  
//     <div className="text-white h-[200vh] bg-[#1F1E24] w-screen px-[7%] overflow-x-hidden">
//       <nav className="w-full flex gap-6 items-center">
//         <i
//           onClick={() => navigate(-1)}
//           className="ri-corner-up-left-line text-3xl cursor-pointer text-white"
//         ></i>

        
//       </nav>
//       {/* nav hogay pehla part */}
//       <div className="flex w-full   ">
//         <div className="w-full md:w-1/4">
//         <img className="h-[40vh] w-full mt-10  object-cover shadow-[8px_17px_35px_2px_rgba(0,0,0,0.5)]" src={`https://image.tmdb.org/t/p/original/${ info.detail.profile_path}`} alt="" />

//         <hr className=" mb-5 mt-10 border-zinc-400 h-[2px]" />

//         <div className="flex gap-3">
//         <a target="_blank" href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-global-fill text-white text-xl"></i></a>

//         <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i className="ri-facebook-fill text-white text-xl"></i></a>


//         <a target="_blank" href={`https://www.instagram.com//${info.externalid.instagram_id}`}><i className="ri-instagram-fill text-white text-xl"></i></a>

//         </div>
// <h1 className="text-2xl text-zinc-500 font-semibold capitalize">
//   person info
// </h1>
// <h1 className=" text-zinc-500 capitalize  text-lg font-extrabold mt-3">known for</h1>
// <h1 className="text-sm text-zinc-400 capitalize ">
//   {info.detail.
// known_for_department}

// </h1>
// <h1 className="text-lg text-zinc-500 capitalize ">gender</h1>
// <h1 className="text-sm text-zinc-400 capitalize ">{info.detail.gender === 2 ? "male":"female"}</h1>


// <h1 className="text-lg text-zinc-500 capitalize ">birth day</h1>
// <h1 className="text-sm text-zinc-400 capitalize ">{info.detail.
// birthday
// }</h1>

// <h1 className="text-lg text-zinc-500 capitalize ">death day</h1>
// <h1 className="text-sm text-zinc-400 capitalize ">{info.detail.

// deathday ? info.detail.deathday : "stil alive"

// }</h1>

// <h1 className="text-lg text-zinc-400 capitalize ">known as</h1>
// <h1 className="text-sm text-zinc-400 capitalize ">{info.detail.also_known_as.join(",")
// }</h1>


//         </div>
// <div className="w-[80%] ml-8">
// <h1 className="text-zinc-500 text-5xl md:text-4xl lg:text-5xl xl:text-6xl">{info.detail.name}</h1>


// <h1 className=" text-zinc-400 text-xl capitalize ">overview</h1>
// <p className=" text-zinc-400 text-xs capitalize w-[75%] ">{info.detail.biography}</p>


// <h1 className="capitalize font-bold text-lg">known for</h1>
// <Horicard data={info.
// combinedcredit.cast}/>

// </div>
      
//       </div>
      
    
//     </div>
//   ) : (
//     <Load></Load>
//   );
// }

// export default Persondetails;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeperson } from "../store/actions/personaction";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Load from "./partial/Load";
import Horicard from "./partial/Horicard";
import { asyncLoad } from "../store/actions/personaction";

function Persondetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.person);

  useEffect(() => {
    dispatch(asyncLoad(id));
    return () => {
      dispatch(removeperson());
    };
  }, [dispatch, id]);

  return info ? (
    <div className="text-white bg-[#1F1E24] px-[7%] overflow-x-hidden">
      <nav className="w-full flex gap-6 items-center">
        <i
          onClick={() => navigate(-1)}
          className="ri-corner-up-left-line text-3xl cursor-pointer text-white"
        ></i>
      </nav>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4">
          <img
            className="h-[40vh] w-full mt-10 object-cover shadow-[8px_17px_35px_2px_rgba(0,0,0,0.5)]"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-10 border-zinc-400 h-[2px]" />
          <div className="flex gap-3">
            <a target="_blank" href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-global-fill text-white text-xl"></i></a>
            <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i className="ri-facebook-fill text-white text-xl"></i></a>
            <a target="_blank" href={`https://www.instagram.com//${info.externalid.instagram_id}`}><i className="ri-instagram-fill text-white text-xl"></i></a>
          </div>
          <h1 className="text-2xl text-zinc-500 font-semibold capitalize">person info</h1>
          <h1 className="text-lg text-zinc-500 capitalize">known for</h1>
          <h1 className="text-sm text-zinc-400 capitalize">{info.detail.known_for_department}</h1>
          <h1 className="text-lg text-zinc-500 capitalize">gender</h1>
          <h1 className="text-sm text-zinc-400 capitalize">{info.detail.gender === 2 ? "male" : "female"}</h1>
          <h1 className="text-lg text-zinc-500 capitalize">birth day</h1>
          <h1 className="text-sm text-zinc-400 capitalize">{info.detail.birthday}</h1>
          <h1 className="text-lg text-zinc-500 capitalize">death day</h1>
          <h1 className="text-sm text-zinc-400 capitalize">{info.detail.deathday ? info.detail.deathday : "still alive"}</h1>
          <h1 className="text-lg text-zinc-400 capitalize">known as</h1>
          <h1 className="text-sm text-zinc-400 capitalize">{info.detail.also_known_as.join(",")}</h1>
        </div>
        <div className="w-full md:w-3/4 ml-0 md:ml-8">
          <h1 className="text-zinc-500 text-6xl capitalize">{info.detail.name}</h1>
          <h1 className="text-zinc-400 text-xl capitalize">overview</h1>
          <p className="text-zinc-400 text-xs capitalize">{info.detail.biography}</p>
          <h1>known for</h1>
          <Horicard data={info.combinedcredit.cast}/>
        </div>
      </div>
    </div>
  ) : (
    <Load></Load>
  );
}

export default Persondetails;
