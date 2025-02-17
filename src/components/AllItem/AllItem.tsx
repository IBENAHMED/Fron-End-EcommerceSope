"use client"

import React, {useContext} from "react"
import {ShopeProviderContext} from "@/context/ShopeContext"

import Item from "../Item/Item"
import Spinner from "../Spinner/Spinner"

export default function AllItem() {
  let {allProductsPagination, pageNumbers, handlingPagination} = useContext(ShopeProviderContext)

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5 gap-5'>
        {allProductsPagination ? (
          allProductsPagination.map((item: any, i: any) => {
            return <Item key={i} id={item._id} name={item.name} image={item.img} new_price={item.new_price} old_price={item.old_price} />
          })
        ) : (
          <div className='col-span-12'>
            <Spinner />
          </div>
        )}
      </div>
      <div aria-label='Page navigation example'>
        <ul className='pagination flex flex-wrap gap-2 mb-6 justify-center items-center'>
          <li className='page-item'>
            <a className='page-link px-4 py-2 bg-slate-500 text-white hover:bg-slate-600 rounded-l-lg transition duration-300 ease-in-out' href='#'>
              Previous
            </a>
          </li>
          {pageNumbers &&
            pageNumbers.map((pageNumber: number) => {
              return (
                <li onClick={handlingPagination} className='cursor-pointer page-link px-4 py-2 bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-white transition duration-300 ease-in-out'>
                  {pageNumber}
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
    </>
  );
};
