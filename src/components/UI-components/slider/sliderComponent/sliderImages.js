import React from 'react';
import styled from 'styled-components';

const sliderImages = (props)=>{

    const Images = styled.img`
        width:6rem;

    `;
    return (
        <React.Fragment>
            <Images src={require('../../../../assets'+props.imagesURL)}/>
        </React.Fragment>
        
    );
}

export default sliderImages;