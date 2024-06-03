"use client"

import { useContext } from "react"
import CardItem from "@/components/CardItem/CardItem"
import { ShopeProviderContext } from "@/context/ShopeContext"
import withAuth from "@/util/PrivateRouter"

const page = () => {

    let {
        all_products,
        cardItems,
        RemoveCardItems,
        gettotalPriceProducts,
    } = useContext(ShopeProviderContext);

    return (
        <div>
            <CardItem
                all_products={all_products}
                cardItems={cardItems}
                RemoveCardItems={RemoveCardItems}
                gettotalPriceProducts={gettotalPriceProducts}
            />
        </div>
    )
}

export default withAuth(page)
