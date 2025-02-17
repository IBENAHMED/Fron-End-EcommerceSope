"use client"
import {ShopeProviderContext} from "@/context/ShopeContext"
import axios from "axios"
import React, {useContext, useEffect, useState} from "react"
import Item from "../Item/Item"
import Spinner from "../Spinner/Spinner"
import {useRouter} from "next/navigation"

const LowtohighItem = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const route = useRouter();
  let {cookies} = useContext(ShopeProviderContext);

  let [newCollection, setNewCollection]: any = useState();

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(`${BASE_URL}/lowtohigh`)
        setNewCollection(response.data)
      } catch (err) {
        route.push("/error")
      }
    }
    fetchData()
  }, [cookies.token])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5 gap-5'>
      {newCollection ? (
        newCollection.map((item: any, i: any) => {
          return <Item key={i} id={item._id} name={item.name} image={item.img} new_price={item.new_price} old_price={item.old_price} />
        })
      ) : (
        <div className='col-span-12'>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default LowtohighItem;
