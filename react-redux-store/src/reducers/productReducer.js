import img1 from './chris-lynch-bj0383cEGuc-unsplash.jpg'
import img2 from './madalyn-cox-86OQkWZ-sBc-unsplash.jpg'
import img3 from './earlybird-coffee-mSjTAV7JuV4-unsplash.jpg'
const initialState=[
    {
        title:"Columbian Medium Roast",
        img:img1,
        info:"",
        price:"$17.29",
        key:"1",

    },
    {
        title:"Ethiopian Dark Roast",
        img:img2,
        info:"",
        price:"$16.53",
        key:"2",
        
    },
    {
        title:"Costa Rican Medium Roast",
        img:img3,
        info:"",
        price:"$15.79",
        key:"3",
    
    },   

]

function productReducer(state = initialState, action) {
    switch (action.type) {
      case "PRODUCTDISPLAY":
        return console.log(state);
    
      default:
        return state;
    }
  }
export default productReducer