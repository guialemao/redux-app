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
    format: "jpeg",
    width: 5616,
    height: 3744,
    filename: "0000_yC-Yzbqy7PY.jpeg",
    id: 0,
    author: "Alejandro Escamilla",
    author_url: "https://unsplash.com/@alejandroescamilla",
    post_url: "https://unsplash.com/photos/yC-Yzbqy7PY"
    },
    {
    format: "jpeg",
    width: 5616,
    height: 3744,
    filename: "0001_LNRyGwIJr5c.jpeg",
    id: 1,
    author: "Alejandro Escamilla",
    author_url: "https://unsplash.com/@alejandroescamilla",
    post_url: "https://unsplash.com/photos/LNRyGwIJr5c"
    },
    {
    format: "jpeg",
    width: 5616,
    height: 3744,
    filename: "0002_N7XodRrbzS0.jpeg",
    id: 2,
    author: "Alejandro Escamilla",
    author_url: "https://unsplash.com/@alejandroescamilla",
    post_url: "https://unsplash.com/photos/N7XodRrbzS0"
    },
    {
    format: "jpeg",
    width: 5616,
    height: 3744,
    filename: "0003_Dl6jeyfihLk.jpeg",
    id: 3,
    author: "Alejandro Escamilla",
    author_url: "https://unsplash.com/@alejandroescamilla",
    post_url: "https://unsplash.com/photos/Dl6jeyfihLk"
    },
  ];

  const item = products.map((product, id) => {
    return (
      <ListContent key={id}>
        <a href="/#">
          {product.id}
          <img width="200" src={product.post_url} alt=""/>
        </a>
      </ListContent>
    );
  })

  return item;
};

export default ProductItem;
