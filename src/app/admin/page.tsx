"use client"
import React from "react"

import withAuthandRole from "@/util/PrivateRouterAdmin"
import AddProductsItem from "@/components/AddProductsItem/AddProductsItem"

const page = () => {
  return <AddProductsItem />
}

export default withAuthandRole(page)
