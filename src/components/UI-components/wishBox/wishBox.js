import React  from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import Icon from '../icons/icons';
const wishBox = (props)=>{
    const HeartBox = styled.div`
        background-color: ${props.themeColors.colorSecondaryTrans};
        padding: 5px 2px;
    `;
    const Span = styled.span`
        cursor: pointer;
    `;
    return (
        <HeartBox>
            <Span>
                <Icon 
                service="heart" 
                color={props.themeColors.colorPrimary}
                hoverColor={props.themeColors.colorPrimary}/>
            </Span>
            
        </HeartBox>
    )

}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
    }
  }
export default connect (mapStateToProps) (wishBox);