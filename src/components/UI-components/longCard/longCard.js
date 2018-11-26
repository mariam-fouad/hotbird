import React from 'react';
import styled from 'styled-components';

import Slider from '../slider/slider';

const LongCard = (props)=>{
    const CardDiv = styled.div`
        border: 1px solid ${props.themeColors.colorSecondary};
        display: flex;
        justify-content: space-between;
        padding: 0.3rem;
        width: 21rem;
        margin-bottom : 1rem;
        box-shadow: 1px 4px 3px #ccc;
    `;
    const CardName = styled.h2`
        color:${props.themeColors.colorPrimary};

    `;

    const CardMain = styled.p`
    `;

    return (
        <CardDiv>
            <Slider imagesURL= {props.imagesURL}/>
            <div>
                <CardName>{props.name}</CardName>
                <CardMain>{props.main}</CardMain>
            </div>
        </CardDiv>
    );
}


export default LongCard;