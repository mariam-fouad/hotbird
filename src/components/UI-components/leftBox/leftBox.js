import React  from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const leftBox = (props)=>{
    const Div = styled.div`
        position: fixed;
        top: 50%;
        left: 0;
        display: flex;
        flex-flow: column;
    `;
    return (
        <Div>Left Box</Div>
    )

}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
    }
  }
export default connect (mapStateToProps)(leftBox);