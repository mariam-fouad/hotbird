import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

import CoverVideo from '../components/UI-components/coverVideo/coverVideos';
import HeadingTyping from '../components/UI-components/headingTyping/headingTyping';

const home = (props)=>{
    const Section = styled.section`
        background-color: ${props.themeColors.colorPrimar};
    `;
    return (
        <Section>
            <CoverVideo/>
            <HeadingTyping mainHeading ="Live your " typing={["Dream.","Life!"]}/>
        </Section>
    );
}

const mapStateToProps = state=>{
    return {
      themeColors: state.themeReducer.themes[state.themeReducer.selectedTheme],
    }
  }
export default connect (mapStateToProps)(home);