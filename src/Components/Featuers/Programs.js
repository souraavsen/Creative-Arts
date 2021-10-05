import React from 'react'
import eventimg from "../Images/eventimg.jpeg";
import eventimg1 from "../Images/eventimg1.jpg";
import eventimg2 from "../Images/sc2.jpeg";

const Programs = () => {
    return (
      <div className='flex flex-col'>
        <div className='bg-green-100 py-8 px-4 mb-6 shadow-md'>
          {/* All individual programs */}

          <div className='w-5/6 mx-auto mt-10 mb-16 flex justify-between items-center'>
            <div className='w-5/12'>
              <img src={eventimg} alt='' />
            </div>
            <div className='w-1/2'>
              <h2 className='text-2xl font-semibold pb-4'>
                The Potentials of the Third Generation Postwar Contemporary
                Artists in Japan
              </h2>
              <p className='text-green-800 font-semibold pb-2'>
                <i class='far fa-clock'></i> October 5 — Art for Breakfast 2021
              </p>
              <p className='text-justify'>
                Art for Breakfast is delighted to invite an artist, Etsu Egami,
                to our October program. Ms. Egami is in high demand, even in
                Covid ridden 2021, she has been actively exhibiting her works in
                Hong Kong, Paris, New York and Taipei. Viewed as one of the
                leaders in representing the third generation of Japanese postwar
                contemporary artists, she will base her discussion on the
                potentials of this group.
                <br />
                Born in 1994 in the suburbs of Tokyo, Ms. Egami has spent her
                childhood years abroad in the United States and in Europe. After
                completing her BFA/ MFA at the Central Academy of Fine Arts
                (CAFA) in Beijing, she also studied abroad in Germany at
                Karlsruhe University of Arts and Design. She was recently
                nominated for Forbes Asia 30 UNDER 30 2020 amongst other awards.
              </p>
            </div>
          </div>
        </div>
        <div className='bg-green-100 py-8 px-4 mb-6 shadow-md'>
          <div className='w-5/6 mx-auto mt-10 mb-16 flex justify-between items-center'>
            <div className='w-1/2'>
              <h2 className='text-2xl font-semibold pb-4'>
                HOST YOUR PRIVATE PAINT AND SIP EVENT WITH US!
              </h2>
              <p className='text-green-800 font-semibold pb-2'>
                <i class='far fa-clock'></i> Wed, Oct 20, 2021 6:00 PM +06
              </p>
              <p className='text-justify'>
                A creative painting twist to corporate team building events,
                birthday parties, bachelorette parties, holiday parties, and so
                much more! Whatever the occasion, Painting and Vino have you
                covered! It's our goal to craft your Private Paint and Sip Event
                around you. Making sure it's at the right place, at the right
                time, and is the perfect sip and paint activity to meet your
                needs. We specialize in organizing team-building events for
                businesses. Make sure you reach out to us for a FREE quote and
                let us plan the perfect holiday party or team-building event for
                your business.
                <br />
                We offer both virtual painting parties and in-person events. Our
                in-person events are kept to safety standards and can be held
                anywhere from your home to office, or restaurant of choice.
                Online painting parties are a great way for corporate teams to
                connect, families to see each, or friends to reunite from across
                the globe or as close as next door. Virtual painting parties are
                a great way to have an exclusive and safe experience with just
                your group. Click HERE to learn more.
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
                “Believe in Hong Kong” Exhibition
              </h2>
              <p className='text-green-800 font-semibold pb-2'>
                <i class='far fa-clock'></i> Wed, Oct 13, 2021 8:00 PM +06
              </p>
              <p className='text-justify'>
                Members of Asia Society Hong Kong Center are invited to the
                guided tour of the "Believe in Hong Kong" exhibition,
                celebrating more than a century and a half of Swire businesses
                in Hong Kong. Participants of the tour will be guided on Swire’s
                150-year journey through interactive play and experiences along
                with historic artifacts and engaging photo spots.
                <br />
                Swire opened the doors of its first Hong Kong office on 1st May
                1870. Over more than a century and a half, the group has grown
                and evolved with the city, pioneering businesses that have
                helped put Hong Kong on the map as a global commercial hub.
                Today, Swire is a leading player in Hong Kong’s property,
                aviation and beverage sectors.
              </p>
            </div>
          </div>
        </div>
        <button className='w-52 text-white font-semibold mx-auto px-4 mt-6 mb-16 py-3 bg-green-500 rounded-full '>
          View More Programs
        </button>
      </div>
    );
}

export default Programs
