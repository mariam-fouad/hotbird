import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

const wishList = (props)=>{
    return (
        <h1>wishList</h1>
    )
}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
      wish: state.wishReducer.wishList,
    }
  }
export default connect (mapStateToProps)(wishList);