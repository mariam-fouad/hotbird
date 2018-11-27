import React from 'react';
import styled from 'styled-components';

import Icons from '../icons/icons';
const hotelInfo = (props)=>{
        const H1 = styled.h1`
        color:${props.themeColors.colorPrimary};
        border-bottom: 1px solid transparent;
        display: inline-block;
        font-size: 1rem;
        padding-bottom: .3rem; 
        transition: all 0.5s;

        :hover{
            border-bottom: 1px solid ${props.themeColors.colorSecondary};
            font-size: 1rem;
        }
    `;

    const HotelInfo = styled.div`
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: .5rem;
        color:${props.themeColors.colorPrimary};
    `;
    const SubInfo = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    const Rating = styled.div`
        color:${props.themeColors.colorPrimary};
        margin-left:0.3rem;
        padding: 0.2rem 0.5rem;
        font-weight: 500;
        font-weight: 500;
        background-color: ${props.themeColors.colorSecondaryTrans};
    `;

    const Location = styled.p`
        color:${props.themeColors.colorPrimary};
        font-weight: 500;
    `;

    const Line = styled.hr`
        display: inline-block;
        align-items: center;
        height: 1.5px;
        border: 0;
        border-top: 1px ridge ${props.themeColors.colorSecondary};
        margin: 12px 0;
        padding: 0;
        width:80vw;
    `;

    const HotelInfoDiv = styled.div`
    `;

    let iconsList = props.hotel.services.map(service=>
        {
            return(
                <Icons key={service} 
                service={service} 
                color={props.themeColors.colorPrimary}
                hoverColor = {props.themeColors.colorSecondary}/>
            );
        }    
    );
    return (
        <HotelInfoDiv>
            <HotelInfo>
                <H1>
                    {props.hotel.name}
                </H1>
                <SubInfo>
                    <Location>{props.hotel.location}</Location>
                    <Rating>{props.hotel.rate}</Rating>
                </SubInfo>           
            </HotelInfo>
            <div>
                {iconsList}
            </div> 
            <Line/> 
        </HotelInfoDiv>
        
    );
}

export default hotelInfo;