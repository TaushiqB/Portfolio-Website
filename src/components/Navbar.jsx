import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css';

const Navbar = () => {

  return (
    <header className='header'>
        <NavLink to = "/" className="w-20 h-15 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">Potti</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about">
                {({ isActive }) => {
                    // Use a flag to manage active state
                    const activeClass = isActive ? 'text-blue-500' : 'text-black';
                    const heartClass = isActive ? 'heart-beat' : '';
                    return (
                        <span className={`heart-container ${activeClass}`}>
                            Her<span className={`heart-symbol ${heartClass}`}>❤️</span>
                        </span>
                    );
                }}
            </NavLink>
            <NavLink to="/projects">
          {({ isActive }) => {
            const activeClass = isActive ? 'text-blue-500' : 'text-black';
            const earthClass = isActive ? 'earth-rotate' : '';
            return (
              <span className={`earth-container ${activeClass}`}>
                {isActive ? (
                    <>
                    Us<span className={`earth-symbol ${earthClass}`}></span>
                    </>
                  
                ) : (
                  <>
                    Us<span className={`earth-symbol ${earthClass}`}>🌍</span>
                  </>
                )}
              </span>
            );
          }}
        </NavLink>

        </nav>
    </header>
  )
}

export default Navbar