import React from 'react';
import styled from 'styled-components';

import Backdrop from '../Backdrop/Backdrop';
import Icon from '../icons/icons';

const popupMessage = (props)=>{

    const MessageBox = styled.div`
        padding : 5px;
        background-color: ${props.themeColors.colorSecondaryTrans};
        color: ${props.themeColors.colorPrimary};
        position: fixed;
        top: 50%;
        left: 50%;
        z-index:1000;
        transform: translate(-50%,-50%);
    `;
    const CloseSpan = styled.span`
        cursor: pointer;
    `;

    

    return (
        <div>
            <Backdrop close ={props.close}/>
            <MessageBox>
                {props.children+ "is successfully removed from the wishList !"}
                <CloseSpan  onClick = {props.close}>
                    <Icon 
                    service="times" 
                    color= {props.themeColors.colorPrimary}
                    hoverColor={props.themeColors.colorPrimary}/> 
                </CloseSpan>
            </MessageBox>
        </div>
        
    );
}
export default popupMessage;