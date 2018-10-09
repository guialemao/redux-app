import React from 'react';
import styled from 'styled-components';
import Menu from '../../containers/Menu';

const HeaderWrapper = styled.header`
  height: 51px;
  background-color: #fff;
  border-bottom: 2px solid #000;
`;

const Header = () => (
  <HeaderWrapper>
    <Menu />
  </HeaderWrapper>
);

export default Header;
