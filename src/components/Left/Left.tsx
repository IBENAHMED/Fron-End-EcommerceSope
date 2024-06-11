"use client"
import React, { useEffect, useState } from 'react';
import './Left.css'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Left = () => {

    let list: string[] = [
        "All", "Women", "Men", "Kids",
        "Bags", "Drinkwar", "Electronic", "Headwar",
        "Hoodies", "Jackets", "Kids", "Pets",
        "Shirts", "Stickers"
    ];

    let route = useRouter();

    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const role = window.localStorage.getItem("role");
            setRole(role);
        }
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const name = e.target as HTMLLIElement;
        let NameLIElement = name.textContent;
        NameLIElement == "Women" ?
            route.push("/women") :
            NameLIElement == "All" ?
                route.push("/all") :
                NameLIElement == "Men" ?
                    route.push("/men") :
                    NameLIElement == "Kids" ?
                        route.push("/kid") :
                        route.push("/");
    }

    return (
        <div className='left bg-slate-50 h-screen'>
            <div className='p-5'>
                <p className='text-xs  text-slate-500  mb-5'>Collections</p>
                <ul>
                    {
                        list.map((e: string, i: number) => {
                            return (
                                <li key={i}
                                    onClick={handleClick}
                                    className="cursor-pointer text-sm p-1 text-gray-600 hover:text-gray-900">
                                    {e}
                                </li>
                            )
                        })
                    }
                    {
                        role == "ADMIN" ?
                            <>
                                <Link href="/admin" >
                                    <li className='cursor-pointer text-sm p-1 text-gray-600 hover:text-gray-900'>Add Product</li>
                                </Link>
                                <Link href="/admin/listProducts">
                                    <li className='cursor-pointer text-sm p-1 text-gray-600 hover:text-gray-900'>List Product</li>
                                </Link>
                            </> : <></>
                    }
                </ul>
            </div>
        </div >
    )
}

export default Left
