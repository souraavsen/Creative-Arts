import React from "react";

const Service = (props) => {
  const { service_name, img, description, days, time, fees } = props.service;

  return (
    <div>
      <div className='w-80 flex flex-col my-8 bg-white shadow-lg px-8 pt-4 pb-8 hover:bg-gray-50 cursor-pointer rounded-md mx-auto'>
        <img
          className='w-40 h-40 rounded-full mx-auto my-2 border-2 border-gray-300'
          src={img}
          alt=''
        />
        <h4 className='text-2xl font-semibold py-4 text-center text-green-600'>
          {service_name}
        </h4>
        <p
          title={description}
          className='h-32 text-justify pt-2 pb-4 mb-4 overflow-ellipsis overflow-hidden'
        >
          {description}
        </p>
        <p className='pb-1'>
          <span className='font-semibold'>Days in Week:</span>
          <span className='text-green-700 font-semibold'> {days}</span>
        </p>
        <p className='pb-1'>
          <span className='font-semibold'>Time:</span>{" "}
          <span className='text-green-700 font-semibold'>{time}</span>
        </p>
        <p className='pb-1'>
          <span className='font-semibold'>Fee:</span>{" "}
          <span className='font-semibold text-green-700 text-xl'> ${fees}</span>{" "}
          <span className='font-semibold text-green-700'>/Month</span>
        </p>
      </div>
    </div>
  );
};

export default Service;
