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
            height:30rem;
            margin-bottom: 2rem;
        `;
        const H1 = styled.h1`
            color:${this.props.themeColors.colorPrimary};
            border-bottom: 1px solid transparent;
            display: inline-block;
            font-size: 1rem;
            padding-bottom: .3rem; 
            transition: all 0.5s;

            :hover{
                border-bottom: 1px solid ${this.props.themeColors.colorSecondary};
                font-size: 1rem;
            }
        `;

        const HotelInfo = styled.div`
            display:flex;
            justify-content: space-between;
            align-items: center;
            padding: .5rem;
        `;
        return (
            <Main>
                <Slider imagesURL={this.state.hotel.imagesFolder}/>
                <HotelInfo>
                    <H1>
                        Hotel {this.state.hotel.name}
                    </H1>
                    <p>{this.state.hotel.location}</p>
                </HotelInfo>
                
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