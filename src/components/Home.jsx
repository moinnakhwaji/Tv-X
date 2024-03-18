import React from 'react'
import Side from './partial/Side'
import Topnav from './partial/Topnav'
import { useState } from 'react'
import axios from '../utils/axios'
import { useEffect } from 'react'
import Hs from './partial/Hs'
import Cart from './partial/Cart'
import Dropdown from './partial/Dropdown'
import Load from './partial/Load'


function Home() {
    document.title = 'Home'
  const [wallpaper, setwallpaper] = useState(null)
  
  const [trendings, settrendings] = useState(null)
  const [category,setcategory]=useState("all")

const getwallpaper = async ()=>{
  try {
    const {data}= await axios.get(`/trending/all/day`)
    let randomdata = data.results[(Math.random() * data.results.length).toFixed()]
    setwallpaper(randomdata)
} catch (error) {
    console.log(error)
  }
}
const gettrending = async ()=>{
  try {
    const {data}= await axios.get (`/trending/${category}/day`)
    settrendings(data.results)
// console.log(data.results)
  } catch (error) {
    console.log(error)
  }
}

// console.log(wallpaper)
useEffect(()=>{
  gettrending()
!wallpaper &&   getwallpaper()
  
},[category])

    return wallpaper && trendings ? ( 
    <>
    
    <Side/>
    <div className='h-screen w-[80%] overflow-auto  overflow-x-hidden '>
      <Topnav></Topnav>
    <Hs data={wallpaper}  />



    <div className="mb-4 flex justify-between px-3">
    <h2 className='capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white p-2'>
  trending
</h2>

<Dropdown  title="Filter"options={['tv', "movie","all"]} func={(e) => setcategory(e.target.value)}  />


    </div>   
    <Cart data={trendings} />

      </div>
    </>
  ):<Load/>
}

export default Home
