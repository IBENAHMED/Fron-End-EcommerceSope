"use client"

import Breadcrums from '@/components/Breadcrums/Breadcrums';
import DiscriptionBox from '@/components/DiscriptionBox/DiscriptionBox';
import ProductDispaly from '@/components/ProductDispaly/ProductDispaly';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
import { ShopeProviderContext } from '@/context/ShopeContext'
import withAuth from '@/util/PrivateRouter';
import React, { useContext, useEffect, useState } from 'react'

const page = (props: any) => {

    let { all_products } = useContext(ShopeProviderContext);
    let product = all_products.find((e: any) => e._id == props.params.Product);

    return (
        <div className='container mx-auto'>
            <div className='px-5'>
                <Breadcrums product={product && product} />
                <ProductDispaly product={product && product} idProducts={props.params.Product} />
                <DiscriptionBox />
                <RelatedProducts idProducts={props.params.Product} />
            </div>
        </div>
    )
}

export default withAuth(page)
