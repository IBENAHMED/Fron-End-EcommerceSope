import React from 'react'

const DiscriptionBox = () => {
    return (
        <div className='mb-10'>
            <div className="border-b mb-4">
                <div className="flex flex-wrap">
                    <div
                        className="text-sm px-2 py-1 cursor-pointer border-b-2 border-blue-500 sm:px-4 sm:py-2 sm:text-lg"
                    >
                        Description
                    </div>
                    <div
                        className="text-sm px-2 py-1 cursor-pointer text-gray-500 sm:px-4 sm:py-2 sm:text-lg"
                    >
                        Reviews (122)
                    </div>
                </div>
            </div>
            <div className="p-4 ">
                <p className='text-xs sm:text-md'>
                    An e-commerce website is an online platform that facilitates
                    the buying and selling of products or services over the internet.
                    It serves as a virtual marketplace where businesses and individuals
                    showcase their products, interact with customers, and conduct
                    transactions without the need for a physical presence. E-commerce
                    websites have gained immense popularity due to their convenience,
                    accessibility, and the global reach they offer.
                </p>
            </div>
        </div>
    )
}

export default DiscriptionBox
