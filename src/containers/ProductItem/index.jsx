import React from 'react';
import styled from 'styled-components';
import { Card } from '../../components/styles';

const ListContent = styled.li`
  width: 30%;
  margin-bottom: 35px;
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
    post_url: "https://via.placeholder.com/350x150",
    },
    {
    format: "jpeg",
    width: 5616,
    height: 3744,
    filename: "0001_LNRyGwIJr5c.jpeg",
    id: 1,
    author: "Alejandro Escamilla",
    author_url: "https://unsplash.com/@alejandroescamilla",
    post_url: "https://via.placeholder.com/350x150"
    },
    {
    format: "jpeg",
    width: 5616,
    height: 3744,
    filename: "0002_N7XodRrbzS0.jpeg",
    id: 2,
    author: "Alejandro Escamilla",
    author_url: "https://unsplash.com/@alejandroescamilla",
    post_url: "https://via.placeholder.com/350x150"
    },
    {
    format: "jpeg",
    width: 5616,
    height: 3744,
    filename: "0003_Dl6jeyfihLk.jpeg",
    id: 3,
    author: "Alejandro Escamilla",
    author_url: "https://unsplash.com/@alejandroescamilla",
    post_url: "https://via.placeholder.com/350x150"
    },
    {
      format: "jpeg",
      width: 5616,
      height: 3744,
      filename: "0003_Dl6jeyfihLk.jpeg",
      id: 3,
      author: "Alejandro Escamilla",
      author_url: "https://unsplash.com/@alejandroescamilla",
      post_url: "https://via.placeholder.com/350x150"
    },
    {
      format: "jpeg",
      width: 5616,
      height: 3744,
      filename: "0003_Dl6jeyfihLk.jpeg",
      id: 3,
      author: "Alejandro Escamilla",
      author_url: "https://unsplash.com/@alejandroescamilla",
      post_url: "https://via.placeholder.com/350x150"
    },
    {
      format: "jpeg",
      width: 5616,
      height: 3744,
      filename: "0003_Dl6jeyfihLk.jpeg",
      id: 3,
      author: "Alejandro Escamilla",
      author_url: "https://unsplash.com/@alejandroescamilla",
      post_url: "https://via.placeholder.com/350x150"
    },
    {
      format: "jpeg",
      width: 5616,
      height: 3744,
      filename: "0003_Dl6jeyfihLk.jpeg",
      id: 3,
      author: "Alejandro Escamilla",
      author_url: "https://unsplash.com/@alejandroescamilla",
      post_url: "https://via.placeholder.com/350x150"
    },
    {
      format: "jpeg",
      width: 5616,
      height: 3744,
      filename: "0003_Dl6jeyfihLk.jpeg",
      id: 3,
      author: "Alejandro Escamilla",
      author_url: "https://unsplash.com/@alejandroescamilla",
      post_url: "https://via.placeholder.com/350x150"
    },
    {
      format: "jpeg",
      width: 5616,
      height: 3744,
      filename: "0003_Dl6jeyfihLk.jpeg",
      id: 3,
      author: "Alejandro Escamilla",
      author_url: "https://unsplash.com/@alejandroescamilla",
      post_url: "https://via.placeholder.com/350x150"
    },
    {
      format: "jpeg",
      width: 5616,
      height: 3744,
      filename: "0003_Dl6jeyfihLk.jpeg",
      id: 3,
      author: "Alejandro Escamilla",
      author_url: "https://unsplash.com/@alejandroescamilla",
      post_url: "https://via.placeholder.com/350x150"
    },
    {
      format: "jpeg",
      width: 5616,
      height: 3744,
      filename: "0003_Dl6jeyfihLk.jpeg",
      id: 3,
      author: "Alejandro Escamilla",
      author_url: "https://unsplash.com/@alejandroescamilla",
      post_url: "https://via.placeholder.com/350x150"
    },
  ];

  const item = products.map((product, id) => {
    return (
      <ListContent key={id}>
        <Card>
          <img src={product.post_url} alt=""/>
          <div className="body-card">
            <span><strong>Product: </strong>{product.filename}</span>
            <span><strong>Price: </strong>U${product.height}</span>
            <span><strong>Design by: </strong>{product.author}</span>
          </div>
          <button>buy</button>
        </Card>
      </ListContent>
    );
  })

  return item;
};

export default ProductItem;
