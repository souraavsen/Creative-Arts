import React from 'react'
import aboutImage from "../Images/art14.jpeg";
import image1 from "../Images/art12.jpeg";
import image2 from "../Images/art8.jpeg";
import image3 from "../Images/sc5.jpeg";
import image4 from "../Images/sc1.jpeg";
import image5 from "../Images/sc2.jpeg";
import image6 from "../Images/sc3.jpeg";
import image7 from "../Images/sc4.jpeg";
import image8 from "../Images/art14.jpeg";
import aboutHeader from "../Images/aboutheader.jpg";

const About = () => {
    return (
      <div className='pb-12 bg-gray-100'>
        <img src={aboutHeader} className='w-screen -mt-16' alt="" />
        {/* Main About */}
        <h1 className='text-6xl  text-green-500 text-center pb-8 pt-16 font-semibold font_akronim'>
          <span className='text-black'>About</span> Creative Arts
        </h1>
        <div className='w-11/12 px-8 py-12 bg-white mx-auto mt-10 mb-16 flex justify-between items-center'>
          <div className='w-1/2'>
            <img src={aboutImage} width='90%' alt='' />
          </div>
          <div className='w-1/2'>
            <p className='text-justify'>
              Creative Arts is a plartform where you can persue your dream to be
              an artist. Its a great learning plartform where you will get to
              learn from the zero level. It starts with the fundamentals of
              drawing. In addition to improving fine motor skills, drawing
              enables your child to draw connections between what he or she sees
              and what he or she does. This hand-eye coordination is important
              in athletic and recreational situations, as well as in academic
              scenarios such as penmanship lessons.Drawing plays a big role in
              our cognitive development. It can help us learn to write and think
              creatively, develop hand-eye co-ordinationand conceptualise ideas.{" "}
              <br />
              Drawings release mental energy that was unconsciously repressed.
              From this mental energy, even people faced with difficulties may
              be able to overcome their problems. It could be said that it is
              basis for which drawing is used as a psychological treatment.
              <br />
              So, Create Arts can be a great plartform to starts with the
              polishing your creativity.
            </p>
          </div>
        </div>

        {/* Students art's galary */}
        <div>
          <h1 className='text-6xl text-green-500 text-center pt-16 pb-16 font-semibold font_akronim'>
            <span className='text-black'>Student's</span> Creation
          </h1>

          <div className='container mx-auto grid grid-cols-3 gap-2 mb-20'>
            <img src={image1} className='border-2 border-black m-auto' alt='' />
            <img src={image2} className='border-2 border-black m-auto' alt='' />
            <img src={image3} className='border-2 border-black m-auto' alt='' />
            <img src={image7} className='border-2 border-black m-auto' alt='' />
            <img src={image6} className='border-2 border-black m-auto' alt='' />
            <img src={image1} className='border-2 border-black m-auto' alt='' />
            <img src={image4} className='border-2 border-black m-auto' alt='' />
            <img src={image5} className='border-2 border-black m-auto' alt='' />
            <img src={image8} className='border-2 border-black m-auto' alt='' />
          </div>
        </div>
      </div>
    );
}

export default About
