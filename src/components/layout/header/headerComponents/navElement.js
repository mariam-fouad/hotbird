import React from 'react';
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
const navElement =(props)=>{
    const NavItem = styled.li`
        text-decoration:none;
        padding: 1rem;
        float: left;

        `;
    
    const NavLinkStyles = styled(NavLink)`
        display: block;
        color: black;
        font-size:0.7rem;
        font-weight:900;
        text-align: center;
        text-decoration: none;
        `
    return (
        <NavItem>
            <NavLinkStyles to={props.link} >{props.children}</NavLinkStyles>
        </NavItem>
    );
}

export default navElement;