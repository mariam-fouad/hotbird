import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

const hotels = (props)=>{

    return (
        <h1>Hotels page</h1>
    );

}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
      hotels: state.hotelReducer.hotels,
    }
  }
export default connect (mapStateToProps)(hotels);