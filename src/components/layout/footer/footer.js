import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

const footer = (props)=>{
    const Footer = styled.footer`
        background-color: ${props.themeColors.colorPrimar};
        color:${props.themeColors.colorSecondary};
        padding: 1rem 3rem;

    `;

    const Link = styled.a`
        text-decoration: none;
        font-weight: 900;
        color:${props.themeColors.colorSecondary};
        transition: all 0.4s;
        display:inline-block;
        padding-right: 0.3rem;

        :hover{
            transform: translateY(-0.3rem) scale(1.1);
        }
    `;

    return (
        <Footer>
            Designed and Developed &copy; by <Link href="https://www.linkedin.com/in/mariam-fouad-0266b9120/">Mariam Fouad Ali</Link>
        </Footer>
    );
}
const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
    }
  }
export default connect(mapStateToProps)(footer);