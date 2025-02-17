"use client"

import "./Navbar.css"

import Link from "next/link"
import {useRouter} from "next/navigation"
import React, {useContext, useEffect, useState} from "react"
import {ShopeProviderContext} from "@/context/ShopeContext"

import profile from "../../Assets/logo.png"

const Navbar = () => {
  let router = useRouter();

  let {getTotalCartItemAdded, cookies, removeCookie} = useContext(ShopeProviderContext);

  const [role, setRole] = useState<string | null>(null);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const role = window.localStorage.getItem("role")
      setRole(role)
    }
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible)
  };

  const handleLogout = () => {
    removeCookie("token")
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("role")
      window.location.replace("/SignUp")
    };
  };

  return (
    <header className='navbar z-10 bg-slate-50 p-4'>
      <div className='container mx-auto flex flex-wrap gap-3 justify-between items-center'>
        <div className='flex items-center space-x-6'>
          <Link href='/' className='flex items-center'>
            <img src={profile.src} alt='Logo' className='rounded-full' style={{width: "35px", height: "35px"}} />
            <span className='ml-2 font-bold text-lg text-gray-900'>COLORLIB STORE</span>
          </Link>
          <nav className='hidden md:flex space-x-4'>
            <Link className='text-gray-600 hover:text-gray-900' href='/'>
              Home
            </Link>
            <Link className='text-gray-600 hover:text-gray-900' href='/men'>
              Men
            </Link>
            <Link className='text-gray-600 hover:text-gray-900' href='/women'>
              Women
            </Link>
            <Link className='text-gray-600 hover:text-gray-900' href='/kid'>
              Kids
            </Link>
          </nav>
        </div>
        <button id='menu-toggle' className='md:hidden focus:outline-none text-black' onClick={toggleMobileNav}>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button>
        <div className='flex flex-wrap gap-3 justify-center items-center space-x-4'>
          <div className='relative w-1/3 max-w-sm hidden lg:block'>
            <input type='text' placeholder='Search for products...' className='w-full py-2 pl-4 pr-10 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400' />
            <button className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600'>
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-4.35-4.35M9 17A8 8 0 119 1a8 8 0 010 16z'></path>
              </svg>
            </button>
          </div>
          <div className='flex items-center gap-5'>
            {cookies.token ? (
              <button
                onClick={handleLogout}
                className='cursor-pointer transition duration-300 ease-in-out bg-white text-gray-800 font-semibold text-sm py-1 px-3 sm:py-2 md:px-4 sm:text-md border border-gray-400 rounded-full hover:bg-gray-200'
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => router.push("/SignUp")}
                className='cursor-pointer transition duration-300 ease-in-out bg-white text-gray-800 font-semibold text-sm py-1 px-3 sm:py-2 md:px-4 sm:text-md border border-gray-400 rounded-full hover:bg-gray-200'
              >
                Login
              </button>
            )}
            {cookies.token && role === "ADMIN" && (
              <Link
                href='/admin'
                className='cursor-pointer transition duration-300 ease-in-out bg-white text-gray-800 font-semibold text-sm py-1 px-3 sm:py-2 md:px-4 sm:text-md border border-gray-400 rounded-full hover:bg-gray-200'
              >
                Dashboard
              </Link>
            )}
          </div>
          <Link className='relative text-gray-600' href='/card'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 3h2l.4 2M7 13h10l1.38-6.39a1 1 0 00-.97-1.21H5.59a1 1 0 00-.98.79L3.3 9H5'></path>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 13V17a1 1 0 01-1 1H8a1 1 0 01-1-1v-4H4l1.39-6.58A2 2 0 017.34 4h9.32a2 2 0 011.95 1.58L20 13h-4z'></path>
            </svg>
            <span className='absolute top-0 right-0 block w-4 h-4 text-xs text-center text-white bg-blue-500 rounded-full'>{getTotalCartItemAdded()}</span>
          </Link>
        </div>
      </div>
      {isMobileNavVisible && (
        <nav id='mobile-nav' className='md:hidden flex flex-col mt-4'>
          <Link className='block py-2 text-gray-600 hover:text-gray-900' href='/'>
            Home
          </Link>
          <Link className='block py-2 text-gray-600 hover:text-gray-900' href='/men'>
            Men
          </Link>
          <Link className='block py-2 text-gray-600 hover:text-gray-900' href='/women'>
            Women
          </Link>
          <Link className='block py-2 text-gray-600 hover:text-gray-900' href='/kid'>
            Kids
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
