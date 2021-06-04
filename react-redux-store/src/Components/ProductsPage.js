import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCart } from '../Actions/cartActions'
import Footer from './Footer'




export default function ProductsPage() {
    
    const displayAllProducts = useSelector(state => state.productReducer)
    const dispatch = useDispatch();

    return (
            
        <div className="allProducts">
                {displayAllProducts.map(products => (
                    <div className ="cardContainer">
                    <img src={products.img} alt="coffeeimg" height="300" width="250"/>
                    <div className="bottomCard">
                        <div className = "titlePrice">
                            <h1>{products.title}</h1> 
                            <h1>{products.price}</h1>
                        </div>
                        <div className="viewMoreCart">
                            <Link to={`/IndividualProducts/${products.id}`} > Sip on more info</Link>
                            <button className="cartButton" onClick={() => addToCart(dispatch, products)}>Add To Cart</button>
                        </div>
                    </div>
                    
                    
                    </div>
                ))
                }
              
             
        </div>
       
    )
}
