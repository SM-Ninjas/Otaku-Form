import React from 'react'
import styled from 'styled-components';

import Coding from '../assets/images/coding.gif'
import Button from '../components/Button';

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 2rem;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const Wrapper = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: ${props => props.theme.neutral};
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }
`

const Home = () => {
  return (
    <Container>
        <Wrapper>
            <img src = { Coding } alt='Happy Coding' />
        </Wrapper>

        <div>
            <h1>HAPPY CODING.</h1>
            <p>Thank you for choosing this template.</p>
        </div>

        <Button text='Check my Github' clickEvent = {() => window.open('https://github.com/Nimesh-bot')}/>
    </Container>
  )
}

export default Home