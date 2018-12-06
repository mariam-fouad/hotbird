import React from 'react';
import styled from 'styled-components';

import Backdrop from '../Backdrop/Backdrop';
import Icon from '../icons/icons';
const ratingPopup = (props)=>{

    const Popup = styled.div`
        z-index:1000;
        background-color:${props.themeColors.colorSecondary};
        width: 40vw;
        padding:10px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    `;
    const IconStyled = styled.span`
        position: absolute;
        top: 4px;
        right: 1px;
        cursor: pointer;
        padding:1px;
    `;
    
    return (
        <React.Fragment>
            <Backdrop close={props.onCancel} />
            <Popup>
                <IconStyled onClick={props.onCancel}>
                    <Icon service="times" 
                    color={props.themeColors.colorPrimary}
                    hoverColor={props.themeColors.colorPrimary}/>
                </IconStyled>
                <textarea>

                </textarea>
            </Popup>
        </React.Fragment>
       
        
    )
}

export default ratingPopup;