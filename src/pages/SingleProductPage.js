import React, { useEffect } from 'react'
import { useParams, useHistory,useNavigate } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SingleProductPage = () => {
  const {id} = useParams()
  const{singleProduct_error:error,singlePorduct_loading:loading,singleProduct,fetchSingleProduct}=useProductsContext()
  const navigate = useNavigate()
  console.log(singleProduct)
  const {category,colors,company,description,images,name,price,stock,stars,reviews} = singleProduct
  
  // let image 
  // if(images){
  //   image = images[0]
  // }
  // console.log(image)
  
  
  useEffect(()=>{fetchSingleProduct(`${url}${id}`)},[loading])

  useEffect(()=>{
    if(error){
      setTimeout(()=>{
        navigate('/')
        },3000)}
      },[error])
  if(loading){
    return <Loading/>;
  }

  return <Wrapper>
    <PageHero title = {<Link to='/products'>products / </Link>+`/${name}`}/>
    <div className='section section-center'>
      <Link to='/products' className='btn'>back to products</Link>
      <div className='product-center'>
        <ProductImages images = {images}/>
        <section className='content'>
          <h2>{name}</h2>
          <Stars stars={stars}reviews={reviews}/>
          <h5>{formatPrice(price)}</h5>
          <p className='desc'>{description}</p>
          {stock && <p className='info'><span>available : </span>In stock</p>}
          <p className='info'><span>SKU : </span>{id}</p>
          <p className='info'><span>brand : </span>{company}</p>
          <hr></hr>
          {stock >0 && <AddToCart product={singleProduct}/>}

        </section>
      </div>
    </div>

  </Wrapper>
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
