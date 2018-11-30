import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

import * as actions from '../store/actions';
import WishCard from '../components/UI-components/wishCard/wishCard';

const wishList = (props)=>{

    const Main = styled.main`
    margin-top: 4rem;
    margin-bottom: 2rem;
    display:flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    height:65vh;
`;
    const wishList = props.wish.map(hotel=>
        <WishCard 
        key={hotel.id} 
        themeColors={props.themeColors} 
        hotel={hotel}
        remove={()=>props.onWishHotelRemoved(hotel.id)}/>);
    return (
        <Main>
            {wishList}
        </Main>
        
    )
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
export default connect (mapStateToProps,mapDispatchToProps)(wishList);