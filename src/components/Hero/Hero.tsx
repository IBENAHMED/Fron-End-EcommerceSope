"use client"
import React, { useContext } from 'react';
import './Hero.css';
import handIcon from '../../Assets/hand_icon.png';
import hero_image from '../../Assets/hero_image.png';
// import ShopeContext from '@/context/ShopeContext';
import { ShopeProviderContext } from '@/context/ShopeContext';

const Hero = () => {

    let { username }: any = useContext(ShopeProviderContext);

    return (
        <div className='flex items-center bg-gradient-to-b from-pink-300 to-white' style={{ "height": "calc(100vh - 65px)" }}>
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="max-w-lg">
                    <p className="text-sm font-semibold text-gray-600 uppercase">New arrivals only</p>
                    <h1 className="mt-4 text-5xl font-bold text-gray-900">
                        <span className='flex items-center' role="img" aria-label="waving hand "><span>new</span><img className='w-16' src={handIcon.src} alt='image hand icon' /></span>
                        collections<br />
                        for everyone
                    </h1>
                    <button className="mt-8 px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                        Latest Collection →
                    </button>
                </div>
                <div className='cover'>
                    <img className='image' src={hero_image.src} alt="hero image" />
                    <h1>{username}</h1>
                </div>
            </div>
        </div>
    )
}

export default Hero
