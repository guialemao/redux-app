import React from 'react';
import styled from 'styled-components';
import Menu from '../../containers/Menu';

const HeaderApp = styled.header`
  height: 51px;
  background-color: #000;
`;

const Header = () => (
  <HeaderApp>
    <Menu />
  </HeaderApp>
);

export default Header;
