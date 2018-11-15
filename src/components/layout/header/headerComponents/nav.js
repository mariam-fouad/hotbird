import React from 'react';
import styled, { css } from 'styled-components'

import NavElement from './navElement';
const nav =()=>{
    const Nav = styled.nav`
    
        `;
    
    const List = styled.ul`
        list-style: none;
        overflow: hidden;
        display: flex;
        `;
    return (
        <Nav>
            <List>
                <NavElement link="/hotels">Hotels</NavElement>
                <NavElement link="/hotels-activities">Hotels activities</NavElement>
                <NavElement link="/ratings">You're Rating</NavElement>
                <NavElement link="/wishlist">You're Wishlist</NavElement>
                <NavElement link="/Theme">Theme</NavElement>
            </List>
        </Nav>
    );
}

export default nav;