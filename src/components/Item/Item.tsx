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
        <div className=''>
            <Link href={`/Product/${id}`}>
                <img src={`${image}`} alt={name} />
            </Link>
            <div className='mt-3'>
                <h3>{name}</h3>
                <p>${new_price} <span className='line-through text-slate-400'>${old_price}</span></p>
            </div>
        </div>
    );
};

export default Item;