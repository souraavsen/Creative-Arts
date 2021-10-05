import React from "react";
import Events from "./Events";
import Programs from "./Programs";
import featureheader from '../Images/art13.jpeg'

const Featuers = () => {
  return (
    <div>
      <img src={featureheader} className='-mt-16' alt="" />
      <div className='py-16 bg-gray-50'>
        <h1 className='font_akronim text-6xl font-semibold text-green-500 text-center pb-16'>
          Programs
        </h1>
        {/* All Programs */}
        <Programs></Programs>
        <h1 className='font_akronim text-6xl font-semibold text-center pb-16 pt-12'>
          Upcoming <span className='text-green-500'>Events</span>
        </h1>
        {/* All Events */}
        <Events></Events>
      </div>
    </div>
  );
};

export default Featuers;
