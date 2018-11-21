import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Typing from 'react-typing-animation';

import "./headingTyping.css";

const headingTyping = (props)=>{

    const Heading1 = styled.h1`
    background-color:#ffffffa3;
    color:${props.themeColors.colorPrimar};
    display: inline-block;
    position: absolute;
    top: 9rem;
    left: 7rem;
    font-size: 4rem;
    padding: 0.5rem 1rem;
    border-radius: 0.15rem;
    transform: rotate(0.5deg);
    transition: all 0.4s;

    :hover{
        text-shadow: 6px 2px 4px ${props.themeColors.colorSecondary};
    }

    @media (max-width :655px){
        top: 6rem;
        left: 5rem;
        font-size: 3.5rem;
    }

    @media (max-width :515px){
        top: 5rem;
        left: 3rem;
        font-size: 2.5rem;
    }

    @media (max-width :404px){
        top: 5rem;
        left: 2.5rem;
        font-size: 2rem;
    }

    @media (max-width :325px){
        top: 4rem;
        left: 2rem;
        font-size: 1.5rem;
    }
    

    `;

    let typedHeading =[];
    for (let i=0;i<props.typing.length;i++){
        if (i!== props.typing.length-1 ){
            typedHeading.push(
                <Typing key={i} className="heading-Typing">
                    <Typing.Delay ms={300} />
                    <Typing.Speed ms={100} />
                    <span>{props.typing[i]}</span>
                    <Typing.Backspace count={props.typing[i].length}/>
                    <Typing.Reset count={1} delay={500} />
               </Typing> 
            );
        }
        else{
            typedHeading.push( 
                <Typing key={i} className="heading-Typing">
                    <Typing.Speed ms={100} />
                    <Typing.Delay ms={200} />
                    <span>{props.typing[i]}</span>
                </Typing> );
        }
    }

    return (
        <Heading1>
            <Typing loop>
            <Typing.Speed ms={150} />
            <span>{props.mainHeading}</span>
                {typedHeading}
            <Typing.Delay ms={3000} />
            </Typing>               
        </Heading1>
        
    );
}

const mapStateToProps = state=>{
    return {
        themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
    }
  }
export default connect(mapStateToProps)(headingTyping);