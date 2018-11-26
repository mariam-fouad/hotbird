import React from 'react';
import styled from 'styled-components';

const sliderImages = (props)=>{

    const Images = styled.img`
        width:5rem;

    `;
    return (
        <Images src={require('../../../../assets'+props.imagesURL+'/2.jpg')}/>
    );
}

export default sliderImages;