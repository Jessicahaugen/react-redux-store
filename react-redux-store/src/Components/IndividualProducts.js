import React from 'react'
import {useSelector} from 'react-redux'



export default function IndividualProducts() {
    const Id =match.params.id;
    console.log(Id)
    const productInfo= useSelector(state => state.productReducer[`${Id}`])
    return (
        <div>
            <h1>single products</h1>
            {/* <p>{productInfo.map(product => (<p>{product.id}</p>))};
            </p> */}
         
        </div>
    )
}
