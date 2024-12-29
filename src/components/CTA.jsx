import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  const handleScrollToTop = (e) => {
    e.preventDefault(); // Prevent default link behavior
    navigate('/contact'); // Navigate to contact page
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: smooth scrolling effect
    });
  };

  return (
    <section className='cta'>
      <p className='cta-first'>
        To the girl who will forever be the prettiest in my eyes🎇, thank you for being you, <span className='blue-gradient_text font-semibold drop-shadow'style={{ fontSize: '1.05em' }}>Janani</span><span style={{ fontSize: '1.5em' }}>👑</span>.
      </p>
      <p className='cta-second'>
        You are the song my heart still hums🎵. Thank you for every moment, every memory.🌹✨
      </p>
      <Link to='/contact' className='cta-btn' onClick={handleScrollToTop}>
        ✉️ Letter
      </Link>
    </section>
  );
};

export default CTA;
