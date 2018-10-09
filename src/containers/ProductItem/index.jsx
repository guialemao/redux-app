import React from 'react';
import styled from 'styled-components';

const ListContent = styled.li`
  margin-left: 10px;
  &:first-child {
    margin-left: 0;
  }
`;

const ProductItem = () => {
  const products = [
    {
      id: 1,
      name: 'xpto'
    },
    {
      id: 2,
      name: 'xpto2'
    },
    {
      id: 3,
      name: 'xpto3'
    },
  ];

  const item = products.map((product, id) => {
    return (
      <ListContent key={id}>
        <a href="/#">
          {product.id}
          {product.name}
        </a>
      </ListContent>
    );
  })

  return item;
};

export default ProductItem;
