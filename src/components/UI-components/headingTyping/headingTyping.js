import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components'
import Typing from 'react-typing-animation';

import "./headingTyping.css";

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

    let typedHeading =[];
    for (let i=0;i<props.typing.length;i++){
        if (i!== props.typing.length-1 ){
            typedHeading.push(
                <Typing key={i} className="heading-Typing">
                    <Typing.Speed ms={100} />
                    <span>{props.typing[i]}</span>
                    <Typing.Backspace delay={500}/>
                    <Typing.Reset count={1} delay={2500} />
               </Typing> 
            );
        }
        else{
            typedHeading.push( 
                <Typing key={i} className="heading-Typing">
                    <Typing.Speed ms={100} />
                    <Typing.Delay ms={2500} />
                    <span>{props.typing[i]}</span>
                </Typing> );
        }
    }

    return (
        <Heading1>
                <span>{props.mainHeading}</span>
                {typedHeading}
        </Heading1>
        
    );
}

const mapStateToProps = state=>{
    return {
        themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
    }
  }
export default connect(mapStateToProps)(headingTyping);