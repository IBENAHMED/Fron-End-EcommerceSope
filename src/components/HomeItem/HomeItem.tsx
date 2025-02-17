import React from "react";
import Link from "next/link";

const HomeItem = () => {
  return (
    <>
      <div className='font-sans antialiased'>
        <main className='text-center p-10 bg-gray-50'>
          <div className='flex flex-col items-center'>
            <img src='https://picsum.photos/id/237/800/600' alt='Product Image' className='w-full max-w-md rounded-lg shadow-lg mb-5' />
            <h1 className='text-1xl sm:text-4xl font-semibold text-gray-800 mb-4'>
              The New Way To Display Product by <span className='text-green-600'>Colorlib</span>
            </h1>
            <Link href='/all' className='mt-4 px-3 py-1 bg-black text-white rounded-lg hover:bg-gray-800 sm:px-6 sm:py-2'>
              Explore Now
            </Link>
          </div>
        </main>

        <section className='flex flex-wrap justify-around items-center py-10 bg-white'>
          <div className='text-center max-w-xs m-4 p-6 bg-gray-50 rounded-lg shadow-lg'>
            <div className='text-1xl sm:text-4xl mb-3'>🌐</div>
            <h2 className='text-gray-800 text-sm sm:text-xl font-bold mb-2'>Worldwide Delivery</h2>
            <p className='text-gray-600'>Far far away, behind the word mountains, far from the countries.</p>
          </div>
          <div className='text-center max-w-xs m-4 p-6 bg-gray-50 rounded-lg shadow-lg'>
            <div className='text-1xl sm:text-4xl mb-3'>🔒</div>
            <h2 className='text-gray-800 text-sm sm:text-xl font-bold mb-2'>Secure Payments</h2>
            <p className='text-gray-600'>Far far away, behind the word mountains, far from the countries.</p>
          </div>
          <div className='text-center max-w-xs m-4 p-6 bg-gray-50 rounded-lg shadow-lg'>
            <div className='text-1xl sm:text-4xl  mb-3'>🔄</div>
            <h2 className='text-gray-800 text-sm sm:text-xl font-bold mb-2'>Simple Returns</h2>
            <p className='text-gray-600'>Far far away, behind the word mountains, far from the countries.</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default HomeItem
