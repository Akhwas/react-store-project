import React, { useState } from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'

const ProductImages = ({images=[]}) => {
  // const {singleProduct} = useProductsContext()
  console.log(images[0])
  const [main, setMain] = useState(images[0])
  // if(images){
    // setMain(images[0])
  // }
  console.log(main)
  // console.log(images[0].url)
  
  return <Wrapper>
    {/* <p>ra7metak ya rab</p> */}
    {/* <img src={images[0].url} className='main'></img> */}
  </Wrapper>
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
