"use client"

import "./ListProductsItem.css"

import {useRouter} from "next/navigation"
import React, {useContext} from "react"
import {ShopeProviderContext} from "@/context/ShopeContext"

import Swale from "@/components/Swal/Swal"

const ListProductsItem = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

  const router = useRouter()
  let {cookies, allProductsPagination, pageNumbers, handlingPagination} = useContext(ShopeProviderContext)

  const handlingRemoveProduct = async (id: any) => {
    return await fetch(`${BASE_URL}/removeProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "token-auth": cookies.token,
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then((res) => {
        res.status == 200 ? Swale("products removed correctly ✅") : res.status == 403 ? Swale("Just admin can remove products ❌") : router.push("/error")
      })
      .catch(() => {
        router.push("/error")
      })
  }

  return (
    <div className='grid mb-3'>
      <div className='grid container mx-auto bg-slate-50 p-6 rounded-lg shadow-md overflow-auto' style={{height: "calc(100vh - 105px)"}}>
        <h1 className='text:xl sm:text-2xl font-bold mb-6 text-gray-800'>All Products List</h1>
        <table className=' w-full text-left table-auto border-collapse overflow-auto' style={{minWidth: "1000px"}}>
          <thead className='bg-gray-100 text-gray-600'>
            <tr className='text-xs sm:text-sm'>
              <th className='border-b-2 border-gray-300 py-2 px-4'>Product</th>
              <th className='border-b-2 border-gray-300 py-2 px-4'>Title</th>
              <th className='border-b-2 border-gray-300 py-2 px-4'>Old Price</th>
              <th className='border-b-2 border-gray-300 py-2 px-4'>New Price</th>
              <th className='border-b-2 border-gray-300 py-2 px-4'>Category</th>
              <th className='border-b-2 border-gray-300 py-2 px-4'>Remove</th>
            </tr>
          </thead>
          <tbody>
            {allProductsPagination &&
              allProductsPagination.map((e: any, index: number) => {
                return (
                  <tr key={index} className='text-xs sm:text-sm bg-white even:bg-gray-50 hover:bg-gray-100 transition-colors'>
                    <td className='py-4'>
                      <img src={`${e.img}`} alt='Product Image' className='w-16 h-16 object-cover' />
                    </td>
                    <td className='py-4 px-4 text-gray-700'>{e.name}</td>
                    <td className='py-4 px-4 text-gray-500 line-through'>${e.old_price}</td>
                    <td className='py-4 px-4 text-blue-600 font-bold'>${e.new_price}</td>
                    <td className='py-4 px-4 text-gray-700'>{e.category}</td>
                    <td className='pt-9 flex justify-center items-center text-red-500 cursor-pointer' onClick={() => handlingRemoveProduct(e._id)}>
                      X
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      <div aria-label='Page navigation example'>
        <ul className='pagination flex flex-wrap gap-2 my-6 justify-center items-center'>
          <li className='page-item'>
            <a className='page-link px-4 py-2 bg-slate-500 text-white hover:bg-slate-600 rounded-l-lg transition duration-300 ease-in-out' href='#'>
              Previous
            </a>
          </li>
          {pageNumbers &&
            pageNumbers.map((e: number) => {
              return (
                <li onClick={handlingPagination} className='cursor-pointer page-link px-4 py-2 bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-white transition duration-300 ease-in-out'>
                  {e}
                </li>
              )
            })}
          <li className='page-item'>
            <a className='page-link px-4 py-2 bg-slate-500 text-white hover:bg-slate-600 rounded-r-lg transition duration-300 ease-in-out' href='#'>
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ListProductsItem
