import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useProductsContext } from './products_context'
import GridView from '../components/GridView'
import { FaAllergies, FaBorderNone } from 'react-icons/fa'

// const initialState = {loadProducts:false,view:GridView,updateSort:false,sort:nameAZ,updateFilters:false,filter:all,clearFilters:true}

const intitalState = {filtered_products:[],all_products:[],view:true,sort:'price-lowest',filters:{text:'',category:'all',color:'all',company:'all',min_price:0,price:0,max_price:0,shipping:false}}
const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const {products} = useProductsContext()

  const [state,dispatch] = useReducer(reducer,intitalState)

  const selectList = () =>{
    dispatch({type:SET_LISTVIEW})
  }
  const selectGrid = () =>{
    dispatch({type:SET_GRIDVIEW})
  }

  const updateSort = (e) =>{
    const name = e.target.name
    const value = e.target.value   
    dispatch({type:UPDATE_SORT,payLoad:value})
  }

  const updateFilters = (e) =>{
    // e.preventDefault()
    // e.stopPropagation()
    let name = e.target.name
    let value = e.target.value
    if (name === 'category'){
      value = e.target.textContent
    }
    if (name === 'color'){
      
      value = e.target.dataset.color
    }
    if (name === 'price'){
      value = Number(value)
    }
    if (name === 'shipping'){
      
      value = e.target.checked
    }
   
    console.log(name,value)
    
    dispatch({type:UPDATE_FILTERS,payLoad:{name,value}})
  }

  const clearFilters = () =>{
    dispatch({type:CLEAR_FILTERS})
  }
 


 
  
  
  useEffect(()=>{dispatch({type:LOAD_PRODUCTS,payLoad:products})},[products])

  useEffect(()=>{
    dispatch({type:FILTER_PRODUCTS})
    dispatch({type:SORT_PRODUCTS})
  },[products,state.sort,state.filters])
  return (
    <FilterContext.Provider value={{...state,selectList,selectGrid,updateSort,updateFilters, clearFilters}}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
