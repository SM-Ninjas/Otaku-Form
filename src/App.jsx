import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import Global from './assets/Global';
import { ThemeContext } from './context/ThemeContext';
import Home from './pages/Home';

const RootContainer = styled.main`
    background-color: ${props => props.theme.body};
`

const Container = styled.article`
    max-width: 1366px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: ${props => props.theme.body};
    display: flex;
    justify-content: center;
    align-items: center;
`

const App = () => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Global />
                <RootContainer>
                    <Container>
                        <Routes>
                            <Route path = '/' exact element = { <Home /> } />    
                        </Routes>    
                    </Container>
                </RootContainer>
            </Router>
        </ThemeProvider>
    )
}

export default App