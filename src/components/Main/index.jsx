import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../containers/Home';
import Products from '../../containers/Products';
import Contact from '../../containers/Contact';
import Cart from '../../containers/Cart';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/products' component={Products} />
      <Route path='/contact' component={Contact} />
      <Route path='/cart' component={Cart} />
    </Switch>
  </main>
);

export default Main;

