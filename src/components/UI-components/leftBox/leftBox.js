import React  from 'react';
import styled from 'styled-components';

import WishBox from '../wishBox/wishBox';
import RatingBox from '../ratingBox/ratingBox';

const leftBox = (props)=>{
    const Div = styled.div`
        position: fixed;
        top: 50%;
        left: 0;
        display: flex;
        flex-flow: column;
    `;
    return (
        <Div>
            <WishBox click={props.wishClick}/>
            <RatingBox click={props.ratingClick}/>
        </Div>
    )

}


export default leftBox;