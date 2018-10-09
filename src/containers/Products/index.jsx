import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullProduct from './FullProduct';
import { Wrapper } from '../../components/styles';

const Products = () => (
  <Wrapper>
    <h1>Products Page</h1>
    <Switch>
      <Route exact path='/products' component={FullProduct}/>
    </Switch>
  </Wrapper>
);

export default Products;
