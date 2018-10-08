import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../components/styles';

const MenuContainer = styled.div`
  height: 51px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  a {
    margin-left: 15px;
    color: #fff;
    text-decoration: none;

    &:first-child {
      margin-left: 0;
    }
  }
`;

const Menu = () => {
  return (
    <Wrapper>
      <MenuContainer>
        <a href="./">Home</a>
        <a href="./">About</a>
        <a href="./">Contact</a>
      </MenuContainer>
    </Wrapper>
  );
}

export default Menu;
