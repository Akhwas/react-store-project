import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
import {AuthWrapper} from './pages/AuthWrapper'
require ('dotenv').config()

// dev-j3act87l.us.auth0.com
// Ts7wbqxLb0sldX1iqPvhXv4Dpo8qO7Vb
// const {REACT_APP_DOMAIN,REACT_APP_CLIENTID} = process.env()
ReactDOM.render(
    <Auth0Provider
        domain = {process.env.REACT_APP_DOMAIN}
        clientId = {process.env.REACT_APP_CLIENTID}
        redirectUri = {window.location.origin}
        cacheLocation = 'localstorage'
        >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>
, document.getElementById('root'))
