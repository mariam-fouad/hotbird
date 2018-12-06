import React from 'react';
import styled from 'styled-components';

import Backdrop from '../Backdrop/Backdrop';
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
    return (
        <React.Fragment>
            <Backdrop />
            <Popup>
                <textarea>

                </textarea>
            </Popup>
        </React.Fragment>
       
        
    )
}

export default ratingPopup;