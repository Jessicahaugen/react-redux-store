import React from 'react'
import {useSelector} from 'react-redux'
import Footer from './Footer'

export default function Cart() {
    const products = useSelector(state => state.cartReducer)
    console.log(products)
    return (
        <div className="cart">
            <h1>Cafe Checkout</h1>
            {products.map(products => (
                    <div className="cardContainer">
                      
                            <img src={products.img} alt="coffeeimg" height="300" width="250"/>
                            {/* <div className="bottomCard"> */}
                                <h1>{products.title}</h1>
                                <h1>{products.price}</h1>
                      
                        {/* </div> */}
                    </div>
                ))
            }
            <Footer />
        </div>
    )
}
