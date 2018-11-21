import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import ThemePicker from '../components/UI-components/themePicker/themePicker';

const theme = (props)=>{

    const Main = styled.main`
        margin-top: 5rem;
    `;
    const H1 = styled.h1`
        color: ${props.themeColors.colorPrimar};
    `;
    return (
        <Main>
            <H1> Pick your Theme </H1>
            <ThemePicker/>
        </Main>
    )
}

const mapStateToProps = state=>{
    return {
        themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
    }
  }
export default connect(mapStateToProps)(theme);