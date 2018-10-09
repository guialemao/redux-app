import React from 'react';
import ProductItem from '../ProductItem';
import { List } from '../../components/styles';

const FullProduct = () => (
  <div>
    <h2>Roster Product</h2>
    <List column="row" width="100%">
      <ProductItem />
    </List>
  </div>
);

export default FullProduct;
