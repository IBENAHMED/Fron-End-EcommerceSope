import './Item.css'

import React from 'react';
import Link from 'next/link';
interface ItemProps {
    id: number;
    name: string;
    image: any;
    new_price: number;
    old_price: number;
}

const Item: React.FC<ItemProps> = ({ id, name, image, new_price, old_price }) => {
    return (
        <div className="item mb-5">
            <div className="bg-white shadow-lg rounded-lg p-2 transition-transform duration-300 hover:scale-105 animate-slideIn md:p-6">
                <Link href={`/Product/${id}`} className="block overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                    <img src={image} alt={name} className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110" />
                </Link>
                <h6 className="mt-4 text-gray-500 font-semibold text-xs text-center md:tex-sm">{name}</h6>
                <div className='flex justify-center items-center gap-4'>
                    <p className="text-xs mt-2 text-gray-500 line-through text-center md:text-sm">${old_price}</p>
                    <p className="text-xs mt-1 text-blue-600 font-bold text-center md:text-sm">${new_price}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;