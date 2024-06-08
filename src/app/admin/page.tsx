"use client"
import React, { useContext, useState } from 'react'
import upload_area from '../../Assets/upload_area.svg'
import axios from 'axios';
import Swal from 'sweetalert2';
import withAuthandRole from '@/util/PrivateRouterAdmin';
import { ShopeProviderContext } from '@/context/ShopeContext';

const page = () => {

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

  let addProducts = async (e: any) => {
    e.preventDefault();
    let responsData: any;

    // upload image
    let newFormat = new FormData();
    newFormat.append('product', img);
    await axios.post(`${BASE_URL}/upload`, newFormat).then((res) => {
      responsData = res.data
    }).catch(() => {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Product Not Added",
        showConfirmButton: false,
        timer: 500
      });
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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product Added",
          showConfirmButton: false,
          timer: 500
        });
        if (res.status == 403) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Just admin can remove the products",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }).catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "product Not Added",
          showConfirmButton: false,
          timer: 1500
        });
      });
    };
  };

  return (
    <div className="bg-slate-300">
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
            <button onClick={(e: any) => addProducts(e)} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default withAuthandRole(page)
