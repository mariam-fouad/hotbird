import React,{Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import * as  actions from '../store/actions';
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

    onCancel=()=>{
        this.setState(
            {
                toRate:false,
                id:null,
                name:null,
                rate:null,
                rateMessage:null
            }
        )
    }

    onSubmit=(rateMessage,rate)=>{
        this.props.onChangeRating(this.state.id,this.state.name,rate,rateMessage);
        this.setState(
            {
                toRate:false,
                id:null,
                name:null,
                rate:null,
                rateMessage:null
            }
        )
    }

    render(){
        const Main = styled.main`
            margin: 4rem;
            height:65vh;
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
            <RatingPopUp 
            hotelName= {this.state.name}
            rateMessage = {this.state.rateMessage}
            rate={this.state.rate}
            themeColors={this.props.themeColors} 
            onCancel ={this.onCancel}
            onSubmit ={(rateMessage,rate)=>this.onSubmit(rateMessage,rate)}/> 
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

const mapDispatchToProps=dispatch=>{
    return {
        onChangeRating : (hotelID,hotelName,rate,rateMessage)=> dispatch (actions.addRating(hotelID,hotelName,rate,rateMessage)),
    }
  }
export default connect (mapStateToProps,mapDispatchToProps)(Ratings);