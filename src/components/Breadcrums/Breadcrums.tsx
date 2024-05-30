import './Breadcrums.css';
import arrow_image from '../../Assets/arrow.png';
import { useEffect } from 'react';

const Breadcrums = ({ product }: any) => {

    return (
        <div className="py-4">
            <p className="flex gap-4 items-center text-gray-600">
                <span>HOME</span>
                <img className="w-4 h-4" src={arrow_image.src} alt="arrow_image" />
                <span>SHOP</span>
                <img className="w-4 h-4" src={arrow_image.src} alt="arrow_image" />
                <span>{product && product.category}</span>
                <img className="w-4 h-4" src={arrow_image.src} alt="arrow_image" />
                <span>{product && product.name}</span>
            </p>
        </div>
    )
}

export default Breadcrums
