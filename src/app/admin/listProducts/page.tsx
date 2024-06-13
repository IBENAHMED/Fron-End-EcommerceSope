"use client"

import ListProductsItem from "@/components/ListProductsItem/ListProductsItem";
import withAuthandRole from "@/util/PrivateRouterAdmin";


const page = () => {

    return (
        <>
            <ListProductsItem />
        </>
    );
};

export default withAuthandRole(page)
