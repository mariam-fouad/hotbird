import React ,{Component} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

import * as actions from '../store/actions';

import Slider from '../components/UI-components/slider/slider';
import HotelInfo from '../components/UI-components/hotelInfo/hotelInfo';
import LeftBox from '../components/UI-components/leftBox/leftBox';
import PopupMessage from '../components/UI-components/popupMessage/popupMessage';

class hotel extends Component{

    state={
        id:null,
        hotel:null,
        addToWishList:false,
        rating:false,
    }

    getHotelInfo = (id)=>{
       return this.props.hotels[id];
    }
    componentWillMount() {
        const hotelID = this.props.match.params.id;
        this.setState({
            id:hotelID,
            hotel:this.getHotelInfo(hotelID),
        });
    }

    closeWishPopupMessage= ()=>{
        this.setState({
            addToWishList:false,
        })
    }
    render(){
        const Main = styled.main`
            height:30rem;
            margin-bottom: 2rem;
        `;
    
        const WishMessage = this.state.addToWishList? 
            <PopupMessage 
            close={this.closeWishPopupMessage} 
            themeColors={this.props.themeColors}>
                {this.state.hotel.name+ " is successfully added to the your wishList !"}
            </PopupMessage> 
            : null;

        
        return (
            <Main>
                <Slider imagesURL={this.state.hotel.imagesFolder}/>
                <HotelInfo hotel ={this.state.hotel} themeColors={this.props.themeColors}/>
                <LeftBox wishClick={()=>{
                    this.setState({
                        addToWishList:true,
                    });

                    this.props.onWishHotelADD(this.state.hotel.id , this.state.hotel.name)}
                    }
                    ratingClick={()=>{
                        this.setState({
                            rating:true,
                        });
                    }}
                    />
                {WishMessage}
            </Main>
            
        );
    }
    
}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
      hotels: state.hotelReducer.hotels,
    }
  }
  const mapDispatchToProps=dispatch=>{
    return {
        onWishHotelADD : (hotelID , hotelName)=> dispatch (actions.addWishHotel(hotelID,hotelName)),
    }
  }
export default connect (mapStateToProps,mapDispatchToProps)(hotel);