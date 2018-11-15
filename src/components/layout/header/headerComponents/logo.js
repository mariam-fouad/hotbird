import React from 'react';
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import logoImage from '../../../../assets/logo.png';
const logo = ()=>{
    const Logo = styled.img`
        width:3.5rem;
        display:inline-block;
        padding:0 1rem;
        `;

    return (
        <Link to="/">
            <Logo src ={logoImage} alt="logo" />
        </Link>
    )
}

export default logo;