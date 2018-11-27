import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

import LongCard from '../components/UI-components/longCard/longCard';


const hotels = (props)=>{
    const redirectToHotel =(hotelID)=>{
        props.history.push('/hotel/'+hotelID);
    }

    const Main = styled.main`
        margin-top: 3rem;
        margin-bottom: 2rem;
        display:flex;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
    const H1 = styled.h1`
        color: ${props.themeColors.colorPrimary};
    `;

    let longCards = props.hotels.map(hotel=>{
        return (
            <LongCard
            key={hotel.id}
            name={hotel.name} 
            main={hotel.location}
            imagesURL = {hotel.imagesFolder}
            themeColors={props.themeColors}
            clicked = {()=>redirectToHotel(hotel.id)}>
            
            </LongCard>
        );
    })

    return (
        <Main>
            <H1>Explore Our Hotels</H1>
            {longCards}
        </Main>
        
    );

}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
      hotels: state.hotelReducer.hotels,
    }
  }
export default connect (mapStateToProps)(hotels);