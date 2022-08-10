import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
          <PageHero title="about"/>

          <Wrapper className='page section section-center'>
           <img src={aboutImg} alt='nice desk'></img>
           <article>
            <div className='title'>
              <h2>our story</h2>
              <div className='underline'></div>
              <p>Do ea consequat consequat cupidatat occaecat anim cupidatat in do incididunt amet eiusmod consequat. Duis id sunt velit sit labore eiusmod duis reprehenderit nostrud cupidatat mollit. Ut consectetur deserunt consectetur adipisicing. Ipsum aliqua eu non nisi consequat voluptate irure irure elit cupidatat aliquip culpa ullamco ullamco. Cillum dolor culpa et labore aute tempor id nulla irure voluptate anim. Cillum sint do ipsum consequat ea cupidatat ullamco occaecat incididunt. Laboris consectetur consequat est sunt.

              </p>
            </div>

           </article>

          </Wrapper>
          
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
