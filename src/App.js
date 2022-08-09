import React from 'react'
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {HomePage,AboutPage,ProductsPage,ErrorPage,CartPage,SingleProductPage} from './pages'

function App() {
  return <Router>
            <Navbar/>
            <Sidebar/>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='about' element={<AboutPage/>}/>
              <Route path='products' element={<ProductsPage/>}>
              </Route>
              <Route path='/products/:id' element={<SingleProductPage/>}/>
              <Route path='cart' element={<CartPage/>}/>
              <Route path='*' element={<ErrorPage/>}/>

            </Routes>
            <Footer/>
  </Router>
}

export default App
