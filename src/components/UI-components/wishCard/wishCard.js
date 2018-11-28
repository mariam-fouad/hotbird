import React from 'react';
import styled from 'styled-components';

import Icons from '../icons/icons';

const wishCard = (props)=>{

    return (
        <div>
            <Icons 
            color={props.themeColors.colorPrimary} 
            hoverColor={props.themeColors.colorPrimary}
            service={"heart"}/>
            {props.hotel.hotelName}
        </div>
    );

}

export default wishCard;