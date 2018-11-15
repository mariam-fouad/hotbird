import React from 'react';
import {connect} from 'react-redux';
import styled, { css } from 'styled-components'

import CandolimBeachMp4 from '../../assets/Candolim-Beach/Candolim-Beach.mp4';
import CandolimBeachWebm from '../../assets/Candolim-Beach/Candolim-Beach.webm';
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