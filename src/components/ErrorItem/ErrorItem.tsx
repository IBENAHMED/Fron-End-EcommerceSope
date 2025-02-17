import React from 'react';
import Link from 'next/link';

export default function ErrorItem () {
  return (
    <div className="bg-slate-50 flex items-center justify-center h-screen">
      <div className="bg-slate-50 bg-opacity-60 backdrop-filter backdrop-blur-lg p-8 rounded-xl text-center shadow-2xl max-w-md transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-7xl font-extrabold text-gray-400 mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-gray-400 mb-8 max-w-xs mx-auto">It might have been moved or deleted. Double-check the URL or head back home.</p>
        <div className="mb-6">
          <Link
            href="/"
            className="w-full bg-blue-700 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}