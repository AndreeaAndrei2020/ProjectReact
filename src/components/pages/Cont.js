import React from 'react'
import styled from 'styled-components'

import { AccountBox } from '../accountBox';

const AppContainer = styled.div `
width:100%;
height:100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content:center;
margin-top: 10px;

`;

function Cont() {
    return ( <AppContainer >
                <AccountBox />
        </AppContainer>
    )
}

export default Cont