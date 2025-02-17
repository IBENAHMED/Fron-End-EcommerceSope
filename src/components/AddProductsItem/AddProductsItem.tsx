"use client"

import "./AddProductsItem.css"

import axios from "axios"
import {useRouter} from "next/navigation"
import React, {useContext, useEffect, useState} from "react"
import {ShopeProviderContext} from "@/context/ShopeContext"

import Swale from "@/components/Swal/Swal"
import upload_area from "../../Assets/upload_area.svg"

const AddProductsItem = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  const sizes = [
    {id: "S", label: "Small", value: "Size S"},
    {id: "M", label: "Medium", value: "Size M"},
    {id: "L", label: "Large", value: "Size L"},
    {id: "XL", label: "X-Large", value: "Size XL"},
    {id: "XXL", label: "XX-Large", value: "Size XXL"},
  ]

  const route = useRouter()
  const {cookies} = useContext(ShopeProviderContext)

  const [selectedSizes, setSelectedSizes]: any = useState([])
  const [img, setImage]: boolean | any = useState(false)
  const [product, setProduct]: any = useState({name: "", img: "", category: "women", new_price: "", old_price: "", size: []})

  useEffect(() => {
    setProduct({...product, size: selectedSizes})
  }, [selectedSizes])

  const addProducts = async (e: any) => {
    e.preventDefault()

    let responsData: any
    let newFormat = new FormData()
    newFormat.append("product", img)
    await axios
      .post(`${BASE_URL}/upload`, newFormat)
      .then((res) => {
        responsData = res.data
      })
      .catch(() => {
        route.push("/error")
      })

    if (responsData.success) {
      product.img = responsData.image_url
      await fetch(`${BASE_URL}/addproducts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "token-auth": cookies.token,
        },
        body: JSON.stringify(product),
      })
        .then((res) => {
          res.status == 200 ? Swale("Product Added ✅") : res.status == 403 ? Swale("Just admin can add products ❌") : route.push("/error")
        })
        .catch(() => {
          route.push("/error")
        })
    }
  }

  const handleCheckboxChange = (event: any) => {
    const {value, checked} = event.target
    setSelectedSizes((prevState: any) => (checked ? [...prevState, value] : prevState.filter((size: any) => size !== value)))
  }

  return (
    <div className='AddProductsItem bg-slate-50 border border-slate-300 rounded'>
      <div className='container mx-auto p-10'>
        <form>
          <div className='mb-4'>
            <label htmlFor='product-title' className='block text-sm font-medium text-gray-700'>
              Product Title
            </label>
            <input
              onChange={(e: any) => setProduct({...product, [e.target.name]: e.target.value})}
              name='name'
              type='text'
              id='product-title'
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              placeholder='Type here'
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <div>
              <label htmlFor='price' className='block text-sm font-medium text-gray-700'>
                Price
              </label>
              <input
                onChange={(e: any) => setProduct({...product, [e.target.name]: e.target.value})}
                name='old_price'
                type='text'
                id='price'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                placeholder='Type here'
              />
            </div>
            <div>
              <label htmlFor='offer-price' className='block text-sm font-medium text-gray-700'>
                Offer Price
              </label>
              <input
                onChange={(e: any) => setProduct({...product, [e.target.name]: e.target.value})}
                name='new_price'
                type='text'
                id='offer-price'
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                placeholder='Type here'
              />
            </div>
          </div>

          <div className='mb-4'>
            <label htmlFor='category' className='block text-sm font-medium text-gray-700'>
              Product Category
            </label>
            <select
              onChange={(e: any) => setProduct({...product, [e.target.name]: e.target.value})}
              name='category'
              id='category'
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black'
            >
              <option className='text-black'>women</option>
              <option className='text-black'>men</option>
              <option className='text-black'>kid</option>
              <option className='text-black'>Accessories</option>
            </select>
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Product Categories</label>
            <ul className='list-group mt-2'>
              {sizes.map((size) => (
                <li key={size.id} className='list-group-item flex items-center'>
                  <input
                    type='checkbox'
                    id={size.id}
                    name={size.id}
                    value={size.id}
                    checked={selectedSizes[size.id]}
                    onChange={handleCheckboxChange}
                    className='form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded mr-2'
                  />
                  <label htmlFor={size.id} className='text-sm text-gray-900'>
                    {size.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className='mb-4'>
            <label htmlFor='product-image' className='block text-sm font-medium text-gray-700'>
              Product Image
            </label>
            <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
              <div className='space-y-1 text-center'>
                <div className='flex text-sm text-gray-600'>
                  <label
                    htmlFor='file-upload'
                    className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                  >
                    <div>
                      <img className={`${img && "w-40"}`} src={img ? URL.createObjectURL(img) : upload_area.src} alt='upload_area' />
                    </div>
                    <input onChange={(e: any) => setImage(e.target.files[0])} id='file-upload' name='img' type='file' className='sr-only' />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-6'>
            <button onClick={(e: any) => addProducts(e)} className='w-full flex justify-center mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800'>
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProductsItem
