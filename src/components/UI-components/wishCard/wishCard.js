import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import Icons from '../icons/icons';

const wishCard = (props)=>{
    const WishCard = styled.div`
        width: 40vw;
        border: 1px solid ${props.themeColors.colorPrimary};
        margin : 3px;
        display:flex;
        justify-content: space-between;

        @media (max-width:420px){
            width:60vw;
        }
    `;

    const Heart = styled.div`
        background-color : ${props.themeColors.colorSecondaryTrans};
        padding:3px;
        cursor: pointer;

        :hover{
            background-color :${props.themeColors.colorPrimary};
        }
    `;

    const Hotel = styled.div`
        width:100%;
    `;

    const LinkStyled = styled(Link)`
        color:${props.themeColors.colorPrimary};
        text-decoration: none;
        padding-bottom:1px;
        border-bottom: 1px solid transparent;
        transition: all 0.3s;

        :hover{
            border-bottom: 1px solid ${props.themeColors.colorSecondary};
        }

    `;
    return (
        <WishCard>
            <Heart onClick={props.remove}>
                <Icons 
                color={props.themeColors.colorPrimary} 
                hoverColor={props.themeColors.colorSecondary}
                service={"heart"}/>
            </Heart>
            
            <Hotel>
                <LinkStyled to={"hotel/"+props.hotel.id}>{props.hotel.hotelName}</LinkStyled>
            </Hotel>
        </WishCard>
    );

}

export default wishCard;