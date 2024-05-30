"use client"

import Breadcrums from '@/components/Breadcrums/Breadcrums';
import DiscriptionBox from '@/components/DiscriptionBox/DiscriptionBox';
import ProductDispaly from '@/components/ProductDispaly/ProductDispaly';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
import { ShopeProviderContext } from '@/context/ShopeContext'
import React, { useContext, useEffect, useState } from 'react'

const page = (props: any) => {

    let { all_products } = useContext(ShopeProviderContext);
    let product = all_products.find((e: any) => e._id == props.params.Product);

    return (
        <div className='container mx-auto'>
            <Breadcrums product={product && product} />
            <ProductDispaly product={product && product} idProducts={props.params.Product} />
            <DiscriptionBox />
            <RelatedProducts />
        </div>
    )
}

export default page
