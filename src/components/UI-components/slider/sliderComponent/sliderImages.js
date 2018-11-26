import React from 'react';
import styled from 'styled-components';

const sliderImages = (props)=>{

    const Images = styled.img`
        width:6rem;

    `;
    return (
        <React.Fragment>
            <Images src={require('../../../../assets'+props.imagesURL+'/1.jpg')}/>
            <Images src={require('../../../../assets'+props.imagesURL+'/2.jpg')}/>
            <Images src={require('../../../../assets'+props.imagesURL+'/3.jpg')}/>
        </React.Fragment>
        
    );
}

export default sliderImages;