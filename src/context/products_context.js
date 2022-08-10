import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'
import products_reducer from '../reducers/products_reducer'

const initialState = {isSidebarOpen:false,products_loading:false,products_error:false,products:[],featured:[],}


const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialState)
  const openSidebar = ()=>{
    dispatch({type:SIDEBAR_OPEN})
  }
  const closeSidebar = () =>{
    dispatch({type:SIDEBAR_CLOSE})
  }

  const fetchProducts =async()=>{
    try {
      dispatch({type:GET_PRODUCTS_BEGIN})
      const response = await axios(url)
      const products = await response.data
      console.log(products)
      const featuredProducts  = products.filter((product)=>product.featured)
      console.log(featuredProducts)
      if(products){
        dispatch({type:GET_PRODUCTS_SUCCESS,payLoad:products})
        
      }
      
    } catch (error) {
      dispatch({type:GET_PRODUCTS_ERROR})
    }
    
    
  } 
  useEffect(()=>{fetchProducts()},[])
  // if (state = SIDEBAR_CLOSE){
  //   dispatch({type:SIDEBAR_CLOSE})
  // }
  return (
    <ProductsContext.Provider value={{...state,openSidebar,closeSidebar}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
