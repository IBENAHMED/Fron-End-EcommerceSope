"use client"
import React, { useContext, useState } from 'react'
import upload_area from '../../Assets/upload_area.svg'
import axios from 'axios';
import './AddProductsItem.css';
import { ShopeProviderContext } from '@/context/ShopeContext';
import Swale from '@/components/Swal/Swal';
import { useRouter } from 'next/navigation';

const AddProductsItem = () => {

    let [img, setImage]: boolean | any = useState(false);
    let { cookies } = useContext(ShopeProviderContext);

    let [product, setProduct]: any = useState({
        name: "",
        img: "",
        category: "women",
        new_price: "",
        old_price: "",
    });

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    let route = useRouter();

    let addProducts = async (e: any) => {
        e.preventDefault();
        let responsData: any;

        // upload image
        let newFormat = new FormData();
        newFormat.append('product', img);

        await axios.post(`${BASE_URL}/upload`, newFormat).then((res) => {
            responsData = res.data
        }).catch(() => {
            route.push("/error")
        });

        // Post product in db
        if (responsData.success) {

            product.img = responsData.image_url;

            await fetch(`${BASE_URL}/addproducts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token-auth': cookies.token,
                },
                body: JSON.stringify(product)

            }).then((res) => {
                res.status == 200 ?
                    Swale("success", "Product Added") :
                    res.status == 403 ? Swale("error", "Just admin can add products") :
                        route.push("/error");

            }).catch((err) => {
                route.push("/error")
            });
        };
    };

    return (
        <div className="AddProductsItem bg-slate-50 border border-slate-300 rounded">
            <div className="container mx-auto p-10">
                <form>
                    {/* <!-- Product Title --> */}
                    <div className="mb-4">
                        <label htmlFor="product-title" className="block text-sm font-medium text-gray-700">Product Title</label>
                        <input onChange={(e: any) => setProduct({ ...product, [e.target.name]: e.target.value })} name='name' type="text" id="product-title" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Type here" />
                    </div>

                    {/* <!-- Price and Offer Price --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                            <input onChange={(e: any) => setProduct({ ...product, [e.target.name]: e.target.value })} name='old_price' type="text" id="price" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Type here" />
                        </div>
                        <div>
                            <label htmlFor="offer-price" className="block text-sm font-medium text-gray-700">Offer Price</label>
                            <input onChange={(e: any) => setProduct({ ...product, [e.target.name]: e.target.value })} name='new_price' type="text" id="offer-price" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Type here" />
                        </div>
                    </div>

                    {/* <!-- Product Category --> */}
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Product Category</label>
                        <select onChange={(e: any) => setProduct({ ...product, [e.target.name]: e.target.value })} name='category' id="category" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>women</option>
                            <option>men</option>
                            <option>kid</option>
                            <option>Accessories</option>
                        </select>
                    </div>

                    {/* <!-- Product Image Upload --> */}
                    <div className="mb-4">
                        <label htmlFor="product-image" className="block text-sm font-medium text-gray-700">Product Image</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <div className="flex text-sm text-gray-600">
                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <div>
                                            <img className={`${img && "w-40"}`} src={img ? URL.createObjectURL(img) : upload_area.src} alt='upload_area' />
                                        </div>
                                        <input onChange={(e: any) => setImage(e.target.files[0])} id="file-upload" name="img" type="file" className="sr-only" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Add Button --> */}
                    <div className="mt-6">
                        <button onClick={(e: any) => addProducts(e)} className="w-full flex justify-center mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                            ADD
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProductsItem
