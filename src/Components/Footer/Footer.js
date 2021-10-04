import React from "react";
// importing image for footer
import footerimg from "../Images/navimg.png";

const Footer = () => {
  return (
    <div className='bg-black pt-8'>
      <div className='container mx-auto flex justify-around items-center'>
        {/* site name with logo */}
        <div className='flex items-center'>
          <img src={footerimg} width='45px' alt='' />
          <h3 className='text-3xl text-white font-semibold pl-2 '>
            Creative{" "}
            <span className='text-green-400 font_akronim'>
              Arts
            </span>
          </h3>
        </div>

        <div>
          <h3 className='text-lg text-green-400 font-thin text-center'>
            {" "}
            “We don’t make mistakes, just happy little accidents.” – Bob Ross
                  </h3>
                  {/* Social Links */}
          <div className='flex items-center justify-center py-6'>
            <i class='fab fa-facebook text-white text-3xl hover:text-green-400 cursor-pointer'></i>
            <i class='fab fa-twitter text-white text-3xl px-6 hover:text-green-400 cursor-pointer'></i>
            <i class='fab fa-linkedin text-white text-3xl hover:text-green-400 cursor-pointer'></i>
          </div>
        </div>
      </div>
      <p className='text-white font-thin text-center py-8'>
        creativearts © 2021. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
