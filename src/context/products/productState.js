import { useReducer } from 'react'

import ProducContext from './productContext'
import productReducer from './productReducer'

import {FETCH_PRODUCTS, PRODUCTS_ERROR} from '../types'

const baseUrl = 'http://store-betta.herokuapp.com'
const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
const ProductState = props => {
    const initialState= {
        products: [],
        loading: false
    }

    const [state, dispatch] = useReducer(productReducer, initialState)

    const fetchProducts = async () => {
        try {
            const products = await (
                await fetch(
                  `${baseUrl}/api/products`,
                  config,
                )
              ).json();
            console.log(products, '*******')
            dispatch({
                type: FETCH_PRODUCTS,
                payload: products.data
            })
        } catch (error) {
            console.error(error)
            dispatch({
                type: PRODUCTS_ERROR,
                payload: error,
            })
        }
    }
    return (
        <ProducContext.Provider 
        value={{
            products: state.products,
            fetchProducts,
        }}
        >
            {props.children}
        </ProducContext.Provider>
    )

}
export default ProductState