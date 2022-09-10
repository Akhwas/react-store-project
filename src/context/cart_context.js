import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

const getLocatStorage = () =>{
  let cart = localStorage.getItem('cart')
  if (cart){
    return JSON.parse(localStorage.getItem('cart'))
  }
  else{
    return []
  }

}

const initialState = 
{
  cart:getLocatStorage(),
  total_items:0,
  total_amount:0,
  shipping_fee: 534
}

const CartContext = React.createContext()


export const CartProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialState)
  const addToCart = (id,value,amount,product) =>{
    dispatch({type:ADD_TO_CART,payload:{id,value,amount,product}})
  
  }
  
  // remove item
  const removeItem = (id)=>{
    dispatch({type:REMOVE_CART_ITEM,payload:id})
  }
  // toggle cart
  const toggleAmount = (id,value)=>{
    dispatch({type:TOGGLE_CART_ITEM_AMOUNT,payload:{id,value}})   
 }
  // clear cart
  const clearCart = () =>{
    dispatch({type:CLEAR_CART})
  }
  useEffect(()=>{
  dispatch({type:COUNT_CART_TOTALS});
  localStorage.setItem('cart',JSON.stringify(state.cart))},
  [state.cart])
 
  return (
    <CartContext.Provider value={{...state,addToCart,clearCart,removeItem,toggleAmount}}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
