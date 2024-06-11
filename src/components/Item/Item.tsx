import { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

// Define the props interface
interface ItemProps {
    id: number;
    name: string;
    image: any;
    new_price: number;
    old_price: number;
}

// Use the interface in the component
const Item: React.FC<ItemProps> = ({ id, name, image, new_price, old_price }) => {
    return (
        <div className="mb-5">
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105 animate-slideIn">
                <Link href={`/Product/${id}`} className="block overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                    <img src={image} alt={name} className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110" />
                </Link>
                <h3 className="mt-4 font-semibold text-sm text-center">{name}</h3>
                <div className='flex justify-center items-center gap-4'>
                    <p className="mt-2 text-gray-500 line-through text-center">${old_price}</p>
                    <p className="mt-1 text-blue-600 font-bold text-center">${new_price}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;