import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addToCart } from '../Actions/cartActions'
import Footer from './Footer';



export default function IndividualProducts({match}) {
    
    const Id =match.params.id;
    const productInfo= useSelector(state => state.productReducer)
    const dispatch = useDispatch();
    const productDisplay = productInfo.filter(product => (product.id === Id))
   
    return (
        <div className="singleItem">
            
            <h1 className="singleTitle">{productDisplay[0].title}</h1>
            <div className="productContainer">
                {/* <div className="singleTitle">
                </div> */}
                <div className="singleImage">
                    <img src={productDisplay[0].img} alt="coffeeimg" height="300" width="250"/>
                <div className="singlePrice">
                    <h1>{productDisplay[0].price}</h1>
                    <button className="singlecartButton" onClick={() => addToCart(dispatch, productDisplay[0])}>Add To Cart</button>
                </div>
                </div>
                <div className="singleInfo">
                    <h3>{productDisplay[0].info}</h3>
                </div>
            </div>
                <Footer />
         
        </div>
    )
}
