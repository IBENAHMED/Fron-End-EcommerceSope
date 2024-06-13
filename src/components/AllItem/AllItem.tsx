"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import Spinner from '../Spinner/Spinner';

const AllItem = () => {

    let [allProducts, setAllProducts]: any = useState([]);
    let [numberpage, setNumberpage]: any = useState(undefined);
    let [page, setPage]: any = useState(1);
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    let router = useRouter();

    useEffect(() => {
        let fetchData = async () => {
            try {

                let response = await axios.post(`${BASE_URL}/getallproductswithpagination/${page}`);
                setAllProducts(response.data.productPage);
                setNumberpage(response.data.numberPages);

            } catch (err) {
                router.push("/error")
            }
        }
        fetchData();
    }, [page])


    let pageNumbers: any[] = [];
    if (numberpage !== undefined) {
        for (let index = 1; index <= numberpage; index++) {
            pageNumbers.push(index)
        };
    };


    let handlingPagination = (e: React.MouseEvent<HTMLLIElement>) => {

        let name = e.target as HTMLLIElement;
        let valueName = name.textContent;
        setPage(valueName);

    }

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5 gap-5'>
                {
                    allProducts
                        ?
                        allProducts.map((item: any, i: any) => {
                            return <Item
                                key={i}
                                id={item._id}
                                name={item.name}
                                image={item.img}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        })
                        :
                        <div className='col-span-12'>
                            <Spinner />
                        </div>
                }
            </div>
            <div aria-label="Page navigation example">
                <ul className="pagination flex flex-wrap gap-2 mb-6 justify-center items-center">
                    <li className="page-item">
                        <a className="page-link px-4 py-2 bg-slate-500 text-white hover:bg-slate-600 rounded-l-lg transition duration-300 ease-in-out" href="#">
                            Previous
                        </a>
                    </li>
                    {
                        pageNumbers && pageNumbers.map((e: number) => {
                            return (
                                <li
                                    onClick={handlingPagination}
                                    className="cursor-pointer page-link px-4 py-2 bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-white transition duration-300 ease-in-out"
                                >
                                    {e}
                                </li>
                            );
                        })
                    }
                    <li className="page-item">
                        <a className="page-link px-4 py-2 bg-slate-500 text-white hover:bg-slate-600 rounded-r-lg transition duration-300 ease-in-out" href="#">Next</a>
                    </li>
                </ul>
            </div>


        </>
    )
}

export default AllItem
