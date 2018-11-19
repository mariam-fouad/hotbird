import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components'

const headingTyping = (props)=>{
    return (
        <h1>Live your </h1>
    );
}

const mapStateToProps = state=>{
    return {
      themeSelected: state.themeReducer.selectedTheme,
    }
  }
export default connect(mapStateToProps)(headingTyping);