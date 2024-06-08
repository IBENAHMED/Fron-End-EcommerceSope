"use client"
import './NewCollections.css';
import Item from '../Item/Item';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import ShopeContext, { ShopeProviderContext } from '@/context/ShopeContext';

const NewCollections = () => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    let { cookies } = useContext(ShopeProviderContext)

    let [newCollection, setNewCollection] = useState([]);

    useEffect(() => {
        let fetchData = async () => {
            try {
                let data = await axios.get(`${BASE_URL}/newcollection`);
                console.log("hhhhhhhhhh" + data)
                setNewCollection(data.data.newCollection);
            } catch (err) {
                console.log("err" + err)
            }
        };
        fetchData();
    }, [cookies.token])

    return (
        <div className='px-5 container mx-auto text-left mt-20'>
            <h1 className='text-1xl md:text-3xl pb-5 text-center text-pink-600'>NEW COLLECTIONS</h1>
            <hr className='mb-5 border-pink-600' />
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

export default NewCollections
