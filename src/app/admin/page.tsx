"use client"
import React from 'react'

import AddProductsItem from '@/components/AddProductsItem/AddProductsItem'
import withAuthandRole from '@/util/PrivateRouterAdmin'

const page = () => {
  return (
    <div>
      <AddProductsItem />
    </div>
  )
}

export default withAuthandRole(page)
