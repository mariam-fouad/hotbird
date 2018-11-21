import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const themePicker = (props)=>{
    return (
        <div>
            Theme Picker
        </div>
    );
}

const mapStateToProps = state=>{
    return {
        themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
    }
  }
export default connect(mapStateToProps)(themePicker);