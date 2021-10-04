import React from 'react'
import eventimg from "../Images/eventimg.jpeg";
import eventimg1 from "../Images/eventimg1.jpg";
import eventimg2 from "../Images/sc2.jpeg";

const Programs = () => {
    return (
      <div>
        <div className='bg-green-100 py-8 px-4 mb-6 shadow-md'>
          <div className='w-5/6 mx-auto mt-10 mb-16 flex justify-between items-center'>
            <div className='w-5/12'>
              <img src={eventimg} alt='' />
            </div>
            <div className='w-1/2'>
              <h2 className='text-2xl font-semibold pb-4'>
                The Art of Erasure : Drawing and Destruction
              </h2>
              <p className='text-green-800 font-semibold pb-2'>
                <i class='fas fa-calendar-alt'></i> Tue, Oct 12, 2021 11:30 PM
                +06
              </p>
              <p className='text-justify'>
                A look at how rubbing out, drawing over, tearing, smudging,
                folding, screwing up, burning, poking holes through and nearly
                completely destroying your work is a well used method of many
                artists! <br />
                This is a mixed media class in which we take destruction and
                creation as one and the same, learning the multitudes of ways in
                which we can utilise the act of destruction and erasure to
                create unexpected new works by unusual methods. <br />
                To kick things off Lucy McGeown will present a short 20 min
                lecture of how artists from Yves Klein , Gustav Metzer , Louise
                Bourgeois to Julie Mehretu, William Kentridge, Tacita Dean and
                Michael Landy have made work from destructive processes.
              </p>
            </div>
          </div>
        </div>
        <div className='bg-green-100 py-8 px-4 mb-6 shadow-md'>
          <div className='w-5/6 mx-auto mt-10 mb-16 flex justify-between items-center'>
            <div className='w-1/2'>
              <h2 className='text-2xl font-semibold pb-4'>
                Get Drawing: Parrots Workshop
              </h2>
              <p className='text-green-800 font-semibold pb-2'>
                <i class='fas fa-calendar-alt'></i> Wed, Oct 20, 2021 6:00 PM
                +06
              </p>
              <p className='text-justify'>
                Join in with this mindful art session where you will have the
                freedom and support to unwind and to get creative in a series of
                guided drawing activities with artist Pui Lee. <br />
                As a warm-up exercise, you will have fun with mark-making. For
                the main activity, Pui Lee will show you step-by step how to
                draw a parrot. Symbolic of long life and freedom in Chinese
                culture, emperors of the past declared the parrot the 'Divine
                Bird'.
                <br />
                Art is always great for relaxation, reduction of stress and
                above all, is good fun! You will end up with some drawings that
                you can continue with at your own leisure if you don’t finish
                within the session itself.
              </p>
            </div>
            <div className='w-5/12'>
              <img src={eventimg1} alt='' />
            </div>
          </div>
        </div>
        <div className='bg-green-100 py-8 px-4 mb-6 shadow-md'>
          <div className='w-5/6 mx-auto mt-10 mb-16 flex justify-between items-center'>
            <div className='w-5/12'>
              <img src={eventimg2} alt='' />
            </div>
            <div className='w-1/2'>
              <h2 className='text-2xl font-semibold pb-4'>
                Get Drawing: Parrots Workshop
              </h2>
              <p className='text-green-800 font-semibold pb-2'>
                <i class='fas fa-calendar-alt'></i> Wed, Oct 13, 2021 8:00 PM
                +06
              </p>
              <p className='text-justify'>
                Join in with this mindful art session where you will have the
                freedom and support to unwind and to get creative in a series of
                guided drawing activities with artist Pui Lee. <br />
                As a warm-up exercise, you will have fun with mark-making. For
                the main activity, Pui Lee will show you step-by step how to
                draw a parrot. Symbolic of long life and freedom in Chinese
                culture, emperors of the past declared the parrot the 'Divine
                Bird'.
                <br />
                Art is always great for relaxation, reduction of stress and
                above all, is good fun! You will end up with some drawings that
                you can continue with at your own leisure if you don’t finish
                within the session itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Programs
