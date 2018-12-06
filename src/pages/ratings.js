import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import RatingCard from '../components/UI-components/ratingCard/ratingCard';
const ratings = (props)=>{
    const Main = styled.main`
        margin: 4rem;
    `;

    const CardWrap = styled.div`
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
    `;

    const ratingCard = props.ratings.map(rating=>{
        return <RatingCard key ={rating.id} themeColors={props.themeColors} rating={rating} />
    })
    return (
        <Main>
            <CardWrap>
                {ratingCard}
            </CardWrap>
        </Main>
        
    );
}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
      ratings: state.ratingReducer.rating,
    }
  }
export default connect (mapStateToProps)(ratings);