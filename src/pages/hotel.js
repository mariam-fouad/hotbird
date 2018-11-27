import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

const hotel = (props)=>{
    return (
        <h1>
            Hotel
        </h1>
    );
}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
      hotels: state.hotelReducer.hotels,
    }
  }
export default connect (mapStateToProps)(hotel);