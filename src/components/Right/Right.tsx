"use client"
import React from 'react';
import './Right.css'
import { useRouter } from 'next/navigation';

const Right = () => {

    let list: string[] = [
        "Relevance",
        "Trending",
        "Latest arrivals",
        "Price: Low to high",
        "Price: High to low",
    ]

    let route = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const name = e.target as HTMLLIElement;
        let NameLIElement = name.textContent;
        NameLIElement == "Trending" ?
            route.push("/trending") :
            NameLIElement == "Latest arrivals" ?
                route.push("/latestArrivals") :
                route.push("/");
    }

    return (
        <div className='left bg-slate-50 h-screen'>
            <div className='p-5'>
                <p className='text-xs text-slate-500 mb-5'>Sort by</p>
                <ul>
                    {
                        list.map((e: string, i: number) => {
                            return (
                                <li
                                    key={i}
                                    className="cursor-pointer text-sm p-1 text-gray-600 hover:text-gray-900"
                                    onClick={handleClick}
                                >
                                    {e}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Right
