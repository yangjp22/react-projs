import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css'

import Navbar from './compoents/NavBar.js'
import ProductList from './compoents/ProductList.js'
import Details from './compoents/Details.js'
import Cart from './compoents/Cart/Cart.js'
import Default from './compoents/Default.js'
import Modal from './compoents/Modal.js'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
