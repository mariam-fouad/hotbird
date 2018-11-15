import React from 'react';
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
const navElement =(props)=>{
    const NavItem = styled.li`
        text-decoration:none;
        padding: 1rem;
        padding-bottom: 1.25rem;
        float: left;
        display: block;
        :hover {
            border-bottom: .1rem solid red;
            background-color: #e3e3e3;
          }

        `;
    
    const NavLinkStyles = styled(NavLink)`
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