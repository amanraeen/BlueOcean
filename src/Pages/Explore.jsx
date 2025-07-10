import React from 'react'
import Navbar from '../Components/Navbar'

const Explore = () => {
  return (
    <div className='max-w-full grid grid-cols-12'>
      {/* left explore portion  */}
      {/* <div className='col-span-3 bg-sky-100 h-screen border-r-2 border-r-gray-400'>
        <h1>Content</h1>
      </div> */}

      <div className="col-span-2 w-full bg-blue-100">
           <Navbar className=''/>
        </div>


      {/* reels section  */}
      
      <div className='col-span-10 p-4 gap-1 bg-amber-100 h-screen grid grid-cols-3 grid-rows-4'>
        <div className='col-span-1 row-span-1 rounded bg-amber-400'></div>
        <div className='col-span-1 row-span-2 rounded bg-amber-400'></div>
        <div className='col-span-1 row-span-1 rounded bg-amber-400'></div>
        <div className='col-span-1 row-span-2 rounded bg-amber-400'></div>
        <div className='col-span-1 row-span-1 rounded bg-amber-400'></div>
        <div className='col-span-1 row-span-1 rounded bg-amber-400'></div>
        <div className='col-span-1 row-span-2 rounded bg-amber-400'></div>
        <div className='col-span-1 row-span-1 rounded bg-amber-400'></div>
        <div className='col-span-1 row-span-1 rounded bg-amber-400'></div>
        
      </div>
    </div>
  )
}

export default Explore