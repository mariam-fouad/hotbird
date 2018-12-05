import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

const ratings = (props)=>{
    return (
        <h1>Rating</h1>
    );
}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
      hotels: state.hotelReducer.hotels,
    }
  }
export default connect (mapStateToProps)(ratings);