import React from 'react';

import CoverVideo from '../components/UI-components/coverVideo/coverVideos';
import HeadingTyping from '../components/UI-components/headingTyping/headingTyping';

const home = (props)=>{
    return (
        <section>
            <CoverVideo/>
            <HeadingTyping mainHeading ="Live your " typing={["Dream.","Life!"]}/>
        </section>
    );
}

export default home;