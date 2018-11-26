import React from 'react';

import SliderImages from './sliderComponent/sliderImages';
const slider = (props)=>{

    return (
        <div>
            <p>Slider.</p>
            <SliderImages imagesURL={props.imagesURL}/>
        </div>
        
    );
}

export default slider;