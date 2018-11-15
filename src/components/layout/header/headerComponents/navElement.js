import React from 'react';
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux';

const navElement =(props)=>{
    const NavItem = styled.li`
        text-decoration:none;
        

        `;
    
    const NavLinkStyles = styled(NavLink)`
        color: ${props.themeColors.colorPrimar};
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
            border-bottom-color:${props.themeColors.colorPrimar};
            background-color: ${props.themeColors.colorSecondary};
          }
        `
    return (
        <NavItem>
            <NavLinkStyles 
           activeStyle={{
            borderBottomColor: props.themeColors.colorPrimar,
            backgroundColor: props.themeColors.colorSecondary
          }}
            to={props.link}>
                {props.children}
            </NavLinkStyles>
        </NavItem>
    );
}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
    }
  }
export default connect(mapStateToProps)(navElement);