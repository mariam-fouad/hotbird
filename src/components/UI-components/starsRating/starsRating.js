import React  from 'react';
import styled from 'styled-components';

import Icon from '../icons/icons';
const starsRating = (props)=>{
    let stars = [];
    for (let i=1;i<=5;i++){
        if(i<=props.rate){
            stars.push(
                <span key={i} onClick={()=>props.changeRate(i)} onMouseEnter={()=>props.changeRate(i)}>
                    <Icon  
                    service="star"
                    color={props.themeColors.colorPrimary}
                    hoverColor={props.themeColors.colorPrimary}/>
                </span>
                
            )
        }
        else{
            stars.push(
                <span key={i} onClick={()=>props.changeRate(i)} onMouseEnter={()=>props.changeRate(i)}>
                    <Icon 
                    service="star-regular"
                    color={props.themeColors.colorPrimary}
                    hoverColor={props.themeColors.colorPrimary}/>
                </span>
                
            )
        }
        
    }

    const StarsDiv = styled.div`
        margin: 5px;
        margin-bottom: 12px;
    `;

    return (
        <StarsDiv>
            {stars}
        </StarsDiv>
    )
}
export default starsRating;