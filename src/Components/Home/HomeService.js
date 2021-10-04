import React from "react";

const HomeService = (props) => {
  const { service_name, img, description } = props.service;
  return (
    <div className='w-64 flex flex-col my-8 bg-white shadow-lg px-8 py-4 -mt-6 hover:bg-gray-50 cursor-pointer rounded-md'>
      <img
        className='w-32 h-32 rounded-full mx-auto my-2 border-2 border-gray-300'
        src={img}
        alt=''
      />
      <h4 className='text-xl font-semibold py-4 text-center'>{service_name}</h4>
      {/* <p className='text-justify overflow-ellipsis overflow-hidden'>
        {description}
      </p> */}
    </div>
  );
};

export default HomeService;
