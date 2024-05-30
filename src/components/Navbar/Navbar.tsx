"use client"
import React, { useContext } from 'react';
import logo from '../../Assets/logo.png';
import cart_icon from '../../Assets/cart_icon.png';
import Link from 'next/link';
import { ShopeProviderContext } from '@/context/ShopeContext';
import { useRouter } from 'next/navigation';

const Navbar = () => {

    let { getTotalCartItemAdded } = useContext(ShopeProviderContext)
    let router = useRouter()

    return (
        <div className='bg-white'>
            <div className='container mx-auto navbar flex flex-wrap justify-between items-center'>
                <div className='nav-logo flex items-center gap-5'>
                    <img src={logo.src} alt='image logo' />
                    <p className='text-2xl'>SHOPPER</p>
                </div>
                <div className='nav-menu px-24 flex-1'>
                    <ul className='flex justify-around'>
                        <Link href="/">
                            <li className='cursor-pointer px-5 py-3 rounded font-medium hover:bg-slate-200 transition duration-300'>
                                Shop
                            </li>
                        </Link>
                        <Link href="/men">
                            <li className='cursor-pointer px-5 py-3 rounded font-medium hover:bg-slate-200 transition duration-300'>
                                Men
                            </li>
                        </Link>
                        <Link href="/women">
                            <li className='cursor-pointer px-5 py-3 rounded font-medium hover:bg-slate-200 transition duration-300'>
                                Women
                            </li>
                        </Link>
                        <Link href="/kid">
                            <li className='cursor-pointer px-5 py-3 rounded font-medium hover:bg-slate-200 transition duration-300'>
                                Kids
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='nav-login-cart flex gap-5 relative'>
                    {
                        localStorage.getItem("token")
                            ? <button
                                onClick={() => { localStorage.removeItem("token"); router.push("/SignUp") }}
                                className="cursor-pointer transition duration-300 ease-in-out bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full hover:bg-gray-200">
                                Logout
                            </button>
                            : <button
                                onClick={() => router.push("/SignUp")}
                                className="cursor-pointer transition duration-300 ease-in-out bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full hover:bg-gray-200">
                                Login
                            </button>
                    }

                    <Link href="/card">
                        <img src={cart_icon.src} alt='image cart_icon' />
                        <span className='nav-cart-count absolute right-0 top-0 bg-red-600 text-white px-1 text-xs rounded'>
                            {getTotalCartItemAdded()}
                        </span>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Navbar
