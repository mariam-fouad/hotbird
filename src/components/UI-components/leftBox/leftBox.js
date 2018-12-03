import React  from 'react';
import styled from 'styled-components';

import WishBox from '../wishBox/wishBox';

const leftBox = (props)=>{
    const Div = styled.div`
        position: fixed;
        top: 50%;
        left: 0;
        display: flex;
        flex-flow: column;
    `;
    return (
        <Div>
            <WishBox/>
        </Div>
    )

}


export default leftBox;