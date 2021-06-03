import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'


export default function ProductsPage() {
    // const useDispatch = useDispatch()
    const displayAllProducts = useSelector(state => state.productReducer)
    return (
        <div>
            <h1>Coffee Shop</h1>
                {displayAllProducts.map(products => (
                    <div>
                    <h1>{products.title}</h1>
                    <img src={products.img} alt="coffeeimg" height="300" width="250"/>
                    <h3>{products.info}</h3>
                    <h1>{products.price}</h1>
                    <Link path="/Products/:{products.key}"> More Info</Link>
                    <button>Add to Cart</button>
                    </div>
                ))
                };
                
           
        </div>
    )
}
