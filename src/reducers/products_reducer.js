import { FaClosedCaptioning } from 'react-icons/fa'
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

const products_reducer = (state, action) => {
  if (action.type == SIDEBAR_OPEN){
    return {...state,isSidebarOpen:true}
  }
  if (action.type == SIDEBAR_CLOSE){
    return {...state,isSidebarOpen:false}
  }
  if(action.type == GET_PRODUCTS_BEGIN){
    return {...state,products_loading:true}
  }
  if(action.type === GET_PRODUCTS_SUCCESS){

    return {...state,products_loading:false,products:action.payLoad,featured:action.payLoad.filter((item)=>item.featured)}  
  }
  
  if(action.type === GET_PRODUCTS_ERROR){
    return {...state,products_loading:false,products_error:true}
  }
  if(action.type=== GET_SINGLE_PRODUCT_BEGIN){
    return {...state,singleProduct_loading:true,singleProduct_error:false}
  }
  if(action.type === GET_SINGLE_PRODUCT_SUCCESS){
    // const displayProduct = products.filter((product)=>product.id === action.payLoad)
    // console.log(displayProduct)
    return{...state,singleProduct_loading:false,singleProduct:action.payLoad}
  }
  if(action.type === GET_SINGLE_PRODUCT_ERROR){
    return{...state, singleProduct_error:true}
  }

  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
