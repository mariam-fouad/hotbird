import React from 'react';
import styled from 'styled-components';

const backdrop = (props)=>{
    const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0,0,0,0.5); 
`;

    return(
        <Backdrop onClick={props.close}/>
    );
}

export default backdrop;