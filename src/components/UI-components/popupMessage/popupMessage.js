import React from 'react';
import styled from 'styled-components';

import Backdrop from '../Backdrop/Backdrop';

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


    return (
        <div>
            <Backdrop close ={props.close}/>
            <MessageBox onClick = {props.close}>
                {props.children+ "is successfully removed from the wishList !"}
            </MessageBox>
        </div>
        
    );
}
export default popupMessage;