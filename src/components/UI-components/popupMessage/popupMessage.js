import React from 'react';
import styled from 'styled-components';

const popupMessage = (props)=>{

    const MessageBox = styled.div`

    `;
    return (
        <MessageBox onClick = {props.close}>
            <p>Message</p>
        </MessageBox>
    );
}
export default popupMessage;