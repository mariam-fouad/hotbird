import React ,{Component} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';
import { throws } from 'assert';

class hotel extends Component{

    state={
        id:null,
        hotel:null,
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
    render(){
        return (
            <h1>
                Hotel {this.state.hotel.name}
            </h1>
        );
    }
    
}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
      hotels: state.hotelReducer.hotels,
    }
  }
export default connect (mapStateToProps)(hotel);