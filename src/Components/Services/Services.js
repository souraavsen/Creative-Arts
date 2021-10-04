import React from "react";
import useCourses from "../Hooks/useCourses";
import Service from "./Service";

const Services = () => {
  const [courses] = useCourses();

  console.log(courses);

  return (
    <div className=' bg-gray-50 pt-4 pb-16'>
      <h1 className='text-6xl text-green-500 text-center py-8 font-semibold font_akronim'>
        Full Time Courses
      </h1>

      <div className='grid grid-cols-3'>
        {courses.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
