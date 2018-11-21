import React from 'react';
import styled from 'styled-components';
import ThemePicker from '../components/UI-components/themePicker/themePicker';

const theme = (props)=>{

    const Main = styled.main`
        margin-top: 5rem;
    `;
    return (
        <Main>
            <h1> Pick your theme </h1>
            <ThemePicker/>
        </Main>
    )
}

export default theme;