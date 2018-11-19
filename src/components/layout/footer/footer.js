import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

const footer = (props)=>{
    const Footer = styled.footer`
        background-color: ${props.themeColors.colorPrimar};

    `;

    return (
        <Footer>
            footer
        </Footer>
    );
}
const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
    }
  }
export default connect(mapStateToProps)(footer);