"use client"

import { useContext } from "react"
import CardItem from "@/components/CardItem/CardItem"
import { ShopeProviderContext } from "@/context/ShopeContext"
import withAuth from "@/util/PrivateRouter"
import Spinner from "@/components/Spinner/Spinner"

const page = () => {

    let {
        all_products,
        cardItems,
        RemoveCardItems,
        gettotalPriceProducts,
    } = useContext(ShopeProviderContext);

    return (
        <div>
            {all_products
                ?
                <CardItem
                    all_products={all_products}
                    cardItems={cardItems}
                    RemoveCardItems={RemoveCardItems}
                    gettotalPriceProducts={gettotalPriceProducts}
                />
                :
                <div className='col-span-12 flex justify-center items-center h-screen'>
                    <Spinner />
                </div>
            }
        </div>
    )
}

export default withAuth(page)
