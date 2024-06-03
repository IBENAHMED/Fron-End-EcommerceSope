"use client"
import './NewCollections.css';
import new_collections from '../../Assets/new_collections'
import Item from '../Item/Item';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NewCollections = () => {
    let [newCollection, setNewCollection]: any = useState([])

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    useEffect(() => {
        let getNewCollection = async () => {
            let data = await axios.get(`${BASE_URL}/newcollection`);
            setNewCollection(data.data.newCollection)
        };

        getNewCollection();
    });

    return (
        <div>
            <div className='px-5 container mx-auto text-left mt-40'>
                <h1 className='text-3xl pb-5 text-center'>NEW COLLECTIONS</h1>
                <hr />
                <div className='grid grid-cols-4 gap-5'>
                    {newCollection && newCollection.map((item: any, i: any) => {
                        return <Item
                            key={i}
                            id={item._id}
                            name={item.name}
                            image={item.img}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default NewCollections
