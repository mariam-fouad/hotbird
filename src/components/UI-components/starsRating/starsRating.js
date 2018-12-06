import React  from 'react';
import styled from 'styled-components';

import Icon from '../icons/icons';
const starsRating = (props)=>{
    let stars = [];
    for (let i=1;i<=5;i++){
        if(i<=props.rate){
            stars.push(
                <Icon 
                key={i} 
                service="star"
                color={props.themeColors.colorPrimary}
                hoverColor={props.themeColors.colorPrimary}/>
            )
        }
        else{
            stars.push(
                <Icon 
                key={i} 
                service="star-regular"
                color={props.themeColors.colorPrimary}
                hoverColor={props.themeColors.colorPrimary}/>
            )
        }
        
    }

    return (
        <div>
            {stars}
        </div>
    )
}
export default starsRating;