import React from 'react';
import styled from 'styled-components';

import Icons from '../icons/icons';

const wishCard = (props)=>{
    const WishCard = styled.div`
        width: 40vw;
        border: 1px solid ${props.themeColors.colorPrimary};
        margin : 3px;
        display:flex;
        justify-content: space-between;;
    `;

    const Heart = styled.div`
        background-color : ${props.themeColors.colorSecondaryTrans};
        padding:2px;
    `;

    const Hotel = styled.div`
        width:100%;
    `;
    return (
        <WishCard>
            <Heart>
                <Icons 
                color={props.themeColors.colorPrimary} 
                hoverColor={props.themeColors.colorPrimary}
                service={"heart"}/>
            </Heart>
            
            <Hotel>
                {props.hotel.hotelName}
            </Hotel>
        </WishCard>
    );

}

export default wishCard;