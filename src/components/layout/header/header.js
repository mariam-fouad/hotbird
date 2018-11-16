import React from 'react';
import styled, { css } from 'styled-components'
import {connect} from 'react-redux';

import Nav from './headerComponents/nav';
import Logo from './headerComponents/logo';
const header =(props)=>{

    const Header = styled.header`
        background-color:${props.themeColors.colorSecondaryTrans}; 
        height:3rem;
        display:flex;
        position:fixed;
        top:0;
        left:0;
        right: 0;
        z-index:100;
        justify-content: space-between;
        align-items: center;

        @media only screen and (max-width :575px){
             
        }

    `;

    return(
        <Header>
            <Logo/>
            <Nav/>
        </Header>
        
    )
}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
    }
  }
export default connect(mapStateToProps)(header);