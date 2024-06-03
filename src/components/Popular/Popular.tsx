"use client"
import './Popular.css';
import data_products from '../../Assets/data';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Popular = () => {

    let [popularWomen, setPopularWomen] = useState([]);

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    useEffect(() => {
        let getPopularWomen = async () => {
            let data = await axios.get(`${BASE_URL}/popularWomen`);
            setPopularWomen(data.data.newPopularWomen);
        }
        getPopularWomen();
    })

    return (
        <div>
            <div className='px-5 container mx-auto text-left mt-40'>
                <h1 className='text-3xl pb-5 text-center'>POPULAR IN WOMEN</h1>
                <hr />
                <div className='flex gap-5'>
                    {popularWomen.map((item: any, i: any) => {
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

export default Popular
