import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if(action.type === LOAD_PRODUCTS){
    let maxPrice = action.payLoad.map((product)=>product.price)
    maxPrice = Math.max(...maxPrice)
    console.log(maxPrice)
    return {...state,all_products:[...action.payLoad],filtered_products:[...action.payLoad],filters:{...state.filters,max_price:maxPrice,price:maxPrice}
  }}
  if(action.type === SET_LISTVIEW){
    return {...state,view:false}
  }
  if(action.type === SET_GRIDVIEW){
    return {...state,view:true}
  }
  if(action.type === UPDATE_SORT){
    return {...state,sort:action.payLoad}
  }
  if(action.type === SORT_PRODUCTS){
    let sorted =[...state.filtered_products]
    if(state.sort === 'price-lowest'){
    sorted = state.filtered_products.sort((a,b)=> a.price-b.price)
    }
    if(state.sort === 'price-highest'){
      sorted = state.filtered_products.sort((a,b)=> b.price-a.price)
    }
    if(state.sort === 'name (a-z)'){
      sorted = state.filtered_products.sort((a,b)=> {return a.name.localeCompare(b.name)})
    }
    if(state.sort === 'name (z-a)'){
      sorted = state.filtered_products.sort((a,b)=> {return b.name.localeCompare(a.name)})
    }
    return {...state,filtered_products:sorted}
  }
  if (action.type === UPDATE_FILTERS){
    const {name,value} = action.payLoad
    return {...state,filters:{...state.filters,[name]:value}}
  }
  if (action.type === FILTER_PRODUCTS){
    
    console.log('filtered products')
    console.log(state.filters)
  }
  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
