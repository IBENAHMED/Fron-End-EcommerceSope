"use client"
import './LatestArrivalsItem.css';
import Item from '../Item/Item';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import { ShopeProviderContext } from '@/context/ShopeContext';
import { useRouter } from 'next/navigation';

const LatestArrivalsItem = () => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    let { cookies } = useContext(ShopeProviderContext)

    let [newCollection, setNewCollection] = useState([]);
    let route = useRouter()

    useEffect(() => {
        let fetchData = async () => {
            try {
                let data = await axios.get(`${BASE_URL}/newcollection`);
                setNewCollection(data.data.newCollection);
            } catch (err) {
                route.push('/error')
            }
        };
        fetchData();
    }, [cookies.token])

    return (
        <div className='px-5 container mx-auto text-left mt-20'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    newCollection
                        ? newCollection.map((item: any, i: any) => {
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
        </div>
    )
}

export default LatestArrivalsItem;
