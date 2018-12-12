import React ,{Component} from 'react';
import styled from 'styled-components';

import Backdrop from '../Backdrop/Backdrop';
import Icon from '../icons/icons';
import StarsRating from '../starsRating/starsRating';
class ratingPopup extends Component{
    state ={
        review:"",
        rate:null,
    }

    componentWillMount() {
        this.setState ({
            review:this.props.rateMessage,
            rate:this.props.rate,
        })
    }
    reviewChangeValue = (event)=>{
        this.setState({
            review: event.target.value
        });
    }

    rateChangeValue = (rate)=>{
        this.setState({
            rate: rate
        });
    }
    render (){
        const Popup = styled.div`
            z-index:1000;
            background-color:${this.props.themeColors.colorSecondary};
            color:${this.props.themeColors.colorPrimary};
            width: 40vw;
            padding:10px;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        `;
        const IconStyled = styled.span`
            position: absolute;
            top: 4px;
            right: 1px;
            cursor: pointer;
            padding:1px;
        `;
        
        const TextArea = styled.textarea`
            width: 200px;
            height: 70px;
            padding:5px;
            font-size: 10px;
            color: ${this.props.themeColors.colorPrimary};
            border-radius: 3px;
            box-shadow: none;
            resize: none;
            border: none;
            overflow: auto;
            outline: none;
            background-color: #ffffff8f;

            @media (max-width:600px){
                width:100px;
            }
        `
        const Button= styled.div`
            cursor:pointer;
            display: inline-block;
            font-size: 12px;
            background-color: #ffffff8f;
            padding:3px;
            margin-top: 3px;
            border-radius: 2px;
            box-shadow: 0.5px 1px 1px #ccc;
        `;
        return (
            <React.Fragment>
                <Backdrop close={this.props.onCancel} />
                <Popup>
                    <h2>{this.props.hotelName+" review"}</h2>

                    <StarsRating 
                    rate={this.state.rate}
                    themeColors={this.props.themeColors}
                    changeRate={(rate)=>this.rateChangeValue(rate)}/>

                    <IconStyled onClick={this.props.onCancel}>
                        <Icon service="times" 
                        color={this.props.themeColors.colorPrimary}
                        hoverColor={this.props.themeColors.colorPrimary}/>
                    </IconStyled>
                    <TextArea 
                    type="text" 
                    autoFocus
                    value={this.state.review} 
                    onChange={this.reviewChangeValue}/>
                    <div>
                        <Button onClick={()=>this.props.onSubmit(this.state.review, this.state.rate)}>
                            ADD
                        </Button>
                    </div>
                    
                </Popup>
            </React.Fragment>
        
            
        )
    }
    
}

export default ratingPopup;