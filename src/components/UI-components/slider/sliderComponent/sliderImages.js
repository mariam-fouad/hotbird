import React from 'react';
import styled from 'styled-components';

const sliderImages = (props)=>{

    const Images = styled.img`
        width:100vw;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 1s;
        
    `;

    const Image1 = styled(Images)`
        transform:${props.index===0? "translateX(0);":"translateX(300rem);"};
    `;
    const Image2 = styled(Images)`
        transform:${props.index===1? "translateX(0);":"translateX(300rem);"};
    `;
    const Image3 = styled(Images)`
        transform:${props.index===2? "translateX(0);":"translateX(300rem);"};        
    `;
    return (
        <React.Fragment>
            <Image1 src={require('../../../../assets'+props.imagesURL+'/1.jpg')}/>
            <Image2 src={require('../../../../assets'+props.imagesURL+'/2.jpg')}/>
            <Image3 src={require('../../../../assets'+props.imagesURL+'/3.jpg')}/>
        </React.Fragment>
        
    );
}

export default sliderImages;