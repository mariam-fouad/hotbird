import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

import NavElement from './navElement';
const nav =(props)=>{
    const Nav = styled.nav`
    
        `;
    
    const List = styled.ul`
        list-style: none;
        overflow: hidden;
        display: flex;
        @media (max-width:575px){
            display:none;
        }
        `;
    
    const CheckNav = styled.input`
        display:none;
        
        @media (max-width:575px){
            &:checked ~ div {
                z-index:150;
                background-color: ${props.themeColors.colorPrimary};
                width:60vw;
                height:100vh;
                display:inline-block;
                position:fixed;
                top:0;
                right:0;
                opacity: 1;
             }
     
             &:checked ~ label span {
                 background-color: transparent;
                 &::before{
                     transform:rotate(45deg);
                     top: 0;
                 }
                 &::after{
                     transform:rotate(-45deg);
                     top: 0;
                 }
             }

             &:checked ~ ul{
                margin-top:5rem;
                z-index:300;
                display: flex;
                flex-direction:column;
                position:fixed;
                top:0;
                right:0;
             }
        }
        

    `;
    const Label =styled.label`
    @media (max-width:575px){
        z-index:200;
        background-color: ${props.themeColors.colorPrimary};
        width: 2.5rem;
        height: 2.5rem;
        border-radius: .3rem;
        text-align: center;
        cursor: pointer;
        display:block;
        margin-right:2.5rem;
        position: relative;
    }
    `;

    const Span = styled.span`
    @media (max-width:575px){
        z-index:200;
        position: absolute;
        width: 1.5rem;
        height: 2px;
        background-color: ${props.themeColors.colorSecondary};
        display: inline-block;
        transition: all 0.2s;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        transition: all 0.5s

        
        ::before,
        ::after{
            width: 1.5rem;
            height: 2px;
            background-color: ${props.themeColors.colorSecondary};
            display: inline-block;
            transition: all 0.2s;
            transition: all 0.4s

        }

        ::before,
        ::after{
            content: "";
            position: absolute;
            left: 0;
            
        }

        ::before{top:0.5rem;}
        ::after{top:-0.5rem;}
    }
    `;

    const BackGround = styled.div`
      opacity: 0;
      transition: all 0.3s ease;
    `;

    return (
        <Nav>
            <CheckNav type='checkbox' id="nav-checkbox"/>
            <Label htmlFor="nav-checkbox"> <Span/> </Label>
            <BackGround/>
            <List>
                <NavElement link="/hotels">Hotels</NavElement>
                <NavElement link="/hotels-activities">Hotels activities</NavElement>
                <NavElement link="/ratings">You're Rating</NavElement>
                <NavElement link="/wishlist">You're Wishlist</NavElement>
                <NavElement link="/theme">Theme</NavElement>
            </List>
        </Nav>
    );
}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
    }
  }
export default connect(mapStateToProps)(nav);