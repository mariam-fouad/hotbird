import React from 'react';
import styled from 'styled-components'

const LongCard = (props)=>{
    const CardDiv = styled.div`
        border: 1px solid ${props.themeColors.colorSecondary};
        display: inline-block;
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
            <CardName>{props.name}</CardName>
            <CardMain>{props.main}</CardMain>
        </CardDiv>
    );
}


export default LongCard;