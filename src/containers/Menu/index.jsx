import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../components/styles';
import { Link } from 'react-router-dom';
// import cart from '../../assets/cart.svg';

const MenuContainer = styled.div`
  height: 51px;
  color: #000;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  a {
    padding: 0 10px;
    display: inline-block;
    overflow: hidden;
    color: #000;
    font-weight: bold;
    line-height: 24px;
    text-decoration: none;
    transition: 0.2s ease;
    border: 1px solid transparent;
    background-color: transparent;

    &:hover {
      color: #fff;
      transition: 0.3s ease;
      border: 1px solid transparent;
      background-color: #8C8C8C;
    }
  }
`;

const Menu = () => {
  return (
    <Wrapper>
      <MenuContainer>
        <Link className="lnk-effect" to="/">Home</Link>
        <Link className="lnk-effect" to="/products">Products</Link>
        <Link className="lnk-effect" to="contact">Contact</Link>
        {/* <a href="./"><img src={cart} alt=""/></a> */}
      </MenuContainer>
    </Wrapper>
  );
}

export default Menu;
