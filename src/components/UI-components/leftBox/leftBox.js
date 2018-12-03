import React ,{Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const leftBox = (props)=>{

    return (
        <div>Left Box</div>
    )

}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
    }
  }
export default connect (mapStateToProps)(leftBox);