import React from 'react'
import { useParams } from 'react-router-dom'
import { useFilterContext } from '../context/filter_context'
import { useProductsContext } from '../context/products_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {filtered_products,view} = useFilterContext()
  console.log(filtered_products)
  if(view){

    return <GridView products={filtered_products}/>
  }
  else{
    return <ListView products={filtered_products}/>
  }
}

export default ProductList
