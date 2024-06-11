"use client"
import './RelatedProducts.css';
import data from '../../Assets/data';
import Item from '../Item/Item';
import axios from 'axios';
import { useEffect, useState } from 'react';

const RelatedProducts = ({ idProducts }: any) => {

    let [data, setData]: any = useState([]);

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    useEffect(() => {
        let getrelatiedproducts = async () => {
            let data = await axios.post(`${BASE_URL}/getrelatiedproducts`, { _id: idProducts });
            setData(data.data.fourProducts);
        }
        getrelatiedproducts();
    }, [])

    return (

        <div className='px-5 container mx-auto text-left mt-20'>
            <h1 className='pb-5 font-bold text-xl text-gray-900'>Related Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    data && data.map((item: any, i: any) => {
                        return <Item
                            key={i}
                            id={item._id}
                            name={item.name}
                            image={item.img}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default RelatedProducts
