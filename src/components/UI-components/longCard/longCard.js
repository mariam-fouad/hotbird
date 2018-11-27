import React from 'react';
import styled from 'styled-components';


const LongCard = (props)=>{
    const CardDiv = styled.div`
        border: 1px solid ${props.themeColors.colorSecondary};
        display: flex;
        justify-content: space-between;
        padding: 0.3rem;
        width: 21rem;
        margin-bottom : 1rem;
        box-shadow: 1px 4px 3px #ccc;
        background-image:linear-gradient(rgba(255, 251, 251, 0.52),rgba(239, 230, 230, 0.42)), url(${require(`../../../assets${props.imagesURL}/1.jpg`)});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        transition: all 0.4s;

        :hover{
            transform:scale(1.1) translateY(-.1rem);
            box-shadow: 2px 6px 4px #ccc;
        
        }
}
    `;
    const CardName = styled.h2`
        color:${props.themeColors.colorPrimary};

    `;

    const CardMain = styled.p`
        color:${props.themeColors.colorPrimary};
        font-weight: 400;
    `;

    const CardDetails = styled.div`
        width:100%;
    `;

    return (
        <CardDiv>
            
            <CardDetails>
                <CardName>{props.name}</CardName>
                <CardMain>{props.main}</CardMain>
            </CardDetails>
        </CardDiv>
    );
}


export default LongCard;