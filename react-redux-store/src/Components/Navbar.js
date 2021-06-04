// import React from 'react';
import ProductsPage from './ProductsPage';
import AboutUs from './AboutUs'
import Cart from './Cart';
import IndividualProducts from './IndividualProducts';
import LandingPage from './LandingPage';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {FaShoppingBasket} from 'react-icons/fa';




export default function Navbar() {
    return (
        <Router>
        <div>
            <nav className="nav" color="transparent" >
              <div>
                <Link to="/" className="linkDecor">Home</Link>
             </div>
             <div>
             <Link to="/Products" className="linkDecor">Coffee</Link>
             </div>
             <div>
             <h1>Cleo's Coffee</h1>
             </div>
             <div>
             <Link to="/AboutUs" className="linkDecor">About</Link>
             </div>
             <div>
             <Link to="/Cart" className="linkDecor"><FaShoppingBasket/></Link>
             </div>
            </nav>
          </div>
        <Switch>
          <Route exact path ="/" component={LandingPage}></Route>
          
          <Route path ="/Products" component={ProductsPage}></Route>
        
          <Route path="/IndividualProducts/:id" component={IndividualProducts}></Route>
          
          <Route path ="/AboutUs" component={AboutUs}></Route>
         
          <Route path="/Cart" component={Cart} ></Route>
          
        </Switch>
      </Router>
            
        
    )
}

   
