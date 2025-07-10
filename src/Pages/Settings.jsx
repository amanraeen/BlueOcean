import React from 'react'
import Navbar from '../Components/Navbar'

const Settings = () => {
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
      
      <div className='col-span-10  bg-amber-100 h-screen '>

      </div>



    </div>
  )
}

export default Settings