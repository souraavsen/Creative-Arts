import React from "react";
import ecentimg from "../Images/art7.jpeg";

const Events = () => {
  return (
    <div>
      <div className='w-5/6 py-16 px-10 bg-white mx-auto mb-16 flex flex-col justify-between shadow-md rounded-md'>
        <div className='flex justify-between items-center'>
          <div className='w-1/2'>
            <img
              className='mx-auto shadow-md rounded-lg'
              src={ecentimg}
              width='72%'
              alt=''
            />
          </div>
          {/* individual events */}
          <div className='w-1/2'>
            <div className='flex flex-col bg-green-100 p-4 rounded-lg shadow-md my-4'>
              <li className='text-xl text-green-700 font-semibold'>
                The Art of Erasure : Drawing and Destruction
              </li>
              <p className='text-green-800 font-semibold py-2 pl-8 '>
                <i class='fas fa-calendar-alt'></i> Tue, Oct 12, 2021 11:30 PM
                +06
              </p>
            </div>
            <div className='flex flex-col bg-green-100 p-4 rounded-lg shadow-md my-4'>
              <li className='text-xl text-green-700 font-semibold'>
                Get Drawing: Parrots Workshop
              </li>
              <p className='text-green-800 font-semibold py-2 pl-8 '>
                <i class='fas fa-calendar-alt'></i> Wed, Oct 13, 2021 8:00 PM
                +06
              </p>
            </div>
            <div className='flex flex-col bg-green-100 p-4 rounded-lg shadow-md my-4'>
              <li className='text-xl text-green-700 font-semibold'>
                Drawing with Colour Pencils class
              </li>
              <p className='text-green-800 font-semibold py-2 pl-8 '>
                <i class='fas fa-calendar-alt'></i> Tue, Oct 5, 2021 10:00 AM
                +06
              </p>
            </div>
            <div className='flex flex-col bg-green-100 p-4 rounded-lg shadow-md my-4'>
              <li className='text-xl text-green-700 font-semibold'>
                Online Life Drawing
              </li>
              <p className='text-green-800 font-semibold py-2 pl-8 '>
                <i class='fas fa-calendar-alt'></i> Tue, Oct 5, 2021 12:00 AM
                +06 + 4 more events
              </p>
            </div>
            <div className='flex flex-col bg-green-100 p-4 rounded-lg shadow-md my-4'>
              <li className='text-xl text-green-700 font-semibold'>
                Expressive Landscapes: Drawing wet
              </li>
              <p className='text-green-800 font-semibold py-2 pl-8 '>
                <i class='fas fa-calendar-alt'></i> Sun, Oct 17, 2021 3:00 PM
                +06
              </p>
            </div>
          </div>
        </div>
        <button className='w-52 text-white font-semibold mx-auto px-4 mt-12 py-3 bg-green-500 rounded-full '>
          View More Events
        </button>
      </div>
    </div>
  );
};

export default Events;
