// import React from 'react';
import ProductsPage from './ProductsPage';
import AboutUs from './AboutUs'
import Landing from './LandingPage';
import Cart from './Cart';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import IndividualProducts from './IndividualProducts';



export default function Navbar() {
    return (
        <Router>
        <div>
            <nav>
             <Link to="/">Home</Link>
             <Link to="/Products">Shop</Link>
             <Link to="/AboutUs">About Us</Link>
             <Link to="/Cart"><img src="react-redux-store/src/shopping-cart-solid.svg"/></Link>
          </nav>
          </div>
        <Switch>
          <Route exact path ="/" components={Landing}></Route>
          
          <Route path ="/Products/" component={ProductsPage}></Route>
        
          <Route path="/IndividualProducts/:id" component={IndividualProducts}></Route>
          
          <Route path ="/AboutUs" component={AboutUs}></Route>
         
          <Route path="/Cart" component={Cart} ></Route>
          
        </Switch>
      </Router>
            
        
    )
}

   
