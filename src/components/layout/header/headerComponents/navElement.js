import React from 'react';
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
const navElement =(props)=>{
    const NavItem = styled.li`
        text-decoration:none;
        

        `;
    
    const NavLinkStyles = styled(NavLink)`
        color: black;
        font-size:0.7rem;
        font-weight:900;
        text-align: center;
        text-decoration: none;
        padding: 1rem;
        padding-bottom: 1.25rem;
        border-bottom: .1rem solid transparent;
        float: left;
        display: block;
        transition: all 0.4s

        :hover {
            border-bottom-color:  red;
            background-color: #e3e3e3;
          }
        `
    return (
        <NavItem>
            <NavLinkStyles 
           activeStyle={{
            borderBottomColor:  'red',
            backgroundColor: '#e3e3e3'
          }}
            to={props.link}>
                {props.children}
            </NavLinkStyles>
        </NavItem>
    );
}

export default navElement;