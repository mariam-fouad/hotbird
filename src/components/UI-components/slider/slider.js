import React ,{Component} from 'react';

import SliderImages from './sliderComponent/sliderImages';

class Slider extends Component {

    state ={
        slideIndex:0,
    }
    
    render() {
        return (
            <div>
                <SliderImages imagesURL={props.imagesURL}/>
            </div>
            
        );
    }

    
}

export default Slider;