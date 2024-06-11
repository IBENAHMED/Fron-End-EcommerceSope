"use client"

import React, { useContext } from 'react'
import banner_mens from '../../Assets/banner_mens.png'
import banner_kids from '../../Assets/banner_kids.png'
import banner_women from '../../Assets/banner_women.png'
import { ShopeProviderContext } from '@/context/ShopeContext';
import Item from '@/components/Item/Item';
import Spinner from '@/components/Spinner/Spinner'

const page = (props: any) => {

    let title, img;
    let { all_products }: any = useContext(ShopeProviderContext);

    switch (props.params.RoutePage) {
        case "men":
            img = banner_mens;
            title = "men";
            break;
        case "women":
            img = banner_women;
            title = "women";
            break;
        case "kid":
            img = banner_kids;
            title = "kid";
            break;
        default:
            title = "Not Found Thid Page";
            break;
    };

    return (
        <div className='container mx-auto'>
            <img src={img && img.src} alt='image banner' />
            <div className='px-5'>

                <div className=' flex justify-between items-center py-10'>
                    <p><span className='font-bold'>Showing 1-12 </span> out of 36 products</p>
                    <div className='flex'>
                        <button className="transition duration-300 ease-in-out bg-slate-200 text-gray-800 from-neutral-700 py-2 px-4 border border-gray-400 rounded-full hover:bg-gray-200">
                            sort by
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-4 mb-5 gap-5'>
                    {
                        all_products
                            ?
                            all_products.map((item: any, i: any) => {
                                if (props.params.RoutePage == item.category) {
                                    return <Item
                                        key={i}
                                        id={item._id}
                                        name={item.name}
                                        image={item.img}
                                        new_price={item.new_price}
                                        old_price={item.old_price}
                                    />
                                } else {
                                    return null
                                }
                            })
                            :
                            <div className='col-span-12'>
                                <Spinner />
                            </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default page;
