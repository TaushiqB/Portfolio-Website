import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber';

import Fox from '../models/Fox';
import  Loader  from '../components/Loader';
//  import { Loader } from '@react-three/drei';
import confetti from 'canvas-confetti'; // Import confetti



const Contact = () => {
  const handleButtonClick = () => {
    // Fire the confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const [form, setForm] = useState({name:'', email:'', message:''})
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = () => {};
  const handleFocus = () => {};
  const handleBlur = () => {};
  return (
    // <section className='relative flex lg:flex-row flex-col max-container bg-gray-100'>
    // <section className="relative flex flex-col lg:flex-row w-full h-screen bg-gray-100">
    <section 
  className="relative flex flex-col lg:flex-row w-full min-h-screen bg-gray-100" 
  style={{ padding: '60px 100px 0', backgroundColor: '#fce4ec' }}
>


      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>The Prettiest One</h1>
        <label className='text-black-500 font-semibold'>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Dear Janani,
        </p>
        <p>Wishing you the happiest birthday! 🎂🎉✨</p>
        <p>
        I hope everyone at your home is doing well—Chinni, your mom, and I hope your brother is studying hard. How are you doing?        </p>
        <p>
        Today, September 21st, is the day the most beautiful soul I know was born. You are the most stunning and hardworking person I've ever met, and after love, the strongest feeling I have toward you is admiration. You are always so determined and thoughtful in your decisions, never rushing but always getting it right. I became your full-time admirer. You passed through my life like a shooting star, leaving behind a reason to be hopeful and inspiring me to work for the greater good. 🌠        </p>
        <p>
          After our event, I spent a lot of time reflecting—hours alone, thinking deeply about myself.        </p>
        <p>
        I was just a whimsical boy, chasing after whatever sparkled or caught my attention. But you made me pause, forced me to truly perceive myself. You made me stop running, slapped me awake, and told me to focus on my life. I used to find reasons to slack off, whether in work or education, but you made me stronger. I was like a child at a carnival, drawn to every glowing fairy light, indulging in fleeting pleasures. While I’m not the best version of myself yet, I’m striving to be, and that’s all thanks to you. 💫        </p>
        <p>I’ll never forget what we had—it’s so dear to my heart. The butterflies I would get just from your looks, the way your hair would dance in the breeze, your sweet voice. Our time together felt like a fairytale. ✨</p>
        <p>
        I remember those mornings in the hostel when you would call me to wake me up. I’d missed breakfast because I overslept—no coffee, no tea—but your syrupy voice would instantly wake me up with a smile. ☀️
        </p>
        <p>
        I also remember the excitement of Friday evenings when I’d return from the hostel. I’d rush home, quickly shower, put on my best outfit, spray on some perfume, and hurry to meet you. I’d show up at your office with a chocolate, and there you were, standing at the entrance with eyes as deep as the ocean and as beautiful as the night sky, your gentle smile melting my heart every time. 🌙
        </p>
        <p>
        I remember how I used to drop you off a little farther from your home, just to avoid getting caught by your parents. The warmth of holding your hand before letting you go was everything to me. We’d always try to steal a few more seconds, wishing the moment could last longer before we had to say goodbye. The memories of those small, intimate moments will stay with me forever. 💕
        </p>
        <p>
        We made so many plans to meet, but life had other ideas. We had good times, no doubt about it. Have you ever heard of the North Star? 🌟 It’s a stationary point in the sky, guiding sailors and travelers who are lost at sea. Like the North Star, your memory shines bright in my life, always giving me a sense of direction, even though our relationship has ended. The promises I made to you push me to work harder, to strive for more, and to always be a better person.
        </p>
        <p>
        I know we aren’t together anymore, and perhaps we’ll never be together again. But that’s okay. What I truly hope is that you are happy for the rest of your life. I’ll never forget the memories, the laughter, and those deep conversations we shared. I wish you nothing but the best, and I hope you find someone wonderful to spend your life with. I’ll always be rooting for you, praying that all your dreams come true. 🙏
        </p>
        <p>
        Take care, Janani. 🌹
        </p>
        <p>
        Happy Birthday, Jaanu, the prettiest one. 🎂✨
        </p>
        <p>
        Forever yours,
        </p>
        <p>Taushiq 💌</p>
        </div>
      </label>

        <button
        type="submit"
        className='btn'
        onClick={handleButtonClick} // Call the confetti function on click
      >
        Happy Birthday💖✨
      </button>
      </div>

      {/* <form className='w-full flex-1 flex-col gap-7 mt-14'>

      </form> */}

      {/* <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
      <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000}}>
        <directionalLight intensity={2.5} position={[0, 0, 1]} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={<Loader />}>
          <Fox 
          position={[1.9, 0.35, 0]}
          rotation={[12.6, -0.9, 0]}
          scale={[0.5, 0.5, 0.5]}
          />
        </Suspense>

      </Canvas>
      </div> */}

      {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
          style={{ width: '100%', height: '100%' }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox 
              position={[1.9, 0.35, 0]}
              rotation={[12.6, -1.5, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div> */}

      {/* <div style={{ width: '150%', height: '800px', position: 'relative' }}>
        <Canvas
          camera={{ position: [0, 1, 10], fov: 50, near: 0.1, far: 1000 }}  // Moved camera back and adjusted fov
          style={{ width: '100%', height: '100%' }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox 
              position={[0, -0.5, 0]}  // Lowered the model
              rotation={[12.6, -1.5, 0]}  // Reset rotation for proper visibility
              scale={[0.5, 0.5, 0.5]}  // Scale should be correct now
            />
          </Suspense>
        </Canvas>
      </div> */}

      {/* <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <Canvas
          camera={{ position: [3, 1, 12], fov: 50, near: 0.1, far: 1000 }}
          style={{ width: '100%', height: '100%' }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox 
              position={[0, -0.5, 0]}
              rotation={[12.6, -1.5, 0]} 
              scale={[10, 10, 10]}  
            />
          </Suspense>
        </Canvas>
      </div> */}

    <div style={{ width: '100vw', height: '100', position: 'relative' }}>
        <Canvas
          camera={{ position: [3, 1, 12], fov: 50, near: 0.1, far: 1000 }}
          style={{ width: '100%', height: '100%' }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox 
              position={[0, 1, 0]}
              rotation={[0.5, 0, 0]} // Reset rotation for debugging
              scale={[0.7, 0.7, 0.7]}  
            />
          </Suspense>
        </Canvas>
      </div>


    </section>
  )
}

export default Contact