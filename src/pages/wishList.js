import React , {Component} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

import * as actions from '../store/actions';
import WishCard from '../components/UI-components/wishCard/wishCard';
import PopupMessage from '../components/UI-components/popupMessage/popupMessage';

class WishList extends Component{

    state ={
        toRemove:false,
        hotelName: null,
    }

    closePopupMessage = ()=>{
        this.setState({
            toRemove:false,
            hotelName:null,
        });
    }

    render(){
        const Main = styled.main`
            margin-top: 4rem;
            margin-bottom: 2rem;
            display:flex;
            display: flex;
            flex-direction: column;
            align-items: center;
            height:65vh;
        `;

        const wishList = this.props.wish.map(hotel=>
            <WishCard 
            key={hotel.id} 
            themeColors={this.props.themeColors} 
            hotel={hotel}
            remove={()=>{
                this.setState({
                    toRemove:true,
                    hotelName: hotel.hotelName,
                });
                 this.props.onWishHotelRemoved(hotel.id);
            }}/>);
        
        let Message = this.state.toRemove? 
        <PopupMessage 
        close={this.closePopupMessage} 
        themeColors={this.props.themeColors}>
            {this.state.hotelName+ "is successfully removed from the wishList !"}
        </PopupMessage> 
        : null ;
        return (
            <Main>
                {wishList}
                {Message}
            </Main>
            
        );
    }

   
}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
      wish: state.wishReducer.wishList,
    }
  }

const mapDispatchToProps=dispatch=>{
    return {
        onWishHotelRemoved : (hotelID)=> dispatch (actions.removeWishHotel(hotelID)),
    }
  }
export default connect (mapStateToProps,mapDispatchToProps)(WishList);