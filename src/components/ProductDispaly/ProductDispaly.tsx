import { useContext, useEffect } from 'react'
import './ProductDispaly.css'
import star_icon from '../../Assets/star_icon.png'
import star_dull_icon from '../../Assets/star_dull_icon.png'
import { ShopeProviderContext } from '@/context/ShopeContext'

const ProductDispaly = ({ product, idProducts }: any) => {

    let { cardItems, AddCardItems } = useContext(ShopeProviderContext);

    return (
        <div className="py-6">
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                    <div className="flex flex-wrap space-x-2 mb-4">
                        <img className="my-2 w-16 h-16" src={`${product && product.img}`} alt="product.image" />
                        <img className="my-2 w-16 h-16" src={`${product && product.img}`} alt="product.image" />
                        <img className="my-2 w-16 h-16" src={`${product && product.img}`} alt="product.image" />
                        <img className="my-2 w-16 h-16" src={`${product && product.img}`} alt="product.image" />
                    </div>
                    <div className="w-full mb-4">
                        <img className="w-full h-auto" src={`${product && product.img}`} alt="product.image" />
                    </div>
                </div>
                <div className="w-full md:w-2/3 p-4">
                    <h1 className="text-2xl font-bold mb-2">{product && product.name}</h1>
                    <div className="flex items-center mb-2">
                        <img className="w-6 h-6" src={star_icon.src} alt="star_icon" />
                        <img className="w-6 h-6" src={star_icon.src} alt="star_icon" />
                        <img className="w-6 h-6" src={star_icon.src} alt="star_icon" />
                        <img className="w-6 h-6" src={star_icon.src} alt="star_icon" />
                        <img className="w-6 h-6" src={star_dull_icon.src} alt="star_dull_icon" />
                    </div>
                    <div className="flex items-baseline mb-4">
                        <div className="text-gray-500 line-through mr-2">${product && product.old_price}</div>
                        <div className="text-xl text-red-600">${product && product.new_price}</div>
                    </div>
                    <div className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ligula ut nunc feugiat aliquet. Nullam ac lacus sed dolor suscipit pretium. Cras ut facilisis arcu, in malesuada lorem. Nam eu urna a est convallis fermentum. Sed in justo lectus.
                    </div>
                    <ul className="flex space-x-2 mb-4">
                        <li className="border border-gray-300 px-2 py-1">S</li>
                        <li className="border border-gray-300 px-2 py-1">M</li>
                        <li className="border border-gray-300 px-2 py-1">L</li>
                        <li className="border border-gray-300 px-2 py-1">XL</li>
                        <li className="border border-gray-300 px-2 py-1">XXL</li>
                    </ul>
                    <button onClick={() => AddCardItems(idProducts)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">ADD to CART</button>
                    <p className="mt-4">
                        <span className="font-bold">Category:</span> <span>Women, T-Shirt, Crop Top</span>
                    </p>
                    <p className="mt-2">
                        <span className="font-bold">Tags:</span> <span>Modern, Latest</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductDispaly
