"use client"
import './Popular.css';
import data_products from '../../Assets/data';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Popular = () => {

    let [popularWomen, setPopularWomen] = useState([]);

    useEffect(() => {
        let getPopularWomen = async () => {
            let data = await axios.get("http://localhost:4000/popularWomen");
            setPopularWomen(data.data.newPopularWomen);
        }
        getPopularWomen();
    })

    return (
        <div>
            <div className='container mx-auto text-left mt-40'>
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
