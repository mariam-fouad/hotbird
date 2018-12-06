import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import Icon from '../icons/icons';
const ratingCard = (props)=>{

    const Card = styled.div`
        width: 9rem;
        height: 6.5rem;
        background-color:${props.themeColors.colorSecondaryTrans};
        padding: 0.5rem;
        border-radius: 3px;
        margin: 0.5rem;
        color: ${props.themeColors.colorPrimary};
    `;

    const HotelName = styled(Link)`
        text-decoration: none;
        border-bottom: 1px solid transparent;
        display: inline-block;
        padding: 2px;
        margin: 3px;
        font-size: 13px;
        font-weight: 500;
        color: ${props.themeColors.colorPrimary};
        transition: all 0.4s;

        :hover{
            border-color:${props.themeColors.colorPrimary};
        }
    `;

    const HotelReview = styled.div`
        margin-top:9px;
    `;

    const StarDiv = styled.div`
        padding:3px;
        cursor: pointer;
        display: inline-block;
    `;

    let stars=[];
    for (let i=0;i<props.rating.rate;i++)
    {
        stars.push(
                <Icon service="star-card" key={i}
                color={props.themeColors.colorPrimary}
                hoverColor={props.themeColors.colorPrimary}
                />
        )
    }
    return (
        <Card>
            <div>
                <HotelName to={"/hotel/"+props.rating.id} >
                        {props.rating.hotelName}
                </HotelName>
            </div>
            <StarDiv onClick={props.onRate}>
                {stars}
            </StarDiv>
            <HotelReview>
                {props.rating.rateMessage}
            </HotelReview>
            
        </Card>
    )

}

export default ratingCard;