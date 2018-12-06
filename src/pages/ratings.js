import React,{Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import RatingPopUp from '../components/UI-components/ratingPopup/ratingPopup';
import RatingCard from '../components/UI-components/ratingCard/ratingCard';
class Ratings extends Component{
    state ={
        toRate:false,
        id:null,
        name:null,
        rate:null,
        rateMessage:null,
    }

    onRateing = (oldRating)=>{
        this.setState(
            {
                toRate:true,
                id:oldRating.id,
                name:oldRating.hotelName,
                rate:oldRating.rate,
                rateMessage:oldRating.rateMessage
            }
        )
    }
    render(){
        const Main = styled.main`
            margin: 4rem;
        `;

        const CardWrap = styled.div`
            display:flex;
            flex-wrap: wrap;
            justify-content: center;
        `;

        const ratingCard = this.props.ratings.map(rating=>{
            return <RatingCard key ={rating.id} themeColors={this.props.themeColors} rating={rating} onRate={()=>this.onRateing(rating)}/>
        });

        const ratingPopup = this.state.toRate? 
        <RatingPopUp themeColors={this.props.themeColors}/> 
        :null;
        return (
            <Main>
                <CardWrap>
                    {ratingCard}
                </CardWrap>
                {ratingPopup}
            </Main>
            
        );
    }
    
}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
      ratings: state.ratingReducer.rating,
    }
  }
export default connect (mapStateToProps)(Ratings);