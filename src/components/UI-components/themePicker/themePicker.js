import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const themePicker = (props)=>{

    const TopLeftQ = styled.div`
        width: 7rem;
        height: 7rem;
        background: ${props.themeColors[0].colorPrimary};
        border-radius: 7rem 0 0 0;
        display: inline-block;
        margin: 0.25rem;
        border: 0.3rem solid ${props.themeColors[0].colorSecondary};
    `;
    const TopRightQ = styled.div`
        width: 7rem;
        height: 7rem;
        background: ${props.themeColors[1].colorPrimary};
        border-radius: 0 7rem 0 0;
        display: inline-block;
        margin: 0.25rem;
        border: 0.3rem solid ${props.themeColors[1].colorSecondary};
    `;
    const BottomLeftQ = styled.div`
        width: 7rem;
        height: 7rem;
        background: ${props.themeColors[2].colorPrimary};
        border-radius: 0 0 0 7rem;
        display: inline-block;
        margin: 0.25rem;
        border: 0.3rem solid ${props.themeColors[2].colorSecondary};
    `;
    const BottomRightQ = styled.div`
        width: 7rem;
        height: 7rem;
        background: ${props.themeColors[3].colorPrimary};
        border-radius: 0 0 7rem 0;
        display: inline-block;
        margin: 0.25rem;
        border: 0.3rem solid ${props.themeColors[3].colorSecondary};
    `;
    return (
        <div>
            <div>
                <TopLeftQ/>
                <TopRightQ/>
            </div>
            <div>
                <BottomLeftQ/>
                <BottomRightQ/>
            </div>
        </div>
    );
}

const mapStateToProps = state=>{
    return {
        themeColors: state.themeReducer.themes,
    }
  }
export default connect(mapStateToProps)(themePicker);