import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions';


const themePicker = (props)=>{

    const QuarterCircle = styled.div`
        width: 7rem;
        height: 7rem;
        display: inline-block;
        margin: 0.25rem;
        transition: all 0.3s;

        :hover{
            transform:scale(1.15);
        }
    `;

    const TopLeftQ = styled(QuarterCircle)`
        
        background: ${props.themeColors[0].colorPrimary};
        border-radius: 7rem 0 0 0;
        border: 0.3rem solid ${props.themeColors[0].colorSecondary};
    `;
    const TopRightQ = styled(QuarterCircle)`
        background: ${props.themeColors[1].colorPrimary};
        border-radius: 0 7rem 0 0;
        border: 0.3rem solid ${props.themeColors[1].colorSecondary};
    `;
    const BottomLeftQ = styled(QuarterCircle)`
        background: ${props.themeColors[2].colorPrimary};
        border-radius: 0 0 0 7rem;
        border: 0.3rem solid ${props.themeColors[2].colorSecondary};
    `;
    const BottomRightQ = styled(QuarterCircle)`
        background: ${props.themeColors[3].colorPrimary};
        border-radius: 0 0 7rem 0;
        border: 0.3rem solid ${props.themeColors[3].colorSecondary};
    `;
    return (
        <div>
            <div>
                <TopLeftQ onClick={()=>props.onSelectTheme(0)}/>
                <TopRightQ onClick={()=>props.onSelectTheme(1)}/>
            </div>
            <div>
                <BottomLeftQ onClick={()=>props.onSelectTheme(2)}/>
                <BottomRightQ onClick={()=>props.onSelectTheme(3)}/>
            </div>
        </div>
    );
}

const mapStateToProps = state=>{
    return {
        themeColors: state.themeReducer.themes,
    }
  }
const mapDispatchToProps=dispatch=>{
    return {
        onSelectTheme : (themeIndex)=> dispatch (actions.selectTheme(themeIndex)),
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(themePicker);