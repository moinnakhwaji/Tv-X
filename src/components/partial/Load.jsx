import React from 'react'
import loading from "/loading.gif"

function Load() {
  return (
    <div className='flex justify-center items-center bg-[#000000] h-screen w-screen '>
      <img className='' src={loading} alt="" />
    </div>
  )
}

export default Load

