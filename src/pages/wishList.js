import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

const wishList = (props)=>{

    const Main = styled.main`
    margin-top: 3rem;
    margin-bottom: 2rem;
    display:flex;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
    const wishList = props.wish.map(hotel=>
        <p>{hotel.hotelName}</p>);
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