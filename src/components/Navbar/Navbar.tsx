"use client"
import React, { useContext, useState } from 'react';
import logo from '../../Assets/logo.png';
import cart_icon from '../../Assets/cart_icon.png';
import Link from 'next/link';
import { ShopeProviderContext } from '@/context/ShopeContext';
import { useRouter } from 'next/navigation';

const Navbar = () => {

    let { getTotalCartItemAdded, cookies, removeCookie } = useContext(ShopeProviderContext)
    let router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className='bg-white'>
            <div className='container py-3 mx-auto flex justify-between flex-wrap items-center px-5'>
                <Link href="/">
                    <div className='flex items-center gap-5'>
                        <img src={logo.src} alt='image logo' className='w-12 h-12' />
                        <p className='text-2xl'>SHOPPER</p>
                    </div>
                </Link>
                <div className={`md:flex md:items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className='md:flex md:justify-around'>
                        <li className='cursor-pointer px-5 py-3 rounded font-medium hover:bg-slate-200 transition duration-300'>
                            <Link href="/">Shope</Link>
                        </li>
                        <li className='cursor-pointer px-5 py-3 rounded font-medium hover:bg-slate-200 transition duration-300'>
                            <Link href="/men">Men</Link>
                        </li>
                        <li className='cursor-pointer px-5 py-3 rounded font-medium hover:bg-slate-200 transition duration-300'>
                            <Link href="women">Women</Link>
                        </li>
                        <li className='cursor-pointer px-5 py-3 rounded font-medium hover:bg-slate-200 transition duration-300'>
                            <Link href="kid">Kids</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-5'>
                    {
                        cookies.token
                            ? <button
                                onClick={() => { removeCookie("token"); window.location.replace("/SignUp") }}
                                className="cursor-pointer transition duration-300 ease-in-out bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full hover:bg-gray-200">
                                Logout
                            </button>
                            : <button
                                onClick={() => router.push("/SignUp")}
                                className="cursor-pointer transition duration-300 ease-in-out bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full hover:bg-gray-200">
                                Login
                            </button>
                    }

                    <Link href="/card" passHref>
                        <div className='relative'>
                            <img src={cart_icon.src} alt='image cart_icon' className='w-8 h-8' />
                            <span className='nav-cart-count absolute right-0 top-0 bg-red-600 text-white px-1 text-xs rounded'>
                                {getTotalCartItemAdded()}
                            </span>
                        </div>
                    </Link>
                </div>
                <div className='md:hidden'>
                    <button onClick={handleMenuToggle} className='focus:outline-none'>
                        <svg className='w-6 h-6' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
