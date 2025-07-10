import React from 'react'
import Navbar from '../Components/Navbar'

const Message = () => {
  return (
    <div className='max-w-full grid grid-cols-12'>
      {/* left message portion  */}
      
      {/* <div className='col-span-2 bg-sky-100 h-screen border-r-2 border-r-gray-400'>
        <h1>Content</h1>
      </div> */}
      <div className="col-span-2 w-full bg-blue-100">
           <Navbar className=''/>
        </div>


      {/* contact section  */}
      
      <div className='col-span-4  p-4 gap-1 border-r-2 border-r-gray-400 bg-amber-100 h-screen  grid grid-rows-9'>
        <div className='row-span-2 rounded bg-amber-400'>Message Bar</div>
        <div className='row-span-1 rounded bg-amber-400'>Search</div>
        <div className='row-span-1 rounded bg-amber-400'>Contact</div>
        <div className='row-span-1 rounded bg-amber-400'>Contact</div>
        <div className='row-span-1 rounded bg-amber-400'>Contact</div>
        <div className='row-span-1 rounded bg-amber-400'>Contact</div>
        <div className='row-span-1 rounded bg-amber-400'>Contact</div>
        <div className='row-span-1 rounded bg-amber-400'>Contact</div>
      </div>

      {/* main message section  */}

      <div className='col-span-6 p-4 gap-1 bg-amber-100 grid grid-rows-12'>
        <div className='row-span-2 rounded bg-amber-400'></div>
        <div className='row-span-8 rounded bg-amber-400'></div>
        <div className='row-span-2 rounded bg-amber-400'></div>
      </div>


    </div>
  )
}

export default Message