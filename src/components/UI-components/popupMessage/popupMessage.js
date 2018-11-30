import React from 'react';
import styled from 'styled-components';

import Backdrop from '../Backdrop/Backdrop';

const popupMessage = (props)=>{

    const MessageBox = styled.div`
        width: 7rem;
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
                <p>Message</p>
            </MessageBox>
        </div>
        
    );
}
export default popupMessage;