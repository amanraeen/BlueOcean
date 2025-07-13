import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full p-3 h-screen border-r-2  border-r-gray-400  bg-amber-100">

      {/* <div className="flex flex-col h-full background justify-between"> */}
      <div className="h-full">
        {/* logo section  */}
        <div className=" border-b-2 border-dotted  w-full border-b-gray-400">
          <Link to={'/'}><h1 className="text-center pb-1 font-bold text-[1.25em] md:text-2xl"> <span className="text-sky-600 ">Blue</span>Ocean</h1></Link>
          </div>

        <nav className="flex flex-col justify-around w-fit md:text-[1.1em]  h-full">
        <ul className="flex flex-col gap-4 ">
            <NavLink to={'/'} className={({isActive})=>`${isActive?"background-2":''} mr-auto px-4 py-1`}><li>Home</li></NavLink>
            <NavLink to={'/explore'} className={({isActive})=>`${isActive?"background-2 ":''} mr-auto  px-4 py-1`}><li>Explore</li></NavLink>
            <NavLink to={'/message'} className={({isActive})=>`${isActive?"background-2 ":''} mr-auto px-4 py-1`}><li>Message</li></NavLink>
            <NavLink to={'/post'} className={({isActive})=>`${isActive?"background-2 ":''} mr-auto  px-4 py-1`}><li>Post</li></NavLink>
            <NavLink to={'/profile'} className={({isActive})=>`${isActive?"background-2 ":''} mr-auto px-4 py-1`}><li>Profile</li></NavLink>
          </ul>

          
            <NavLink to={'/settings'} className={({isActive})=>`${isActive?"background-2 ":''} mr-auto px-4 py-1`}><h2>Settings</h2></NavLink>
          
        </nav>

      </div>

    </div>
  );
};

export default Navbar;
