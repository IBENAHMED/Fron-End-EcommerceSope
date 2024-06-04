import './NewCollections.css';
import new_collections from '../../Assets/new_collections'
import Item from '../Item/Item';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';

const NewCollections = async () => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    let data = await axios.get(`${BASE_URL}/newcollection`);
    let newCollection = await data.data.newCollection

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
