"use client"

import { useContext } from "react";
import withAuth from "@/util/PrivateRouter";
import { ShopeProviderContext } from "@/context/ShopeContext";

import Spinner from "@/components/Spinner/Spinner";
import CardItem from "@/components/CardItem/CardItem";

const page = () => {
    let { all_products, cardItems, RemoveCardItems, gettotalPriceProducts, cookies } = useContext(ShopeProviderContext);

    return (
      <>
        {all_products ? (
          <CardItem
            all_products={all_products}
            cardItems={cardItems}
            RemoveCardItems={RemoveCardItems}
            gettotalPriceProducts={gettotalPriceProducts}
            cookies={cookies}
          />
        ) : (
          <div className='col-span-12 flex justify-center items-center h-screen'>
            <Spinner />
          </div>
        )}
      </>
    );
};

export default withAuth(page)
