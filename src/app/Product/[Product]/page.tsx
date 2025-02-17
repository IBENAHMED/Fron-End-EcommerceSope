"use client";

import React, { useContext } from 'react';
import { ShopeProviderContext } from '@/context/ShopeContext';

import Spinner from '@/components/Spinner/Spinner';
import Breadcrums from '@/components/Breadcrums/Breadcrums';
import DiscriptionBox from '@/components/DiscriptionBox/DiscriptionBox';
import ProductDispaly from '@/components/ProductDispaly/ProductDispaly';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';

export default function page (props: any) {
  let { all_products } = useContext(ShopeProviderContext);
  let product = all_products && all_products.find((e: any) => e._id == props.params.Product);

  return (
    <div className='container mx-auto'>
      {product ? (
        <div className='px-5'>
          <Breadcrums product={product && product} />
          <ProductDispaly product={product && product} idProducts={props.params.Product} />
          <DiscriptionBox />
          <RelatedProducts idProducts={props.params.Product} />
        </div>
      ) : (
        <div className='col-span-12 flex justify-center items-center h-screen'>
          <Spinner />
        </div>
      )}
    </div>
  );
};
