import React from "react";
import { Link } from "react-router-dom";
import nav_logo from "../Images/navimg.png";
import '../Custom.css'

const Header = () => {
  return (
    <div className='bg-black bg-opacity-80 sticky top-0 right-0 left-0'>
      <div className='w-5/6 mx-auto flex items-center justify-between py-3 text-white'>
        <div className='flex items-center'>
          <img src={nav_logo} width='50px' alt='' />
          <h3 className='text-3xl font-semibold pl-2 '>
            Creative <span className='text-green-500 font_akronim'>Arts</span>
          </h3>
        </div>
        <div className='w-1/4 flex justify-between items-center'>
          <Link className='text-lg font-medium'>Home</Link>
          <Link className='text-lg font-medium'>About</Link>
          <Link className='text-lg font-medium'>Services</Link>
          <Link className='text-lg font-medium'>Classes</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
