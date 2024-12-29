import React from 'react'
import CTA from '../components/CTA';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {  codissia, nachos, lake, mm, milkshake } from '../constants';

const Projects = () => {
  return (
    <div style={{ backgroundColor: '#fce4ec', minHeight: '100vh' }}>
    <section className="max-container" style={{ backgroundColor: '#fce4ec' }}>
      <h1 className='head-text'>
       <span className='blue-gradient_text font-semibold drop-shadow'>US</span>
       👩‍❤️‍👨🌍, a Map of Memories🗺️
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Every place we’ve been is special💖 because you were there🌍 with me✨.  
        </p>
        <p>
        These places hold memories of laughter😄, of love💖, and of moments I’ll always cherish🌟. They became ours, not just because we went there🗺️, but because we created something beautiful🌸 in each one.
        </p>
        <p>
        Even though you’re no longer by my side, these memories remain✨. Here’s to the moments we had🕰️, the memories we made📸, and everything we once were💫.
        </p>
      </div>

      <div className='py-16' style={{ backgroundColor: '#fce4ec' }}>
        <h3 className='subhead-text'>
        The Fairytale Trade Fair🏰✨
        </h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          Our story began at that fair🎡, where you first caught my eye.👀❤️  
          </p>
          <p>
          I couldn’t resist purposefully walking past your stall🛍️ just to catch another glimpse of your beauty.🌟💫
          </p>
          <p>
          You stood there, charming and radiant🌟, and I found myself drawn to you💘. I remember the way you blushed while talking to me.🌺 
          </p>
          <p>
          You were explaining something about IoT📊, but honestly, all I remember is your beautiful, cherry smile.🍒
          </p>
          </div>

          <div className='mt-12 flex'>
            <VerticalTimeline>
              {codissia.map((codissia) => (
                <VerticalTimelineElement
                key={codissia.company_name}
                date={codissia.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img 
                      src={codissia.icon}
                      alt={codissia.company_name}
                      className='w-[100%] h-[100%] object-contain'
                  />
                </div>}
                iconStyle={{ background: codissia.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: codissia.iconBg,
                  boxShadow: 'none',
                }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {codissia.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                      {codissia.company_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                  <div className='my-5'>
                    <img src={codissia.image} alt={codissia.title} className='w-full h-auto rounded-md' />
                  </div>
                  </ul>

                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
      </div>

      <div className='py-16' style={{ backgroundColor: '#fce4ec' }}>
        <h3 className='subhead-text'>
        Nachos & New Beginnings🌮✨
        </h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          I had come on my pink scooty🛵💗, and coincidentally we both had brought the same chocolate🍫 for each other. We weren’t sure where to go, so we were just driving around.🚗✨ 
          </p>
          <p>
          When we finally arrived at the restaurant🍽️, it was as if the world melted away🌎✨; all we could do was gaze into each other’s eyes.👩‍❤️‍👨❤️ 
          </p>
          <p>
          Every bite💣 felt like falling deeper for you.💝 
          </p>
          </div>

          <div className='mt-12 flex'>
            <VerticalTimeline>
              {nachos.map((nachos) => (
                <VerticalTimelineElement
                key={nachos.company_name}
                date={nachos.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img 
                      src={nachos.icon}
                      alt={nachos.company_name}
                      className='w-[100%] h-[100%] object-contain'
                  />
                </div>}
                iconStyle={{ background: nachos.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: nachos.iconBg,
                  boxShadow: 'none',
                }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {nachos.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                      {nachos.company_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                  <div className='my-5'>
                    <img src={nachos.image} alt={nachos.title} className='w-full h-auto rounded-md' />
                  </div>
                  </ul>

                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
      </div>

      <div className='py-16' style={{ backgroundColor: '#fce4ec' }}>
        <h3 className='subhead-text'>
        Our Lake of Love🌅✨
        </h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          The lake that witnessed us growing close🌅💑 has heard all our secrets and laughter.🌉💬 
          </p>
          <p>
          The water🌊 was calm, yet my heart raced💓 every time you were near. We’d sit there for hours⏳, watching the water ripple and talking about everything and nothing.🗨
          </p>
          <p>
          Under the yellow lights🕯️, you looked so pretty🌼, with your pearly eyes🎇 and sunshine smile🌻. We would sit by the water🌊, the world fading away, just you and me.👫
          </p>
          </div>

          <div className='mt-12 flex'>
            <VerticalTimeline>
              {lake.map((lake) => (
                <VerticalTimelineElement
                key={lake.company_name}
                date={lake.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img 
                      src={lake.icon}
                      alt={lake.company_name}
                      className='w-[100%] h-[100%] object-contain'
                  />
                </div>}
                iconStyle={{ background: lake.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: lake.iconBg,
                  boxShadow: 'none',
                }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {lake.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                      {lake.company_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                  <div className='my-5'>
                    <img src={lake.image} alt={lake.title} className='w-full h-auto rounded-md' />
                  </div>
                  </ul>

                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
      </div>

      <div className='py-16' style={{ backgroundColor: '#fce4ec' }}>
        <h3 className='subhead-text'>
        First Movie, First Memory🎬✨
        </h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          I don’t remember much about the first movie🎥 we saw, but I remember everything about you💖—your laughter, the way your eyes sparkled✨ when you laughed, the way you watched the screen📺 with wonder💫, and how pretty you looked in the screen light.💡
          </p>
          <p>
          It was as if the movie🎬 was just the background🌆, and you were the real magic.💗
          </p>
          <p>
          I remember being more interested in you❤️ than in the film.🎥
          </p>
          <p>
          I may have forgotten the plot of the movie🎬, but I’ll never forget the way you made me feel💖—like I was the luckiest person in the world.🌍
          </p>
          <p>
          You’re my favorite star🌟 from the film.🎥
          </p>
          </div>

          <div className='mt-12 flex'>
            <VerticalTimeline>
              {mm.map((mm) => (
                <VerticalTimelineElement
                key={mm.company_name}
                date={mm.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img 
                      src={mm.icon}
                      alt={mm.company_name}
                      className='w-[100%] h-[100%] object-contain'
                  />
                </div>}
                iconStyle={{ background: mm.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: mm.iconBg,
                  boxShadow: 'none',
                }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {mm.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                      {mm.company_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                  <div className='my-5'>
                    <img src={mm.image} alt={mm.title} className='w-full h-auto rounded-md' />
                  </div>
                  </ul>

                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
      </div>

      <div className='py-16' style={{ backgroundColor: '#fce4ec' }}>
        <h3 className='subhead-text'>
        The Milkshake Miracle🥤✨
        </h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          You didn’t like milkshakes until that day🥤. I remember convincing you to try one🙌, and the look on your face when you discovered how much you loved it❤️—priceless.💸
          </p>
          <p>
          Now, every milkshake🥤 reminds me of you.🧚‍♀️
          </p>
          <p>
          I can still see the way you smiled👸 after that first sip.🥤
          </p>
          <p>
          Each milkshake🥛 tastes like that moment🌌, bringing back the memory🎁 of your smile and the joy of sharing it with you.👩‍❤️‍👨
          </p>
          </div>

          <div className='mt-12 flex'>
            <VerticalTimeline>
              {milkshake.map((milkshake) => (
                <VerticalTimelineElement
                key={milkshake.company_name}
                date={milkshake.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img 
                      src={milkshake.icon}
                      alt={milkshake.company_name}
                      className='w-[100%] h-[100%] object-contain'
                  />
                </div>}
                iconStyle={{ background: milkshake.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: milkshake.iconBg,
                  boxShadow: 'none',
                }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {milkshake.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                      {milkshake.company_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                  <div className='my-5'>
                    <img src={milkshake.image} alt={milkshake.title} className='w-full h-auto rounded-md' />
                  </div>
                  </ul>

                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
      </div>

      <hr className= 'border-slate-200' />

      <CTA />
    </section>
  </div>
  )
}

export default Projects