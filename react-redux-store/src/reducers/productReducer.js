import img1 from './chris-lynch-bj0383cEGuc-unsplash.jpg'
import img2 from './madalyn-cox-86OQkWZ-sBc-unsplash.jpg'
import img3 from './earlybird-coffee-mSjTAV7JuV4-unsplash.jpg'
const initialState=[
    {
        title:"Columbian Medium Roast",
        img:img1,
        info:"Featuring the finest coffee grown in the historic Sierra Nevada de Santa Marta region of Colombia, this light roast coffee is well balanced, and beautifully structured with a silky smooth body. Aromatic notes of toffee and caramel burst from the cup, with rich notes of dark chocolate and cinnamon experienced with every sip",
        price:"$17.29",
        id:"1",

    },
    {
        title:"Ethiopian Dark Roast",
        img:img2,
        info:"Virtually unkown by most, and yet still considered by many to be the finest Ethiopian beans have captured our hearts in this rich and arromatic wave of perfection ",
        price:"$16.53",
        id:"2",
        
    },
    {
        title:"Costa Rican Light Roast",
        img:img3,
        info:
        "This organic single origin coffee is grown and Produced in the Alajuela region of Costa Rica. Costa Rican coffees are considered by many to be the highest quality coffee in the South/Central American Region. Alajuela, as the coffee is called, possesses the flavors of apple and apricot as well as undertones of raisin and honey",
        price:"$15.79",
        id:"3",
    
    },   

]

function productReducer(state = initialState, action) {
    switch (action.type) {
      case "PRODUCTDISPLAY":
        return state;
    
      default:
        return state;
    }
  }
export default productReducer