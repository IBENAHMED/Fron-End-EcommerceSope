"use client"
import React, { useEffect, useState } from 'react';
import './Left.css'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Left = () => {

    let list: string[] = [
        "All", "Women", "Men", "Kids",
        "Bags", "Kids", "Stickers"
    ];

    let route = useRouter();
    const [role, setRole] = useState<string | null>(null);
    let [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const role = window.localStorage.getItem("role");
            setRole(role);
        }
    }, []);

    useEffect(() => {

        const handleResize = () => window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
        handleResize();
        window.addEventListener('resize', handleResize);

    }, []);


    let handlingNavigation = (NameLIElement: any) => {
        return NameLIElement == "Women" ?
            route.push("/women") :
            NameLIElement == "All" ?
                route.push("/all") :
                NameLIElement == "Men" ?
                    route.push("/men") :
                    NameLIElement == "Kids" ?
                        route.push("/kid") :
                        NameLIElement == "AddProduct" ?
                            route.push("/admin") :
                            NameLIElement == "ListProduct" ?
                                route.push("/admin/listProducts") :
                                route.push("/");
    }

    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const name = e.target as HTMLLIElement;
        let NameLIElement: any = name.textContent;
        handlingNavigation(NameLIElement);

    }

    let handleClickOption = (e: any) => {
        let NameLIElement: any = e.target.value;
        handlingNavigation(NameLIElement)
    }

    return (
        <div className='left bg-slate-50'>
            <div className='p-5'>
                <p className='text-xs text-slate-500  mb-5'>Collections</p>
                {
                    isMobile ? <select onChange={handleClickOption} className='px-3 py-1 rounded text-slate-600'>
                        {
                            isMobile ? list.map((e: string, i: number) => {
                                return (
                                    <option
                                        key={i}
                                        className="cursor-pointer p-1 text-gray-600 hover:text-gray-900 text-xs md:text-sm">
                                        {e}
                                    </option>
                                )
                            }) : null
                        }
                        {
                            isMobile && role == "ADMIN" ?
                                <>
                                    <option className="cursor-pointer p-1 text-gray-600 hover:text-gray-900 text-xs md:text-sm">
                                        AddProduct
                                    </option>
                                    <option className="cursor-pointer p-1 text-gray-600 hover:text-gray-900 text-xs md:text-sm">
                                        ListProduct
                                    </option>
                                </> : <></>
                        }
                    </select> : <></>
                }
                {
                    !isMobile ? <ul>
                        {
                            !isMobile ? list.map((e: string, i: number) => {
                                return (
                                    <li
                                        key={i}
                                        onClick={handleClick}
                                        className="cursor-pointer p-1 text-gray-600 hover:text-gray-900 text-xs md:text-sm">
                                        {e}
                                    </li>
                                )
                            }) : null
                        }
                        {
                            !isMobile && role == "ADMIN" ?
                                <>
                                    <li onClick={handleClick} className="cursor-pointer p-1 text-gray-600 hover:text-gray-900 text-xs md:text-sm">
                                        AddProduct
                                    </li>
                                    <li onClick={handleClick} className="cursor-pointer p-1 text-gray-600 hover:text-gray-900 text-xs md:text-sm">
                                        ListProduct
                                    </li>
                                </> : <></>
                        }
                    </ul> : <></>
                }
            </div>
        </div >
    )
}

export default Left
