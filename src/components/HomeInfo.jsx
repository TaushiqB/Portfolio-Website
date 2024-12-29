import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';


const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        
        <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {

    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>A Space Made for <span className='font-semibold'>Her</span> 💐 
        <br />
        Step into a world where every corner speaks of her—Janani🧚‍♀️💫
        </h1>
    ), 
    2: (
        <InfoBox 
        text="These are the memories of us, moments I’ll always hold close.👩‍❤️‍👨"
        link="/projects"
        btnText="Step Into Our Memories🌸"
        />


    ), 
    3: (
        <InfoBox 
        text="Words from the heart💖—my feelings✨, my memories🌸, and my wishes for you."
        link="/contact"
        btnText="💌"
        />
    ),
    4: (
        <InfoBox 
        text="Every corner of her🧚‍♀️ world🌍 tells a story of love💖 and magic💫."
        link="/about"
        btnText="Step Into Her World ✨"
        />
    ), 

}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo