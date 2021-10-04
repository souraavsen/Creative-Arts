import React from "react";
import Events from "./Events";
import Programs from "./Programs";

const Featuers = () => {
  return (
    <div className='py-16'>
      <h1 className='font_akronim text-6xl font-semibold text-green-500 text-center pb-16'>
        Programs
          </h1>
          <Programs></Programs>
      <h1 className='font_akronim text-6xl font-semibold text-center pb-16 pt-12'>
        Upcoming <span className='text-green-500'>Events</span>
      </h1>
      <Events></Events>
    </div>
  );
};

export default Featuers;
