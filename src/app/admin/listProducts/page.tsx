"use client"
import { ShopeProviderContext } from '@/context/ShopeContext';
import withAuthandRole from '@/util/PrivateRouterAdmin';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const page = () => {

    let [AllProducts, setAllProducts]: any = useState();
    let { cookies } = useContext(ShopeProviderContext)
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    useEffect(() => {
        let handleAllProducts = async () => {
            let data: any = await axios.get(`${BASE_URL}/getallproducts`);
            let products = data.data.allPrudcts;
            setAllProducts(products);
        }
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
            if (res.status == 403) {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Just admin can remove products",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }).catch((err) => {
            console.log(err)
        })
    };

    return (
        <div className="bg-red-50 pt-7 px-8">
            <div className="container mx-auto bg-white p-6 rounded-lg shadow-md" style={{ "height": "calc(100vh - 105px)", "overflow": "auto" }}>
                <h1 className="text-2xl font-bold mb-4">All Products List</h1>
                <table className="w-full text-left table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="border-b py-2">Products</th>
                            <th className="border-b py-2">Title</th>
                            <th className="border-b py-2">Old Price</th>
                            <th className="border-b py-2">New Price</th>
                            <th className="border-b py-2">Category</th>
                            <th className="border-b py-2">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AllProducts && AllProducts.map((e: any) => {
                                return (
                                    <tr className="border-b">
                                        <td className="py-4">
                                            <img src={`${e.img}`} alt="Product Image" className="w-16 h-16 object-cover" />
                                        </td>
                                        <td className="py-4">{e.name}</td>
                                        <td className="py-4">{e.old_price}</td>
                                        <td className="py-4">{e.new_price}</td>
                                        <td className="py-4">{e.category}</td>
                                        <td className="py-4 text-red-500 cursor-pointer" onClick={() => handlingRemoveProduct(e._id)}>X</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default withAuthandRole(page)
