"use client"
import AddProductsItem from '@/components/AddProductsItem/AddProductsItem'
import withAuthandRole from '@/util/PrivateRouterAdmin'
import React from 'react'

const page = () => {
  return (
    <div>
      <AddProductsItem />
    </div>
  )
}

export default withAuthandRole(page)
