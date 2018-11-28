import React ,{Component} from 'react';
import styled from 'styled-components';

import SliderImages from './sliderComponent/sliderImages';

class Slider extends Component {

    state ={
        slideIndex:0,
    }

    updateIndenx = ()=>{
        let slideIndex = this.state.slideIndex;

        slideIndex++;
        if (slideIndex>2)
            slideIndex=0;

        this.setState({slideIndex:slideIndex});
        
    }
    componentDidMount() {
        this.interval = setInterval(
            () => this.updateIndenx()
            , 5000);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render() {
        const Div = styled.div`
            position: relative;
            height: 20rem;
            overflow: hidden;

            @media (max-width: 450px){
                height: 15rem;
            }

            @media (max-width: 350px){
                height: 13rem;
            }
        `;
        return (
            <Div>
                <SliderImages imagesURL={this.props.imagesURL} index={this.state.slideIndex}/>
            </Div>
            
        );
    }

    
}

export default Slider;