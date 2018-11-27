import React ,{Component} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

import Slider from '../components/UI-components/slider/slider';

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
        const Main = styled.main`
            margin-top: 3rem;
            margin-bottom: 2rem;
        `;
        return (
            <Main>
                <Slider imagesURL={this.state.hotel.imagesFolder}/>
                <h1>
                    Hotel {this.state.hotel.name}
                </h1>
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
export default connect (mapStateToProps)(hotel);