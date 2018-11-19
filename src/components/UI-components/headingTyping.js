import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components'


const headingTyping = (props)=>{

    const Heading1 = styled.h1`
    background-color:#ffffffa3;
    color:${props.themeColors.colorPrimar};
    display: inline-block;
    position: absolute;
    top: 5rem;
    left: 7rem;
    font-size: 2rem;
    padding: 0.5rem 1rem;
}

    `;

    return (
        <Heading1>
        {props.mainHeading}
        <span>{props.typing[0]}</span>
        </Heading1>
        
    );
}

const mapStateToProps = state=>{
    return {
        themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
    }
  }
export default connect(mapStateToProps)(headingTyping);