import React from 'react';
import styled from 'styled-components'
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
        transition: all 0.4s;

        :hover {
            border-bottom-color:${props.themeColors.colorPrimar};
            background-color: ${props.themeColors.colorSecondaryTrans2};
          }
          
          @media (max-width:575px){
            width:35vw;
            margin-right:1.5rem;
            color:${props.themeColors.colorSecondaryTrans};
            font-size:1rem;
            padding: 1.5rem 3rem;
            borderBottomColor: props.themeColors.colorPrimar,
          }

          @media (max-width:478px){
            width:30vw;
            margin-right:1rem;
          }

          @media (max-width:383px){
            width:25vw;
            margin-right:0.75rem;
            font-size:0.8rem;
          }


          
        `;
    
    return (
        <NavItem>
            <NavLinkStyles 
           activeStyle={{
            borderBottomColor: props.themeColors.colorPrimar,
            backgroundColor: props.themeColors.colorSecondaryTrans2,
             }}
            to={props.link}
            exact>
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