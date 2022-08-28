import React from 'react'
import styled from 'styled-components'

import Luffy from '../assets/images/luffy.gif'

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Loading = () => {
  return (
    <Backdrop>
        <img src={Luffy} alt="Loading....." className='h-96 w-auto' />      
    </Backdrop>
  )
}

export default Loading