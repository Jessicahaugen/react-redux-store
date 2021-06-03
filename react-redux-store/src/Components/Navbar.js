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
          <Route exact path ="/">
            <Landing />
          </Route>
          
          <Route path ="/Products/">
            <ProductsPage />
          </Route>
          <Route path="/Products/:id">
            <IndividualProducts />
          </Route>

          <Route path ="/AboutUs">
            <AboutUs />
          </Route>
          <Route path="/Cart">
              <Cart />
          </Route>
        </Switch>
      </Router>
            
        
    )
}

   
