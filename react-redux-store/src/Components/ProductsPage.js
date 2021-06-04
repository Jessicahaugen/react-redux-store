import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCart } from '../Actions/cartActions'
import{Route} from 'react-router'



export default function ProductsPage() {
    
    const displayAllProducts = useSelector(state => state.productReducer)
    const dispatch = useDispatch();

    return (
        <div className="allProducts">
            <h1>Coffee Shop</h1>
                {displayAllProducts.map(products => (
                    <div>
                    <h1>{products.title}</h1>
                    <img src={products.img} alt="coffeeimg" height="300" width="250"/>
                    
                    <h1>{products.price}</h1>
                    <Link to={`/IndividualProducts/${products.id}`} > Sip on more info</Link>
                    
                    
                    <button onClick={() => addToCart(dispatch, products)}>Add To Cart</button>
                    
                    
                    </div>
                ))
                };
                
           
        </div>
    )
}
