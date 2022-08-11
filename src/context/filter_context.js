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

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const {products} = useProductsContext()

  const [state,dispatch] = useReducer(reducer)
  
  return (
    <FilterContext.Provider value='filter context'>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
