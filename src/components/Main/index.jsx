import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../containers/Home';
import Products from '../../containers/Products';
import Contact from '../../containers/Contact';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/products' component={Products} />
      <Route path='/contact' component={Contact} />
    </Switch>
  </main>
);

export default Main;

