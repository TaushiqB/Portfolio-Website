import React from 'react'
import CTA from '../components/CTA';


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { temples, foods, drinks, movies } from '../constants';

const About = () => {
  return (
    <div style={{ backgroundColor: '#fce4ec', minHeight: '100vh' }}>
    <section className="max-container" style={{ backgroundColor: '#fce4ec' }}>
      <h1 className='head-text'>
        <span className='blue-gradient_text font-semibold drop-shadow'>HER</span>🧚‍♀️💫, the Prettiest One💖
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Hey Janani👋, how are you doing? I hope everything is going well for you.🌸✨ </p>
        <p>Your radiant personality shines like a galaxy🌌, and your likes are as captivating as stars✨. Just as people gaze at the night sky🌙 and admire a few stars, I’ve noticed a few of your preferences, which are only a small glimpse of your vibrant personality.💫</p>

        <p>
        Though time has passed, you're still the one I adore💖, the one who makes everything a little brighter🌟, a little sweeter🍯.
        </p>
      </div>

      <div className='py-16' style={{ backgroundColor: '#fce4ec' }}>
        <h3 className='subhead-text'>
          Her <span className='blue-gradient_text font-semibold drop-shadow'>Sacred Shrines</span>🛕✨
        </h3>
          <div className='mt-8 flex flex-col gap-3 text-slate-500'>
          <p>
          Whether you're visiting a temple🕉️ or finding peace within🌿, your connection to the divine is truly something to admire.🙏
          </p>
          </div>

          <div className='mt-12 flex'>
            <VerticalTimeline>
              {temples.map((temples, index) => (
                <VerticalTimelineElement
                key={temples.company_name}
                date={temples.date}
                iconStyle={{ background: temples.iconBg }}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img 
                      src={temples.icon}
                      alt={temples.company_name}
                      className='w-[100%] h-[100%] object-contain'
                  />
                </div>}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: temples.iconBg,
                  boxShadow: 'none',
                }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {temples.title}
                    </h3>
                    <p className='text-black-500 font-medium text-base' style={{margin:0}}>
                      {temples.company_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                  <div className='my-5'>
                    <img src={temples.image} alt={temples.title} className='w-full h-auto rounded-md' />
                  </div>

                  </ul>

                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          <h3 className='subhead-text'>
          Her <span className='blue-gradient_text font-semibold drop-shadow'>Culinary Corners</span>🍽️✨
          </h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          Every bite with her feels like a shared adventure🍴, and I cherish every memory we’ve made over plates filled with joy.🥂
          </p>
          </div>
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {foods.map((foods, index) => (
                <VerticalTimelineElement
                key={foods.company_name}
                date={foods.date}
                iconStyle={{ background: foods.iconBg }}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img 
                      src={foods.icon}
                      alt={foods.company_name}
                      className='w-[100%] h-[100%] object-contain'
                  />
                </div>}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: foods.iconBg,
                  boxShadow: 'none',
                }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {foods.title}
                    </h3>
                    <p className='text-black-500 font-medium text-base' style={{margin:0}}>
                      {foods.company_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                  <div className='my-5'>
                    <img src={foods.image} alt={foods.title} className='w-full h-auto rounded-md' />
                  </div>
                  </ul>

                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          <h3 className='subhead-text'>
          Her <span className='blue-gradient_text font-semibold drop-shadow'>Signature Sips</span>🍹✨
          </h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          Tea 🍵, coffee ☕, juice 🧃, or smoothie 🥤—whatever it is, when you take a sip, it feels like the world slows down.🌍
          </p>
          </div>
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {drinks.map((drinks, index) => (
                <VerticalTimelineElement
                key={drinks.company_name}
                date={drinks.date}
                iconStyle={{ background: drinks.iconBg }}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img 
                      src={drinks.icon}
                      alt={drinks.company_name}
                      className='w-[100%] h-[100%] object-contain'
                  />
                </div>}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: drinks.iconBg,
                  boxShadow: 'none',
                }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {drinks.title}
                    </h3>
                    <p className='text-black-500 font-medium text-base' style={{margin:0}}>
                      {drinks.company_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                  <div className='my-5'>
                    <img src={drinks.image} alt={drinks.title} className='w-full h-auto rounded-md' />
                  </div>
                  </ul>

                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          <h3 className='subhead-text'>
          Her <span className='blue-gradient_text font-semibold drop-shadow'>Magical Movies</span>🎥✨
          </h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          She doesn't watch a lot of movies🍿, but she could make even the simplest films feel magical🪄 just by being there.🌟
          </p>
          </div>
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {movies.map((movies, index) => (
                <VerticalTimelineElement
                key={movies.company_name}
                date={movies.date}
                iconStyle={{ background: movies.iconBg }}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img 
                      src={movies.icon}
                      alt={movies.company_name}
                      className='w-[100%] h-[100%] object-contain'
                  />
                </div>}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: movies.iconBg,
                  boxShadow: 'none',
                }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {movies.title}
                    </h3>
                    <p className='text-black-500 font-medium text-base' style={{margin:0}}>
                      {movies.company_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                  <div className='my-5'>
                    <img src={movies.image} alt={movies.title} className='w-full h-auto rounded-md' />
                  </div>
                  </ul>

                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>

      </div>

      <hr className= 'border-slate-100' />

      <CTA />
    </section>
  </div>
  )
}

export default About