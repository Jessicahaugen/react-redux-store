import React from 'react'
import {useSelector} from 'react-redux'

export default function Cart() {
    const products = useSelector(state => state.cartReducer)
    console.log(products)
    return (
        <div>
            <h1>Cafe Checkout</h1>
            {products.map(products => (
                    <div>
                    <h1>{products.title}</h1>
                    <img src={products.img} alt="coffeeimg" height="300" width="250"/>
                    <h1>{products.price}</h1>
                    </div>
                ))
            };
        
        </div>
    )
}
