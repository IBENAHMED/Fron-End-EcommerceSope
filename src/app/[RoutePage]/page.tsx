"use client";

import React, { useContext } from 'react';
import { ShopeProviderContext } from '@/context/ShopeContext';

import Item from '@/components/Item/Item';
import Spinner from '@/components/Spinner/Spinner';

import banner_mens from '../../Assets/banner_mens.png';
import banner_kids from '../../Assets/banner_kids.png';
import banner_women from '../../Assets/banner_women.png';

export default function page (props: any) {
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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5 gap-5'>
        {all_products ? (
          all_products.map((item: any, i: any) => {
            if (props.params.RoutePage == item.category) {
              return <Item key={i} id={item._id} name={item.name} image={item.img} new_price={item.new_price} old_price={item.old_price}/>
            } else {
              return null
            }
          })) : (
            <div className='col-span-12'>
              <Spinner />
            </div>
          )};
      </div>
    );
};