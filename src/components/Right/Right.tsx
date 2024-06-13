"use client"
import React, { useEffect, useState } from 'react';
import './Right.css'
import { useRouter } from 'next/navigation';

const Right = () => {

    let list: string[] = [
        "Trending",
        "Latest arrivals",
        "Price: Low to high",
        "Price: High to low",
    ]

    let route = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const name = e.target as HTMLLIElement;
        let NameLIElement = name.textContent;
        handlingNavigation(NameLIElement);
    }


    let [isMobile, setIsMobile] = useState(false);

    useEffect(() => {

        const handleResize = () => window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
        handleResize();
        window.addEventListener('resize', handleResize);

    }, []);


    let handlingNavigation = (NameLIElement: any) => {
        return NameLIElement == "Trending" ?
            route.push("/trending") :
            NameLIElement == "Latest arrivals" ?
                route.push("/latestArrivals") :
                route.push("/");
    }

    let handleClickOption = (e: any) => {
        let NameLIElement: any = e.target.value;
        handlingNavigation(NameLIElement)
    };

    return (
        <div className='left bg-slate-50'>
            <div className='p-5'>
                <p className='text-xs text-slate-500 mb-5'>Sort by</p>
                {


                    isMobile ? <select onChange={handleClickOption} className='px-3 py-1 rounded text-slate-600'>
                        <option selected>Choose an option</option>
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
                    </ul> : <></>
                }
            </div>
        </div >
    )
}

export default Right
