import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

import WishCard from '../components/UI-components/wishCard/wishCard';

const wishList = (props)=>{

    const Main = styled.main`
    margin-top: 4rem;
    margin-bottom: 2rem;
    display:flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    height:65vh;
`;
    const wishList = props.wish.map(hotel=>
        <WishCard themeColors={props.themeColors} hotel={hotel}/>);
    return (
        <Main>
            {wishList}
        </Main>
        
    )
}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
      wish: state.wishReducer.wishList,
    }
  }
export default connect (mapStateToProps)(wishList);