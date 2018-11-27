import React ,{Component} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

class hotel extends Component{

    state={
        id:null,
    }

    componentWillMount() {
        const hotelID = this.props.match.params.id;
        this.setState({id:hotelID});
    }
    render(){
        return (
            <h1>
                Hotel {this.state.id}
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