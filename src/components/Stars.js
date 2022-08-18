import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({stars,reviews}) => {
  let times =[]
  for (let i=1;i<stars;i++){
    times.push(i)
  }
  let remaining = []
  for (let i = Math.ceil(stars); i< 5;i++){
    remaining.push(i)
  }
  console.log(times)
  
  return <Wrapper>
          <div className='stars'>
            {times.map((stars)=><span><BsStarFill/></span>)}
            {stars%1 !=0 && <span><BsStarHalf/></span>}
            {5-Math.ceil(times.length) > 1 && remaining.map((empty)=><span><BsStar/></span>)}
          </div>
            {reviews && <p className='reviews'>{`(${reviews} customer reviews)`}</p>}
    
    </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
