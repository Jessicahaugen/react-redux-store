
const initialState=[
    {
        title:"Columbian Medium Roast",
        img:"url",
        info:"",
        price:"",
        key:"1",

    },
    {
        title:"Ethiopian Dark Roast",
        img:"url",
        info:"",
        price:"",
        key:"2",
        
    },
    {
        title:"Panama Medium Roast",
        img:"url",
        info:"",
        price:"",
        key:"3",
    
    },   

]

function productReducer(state = initialState, action) {
    switch (action.type) {
      case "PRODUCTDISPLAY":
        return (state = action.payload);
    
      default:
        return state;
    }
  }
export default productReducer