import React, { useEffect, useState } from "react";
import image1 from "../Images/art1.jpeg";
import image2 from "../Images/art2.jpeg";
import image3 from "../Images/art3.jpeg";
import image4 from "../Images/art10.jpeg";
import image5 from "../Images/art8.jpeg";
import image6 from "../Images/art11.jpeg";
import useCourses from "../Hooks/useCourses";
import HomeService from "./HomeService";
import { Link } from "react-router-dom";

const Home = () => {
  // image array
  const slideImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
  ];
  const [slide, setSlide] = useState(image1);
  const [flag, setFlag] = useState(0);
  let i = 1;

  const [courses] = useCourses();
  console.log(courses);
  const sliced_data = courses.slice(0, 4); 
  console.log(sliced_data);

  // handeling background image chnage
  useEffect(() => {
    setInterval(() => {
      if (i == 5) {
        i = 1;
      }
      setSlide(slideImages[i]);
      i = i + 1;
    }, 5000);
    setFlag(i);
  }, [flag]);

  return (
    <div>
      <div
        className='min-h-screen mx-auto -mt-28'
        style={{ backgroundImage: `url(${slide})` }}
      >
        {/* first landing section */}
        <div className='flex flex-col justify-center items-center pt-72'>
          <h1 className='text-5xl font-semibold text-white'>
            Follow Your Pation. Draw You Own Life.
          </h1>
          <Link
            to='/services'
            className='bg-green-500 px-7 py-3 my-10 rounded-full text-white font-semibold hover:bg-green-400 hover:shadow-lg transition delay-100 duration-300 ease-in-out'
          >
            Explore More
          </Link>
        </div>
      </div>
      <div className='bg-gray-100 mx-auto'>
        <div className='container flex justify-around mx-auto'>
          {sliced_data.map((service) => (
            <HomeService key={service.id} service={service}></HomeService>
          ))}
        </div>
        <h1 className='text-6xl font_akronim font-semibold pb-20 pt-8 text-center'>
          Our Key <span className='text-green-500'>Services</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
