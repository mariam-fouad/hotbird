import React from 'react';
import {connect} from 'react-redux';
import styled, { css } from 'styled-components'

import CandolimBeachMp4 from '../../assets/Candolim-Beach/Candolim-Beach.mp4';
import CandolimBeachWebm from '../../assets/Candolim-Beach/Candolim-Beach.webm';

import TwoSwimmersMp4 from '../../assets/Two-Swimmers/Two-Swimmers.mp4';
import TwoSwimmersWebm from '../../assets/Two-Swimmers/Two-Swimmers.webm';

import PerfectHourMp4 from '../../assets/Perfect_Hour/Perfect_Hour.mp4';
import PerfectHourWebm from '../../assets/Perfect_Hour/Perfect_Hour.webm';

import VacayModeMp4 from '../../assets/Vacay_Mode/Vacay_Mode.mp4';
import VacayModeWebm from '../../assets/Vacay_Mode/Vacay_Mode.webm';
const coverVideo = (props)=>{

  const Video = styled.video`
      width:100%;
  `;
    let video=<h1>Hello</h1>;
    switch (props.themeSelected){
        case 0: 
          video=(<Video autoPlay loop muted>
                  <source src={CandolimBeachMp4} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                  <source src={CandolimBeachWebm} type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                </Video>);
        case 1: 
          video=(<Video autoPlay loop muted>
                  <source src={TwoSwimmersMp4} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                  <source src={TwoSwimmersWebm} type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                </Video>);
        
        case 2: 
          video=(<Video autoPlay loop muted>
                  <source src={PerfectHourMp4} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                  <source src={PerfectHourWebm} type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                </Video>);

        case 3: 
        video=(<Video autoPlay loop muted>
                <source src={VacayModeMp4} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                <source src={VacayModeWebm} type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
              </Video>);
    }

    return (
      <div>{video}</div>
      );
    
}

const mapStateToProps = state=>{
    return {
      themeSelected: state.themeReducer.selectedTheme,
    }
  }
export default connect(mapStateToProps)(coverVideo);