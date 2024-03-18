import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/partial/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import Tv from './components/Tv'
import Person from './components/Person'
import Tvdetails from './components/Tvdetails'
import Moviesdetail from './components/Moviesdetail'
import Persondetails from './components/Persondetails'
import Trailer from './components/partial/Trailer'
import About from './components/About'
import Contact from './components/Contact'
function App() {
  return (
    <div className='bg-[#1F1E24] h-screen w-full text-white flex'>
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/about' element={<About />}/>
      
      <Route path="/contact" element={< Contact />} />
      <Route path='/trending' element ={<Trending/>}/>
      <Route path='/popular' element ={<Popular/>}>

      </Route>

      <Route path="/movie"  element={<Movie/>}/>

      <Route path='/movie/details/:id' element={<Moviesdetail />}>
        <Route path='/movie/details/:id/trailer' element={<Trailer/>}/>
        </Route> 


      
     
      <Route path='/tv' element={<Tv/>}/>
      <Route path='/tv/details/:id' element={<Tvdetails />} >
      <Route path='/tv/details/:id/trailer' element={<Trailer/>}/>


      </Route>

   
     
      <Route path='/person' element={<Person/>}/>
      <Route path='/person/details/:id' element={<Persondetails />}></Route>
   

      </Routes>  
    </div>
  )
}

export default App



