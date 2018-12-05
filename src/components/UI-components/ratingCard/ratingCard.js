import React from 'react';
import styled from 'styled-components';

import Icon from '../icons/icons';
const ratingCard = (props)=>{

    const Card = styled.div`
        width: 9rem;
        background-color:${props.themeColors.colorSecondaryTrans};
        padding: 0.5rem;
        border-radius: 3px;
        margin: 0.5rem;
        color: ${props.themeColors.colorPrimary};
    `;

    const HotelName = styled.h2`
        font-size:10px;
    `;

    let stars=[];
    for (let i=0;i<props.rating.rate;i++)
    {
        stars.push(
            <span>
                <Icon service="star-card" 
                color={props.themeColors.colorPrimary}
                hoverColor={props.themeColors.colorPrimary}
                />
            </span>
        )
    }
    return (
        <Card>
            <HotelName>
                {props.rating.hotelName}
            </HotelName>
            {stars}
            
        </Card>
    )

}

export default ratingCard;