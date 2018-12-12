import React  from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import Icon from '../icons/icons';
const ratingBox = (props)=>{
    const StarBox = styled.div`
        background-color: ${props.themeColors.colorSecondaryTrans};
        padding: 5px 2px;
    `;
    const Span = styled.span`
        cursor: pointer;
    `;
    return (
        <StarBox>
            <Span onClick={props.click}>
                <Icon 
                service="star" 
                color={props.themeColors.colorPrimary}
                hoverColor={props.themeColors.colorPrimary}/>
            </Span>
            
        </StarBox>
    )

}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
    }
  }
export default connect (mapStateToProps) (ratingBox);