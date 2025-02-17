"use client"

import withAuthandRole from "@/util/PrivateRouterAdmin"
import ListProductsItem from "@/components/ListProductsItem/ListProductsItem"

const page = () => {
  return <ListProductsItem />
}

export default withAuthandRole(page)
