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
        <div className='transform mb-3 transition-transform hover:scale-105'>
            <Link href={`/Product/${id}`} className='block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow'>
                <img src={image} alt={name} className='w-full h-auto object-cover transform transition-transform duration-300 hover:scale-110' />
            </Link>
            <div className='mt-3 text-center'>
                <h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
                <p className='text-lg text-pink-600'>
                    ${new_price} <span className='line-through text-slate-400'>${old_price}</span>
                </p>
            </div>
        </div>
    );
};

export default Item;