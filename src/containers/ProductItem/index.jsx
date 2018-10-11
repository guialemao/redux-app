import React from 'react';
import styled from 'styled-components';
import { Card } from '../../components/styles';
import products from '../../data/products';
import { connect } from 'react-redux';

const ListContent = styled.li`
  width: 30%;
  margin-bottom: 35px;
`;

const mapStateToProps = state => {
  return { purchase: state.purchase };
};

const ProductItem = ({ purchase }) => {
  const item = products.map((product, id) => {
    return (
      <ListContent key={id}>
        <Card>
          <a href="#/">
            <img src={product.post_url} alt=""/>
            <div className="body-card">
              <span><strong>Product: </strong>{product.filename}</span>
              <span><strong>Price: </strong>U${product.height}</span>
              <span><strong>Design by: </strong>{product.author}</span>
            </div>
            <button>buy</button>
          </a>
        </Card>
      </ListContent>
    );
  })

  return item;
};

export default connect(mapStateToProps)(ProductItem);
