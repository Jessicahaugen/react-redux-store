import React from 'react'
import {useSelector} from 'react-redux'



export default function IndividualProducts({match}) {
    const Id =match.params.id;
    const productInfo= useSelector(state => state.productReducer)
    const productDisplay = productInfo.filter(product => (product.id === Id))
   
    return (
        <div>
            <h1>single products</h1>
            <div className="product Container">
            <h1>{productDisplay[0].title}</h1>
            <img src={productDisplay[0].img} alt="coffeeimg" height="300" width="250"/>
            <h3>{productDisplay[0].info}</h3>
            <h1>{productDisplay[0].price}</h1>
        </div>
         
        </div>
    )
}
