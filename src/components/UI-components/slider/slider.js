import React ,{Component} from 'react';

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
            , 3000);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render() {
        let imgName;
        if (this.state.slideIndex===0){
            imgName='/1.jpg';
        }
        else if (this.state.slideIndex===1){
            imgName='/2.jpg';
        }
        else{
            imgName='/3.jpg';
        }
        return (
            <div>
                <SliderImages imagesURL={this.props.imagesURL+imgName}/>
            </div>
            
        );
    }

    
}

export default Slider;