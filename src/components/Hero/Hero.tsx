import React from 'react';
import './Hero.css';
import handIcon from '../../Assets/hand_icon.png';
import hero_image from '../../Assets/hero_image.png';

const Hero = () => {


    return (
        <div className='flex items-center bg-gradient-to-b from-pink-300 to-white' style={{ height: "calc(100vh - 65px)" }}>
            <div className="container mx-auto flex flex-wrap items-center justify-center px-5 lg:justify-between">
                <div className="max-w-lg">
                    <p className="text-sm font-semibold text-gray-600 uppercase animate-fade-in">New arrivals only</p>
                    <h1 className="mt-4 text-2xl sm:text-5xl font-bold text-gray-900 animate-slide-in">
                        <span className='flex items-center' role="img" aria-label="waving hand">
                            <span>new</span>
                            <img className='w-16 ml-2' src={handIcon.src} alt='hand icon' />
                        </span>
                        collections<br />
                        for everyone
                    </h1>
                    <button className="mt-8 px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 animate-bounce">
                        Latest Collection →
                    </button>
                </div>
                <div className='hidden lg:block cover mt-8 md:mt-0 animate-zoom-in'>
                    <img className='image hidden lg:block' src={hero_image.src} alt="hero image" />
                </div>
            </div>
        </div>
    )
}

export default Hero
