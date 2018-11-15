import React from 'react';
import styled, { css } from 'styled-components'

import Nav from './headerComponents/nav';
import Logo from './headerComponents/logo';
const header =()=>{

    const Header = styled.header`
        background-color: #cecece70;;
        height:13vh;
        display:flex;
        position:fixed;
        top:0;
        left:0;
        right: 0;
        z-index:100;
        justify-content: space-between;

    `;
    return(
        <Header>
            <Logo/>
            <Nav/>
        </Header>
        
    )
}

export default header;