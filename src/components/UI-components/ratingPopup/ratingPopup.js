import React ,{Component} from 'react';
import styled from 'styled-components';

import Backdrop from '../Backdrop/Backdrop';
import Icon from '../icons/icons';
class ratingPopup extends Component{
    state ={
        review:"",
    }

    componentWillMount() {
        this.state.review=this.props.rateMessage;
    }
    reviewChangeValue = (event)=>{
        this.setState({
            review: event.target.value
        });
    }
    render (){
        const Popup = styled.div`
            z-index:1000;
            background-color:${this.props.themeColors.colorSecondary};
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
        `
        return (
            <React.Fragment>
                <Backdrop close={this.props.onCancel} />
                <Popup>
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
                    <div onClick={()=>this.props.onSubmit(this.state.review)}>
                        ADD
                    </div>
                </Popup>
            </React.Fragment>
        
            
        )
    }
    
}

export default ratingPopup;