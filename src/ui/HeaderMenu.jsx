import styled from 'styled-components';
import Logout from '../features/authentication/Logout';
import React from 'react';

const StyleHeaderMenu = styled.ul`
    display: flex;
    gap: 0.4rem;
`;

const HeaderMenu = () => {
  return (
    <StyleHeaderMenu>
        <li>
            <Logout/>
        </li>
    </StyleHeaderMenu>
   ); 
}

export default HeaderMenu;