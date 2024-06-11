"use client"
import Swale from '@/components/Swal/Swal';
import { ShopeProviderContext } from '@/context/ShopeContext';
import withAuthandRole from '@/util/PrivateRouterAdmin';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'

const page = () => {

    let [AllProducts, setAllProducts]: any = useState();
    let { cookies } = useContext(ShopeProviderContext)
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    let route = useRouter();

    useEffect(() => {
        let handleAllProducts = async () => {
            let data: any = await axios.get(`${BASE_URL}/getallproducts`);
            let products = data.data.allPrudcts;
            setAllProducts(products);
        };

        handleAllProducts();
    }, [AllProducts]);

    let handlingRemoveProduct = async (id: any) => {
        return await fetch(`${BASE_URL}/removeProduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token-auth': cookies.token,
            },
            body: JSON.stringify({
                id
            })
        }).then((res) => {
            res.status == 200 ?
                Swale("success", "products removed correctly") :
                res.status == 403 ? Swale("error", "Just admin can remove products") :
                    route.push("/error");

        }).catch((err) => {
            route.push("/error")
        })
    };

    return (
        <div className="container mx-auto bg-slate-50 p-6 rounded-lg shadow-md" style={{ height: "calc(100vh - 105px)", overflow: "auto" }}>
            <h1 className="text-2xl font-bold mb-6 text-gray-800">All Products List</h1>
            <table className="w-full text-left table-auto border-collapse">
                <thead className="bg-gray-100 text-gray-600">
                    <tr>
                        <th className="border-b-2 border-gray-300 py-2 px-4">Product</th>
                        <th className="border-b-2 border-gray-300 py-2 px-4">Title</th>
                        <th className="border-b-2 border-gray-300 py-2 px-4">Old Price</th>
                        <th className="border-b-2 border-gray-300 py-2 px-4">New Price</th>
                        <th className="border-b-2 border-gray-300 py-2 px-4">Category</th>
                        <th className="border-b-2 border-gray-300 py-2 px-4">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        AllProducts && AllProducts.map((e: any, index: number) => {
                            return (
                                <tr key={index} className="bg-white even:bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <td className="py-4">
                                        <img src={`${e.img}`} alt="Product Image" className="w-16 h-16 object-cover" />
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">{e.name}</td>
                                    <td className="py-4 px-4 text-gray-500 line-through">${e.old_price}</td>
                                    <td className="py-4 px-4 text-blue-600 font-bold">${e.new_price}</td>
                                    <td className="py-4 px-4 text-gray-700">{e.category}</td>
                                    <td className="pt-9 flex justify-center items-center text-red-500 cursor-pointer"
                                        onClick={() => handlingRemoveProduct(e._id)}>
                                        X
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default withAuthandRole(page)
