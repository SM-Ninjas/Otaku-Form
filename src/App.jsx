import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import Global from './assets/Global';
import { ThemeContext } from './context/ThemeContext';
import FormPage from './pages/FormPage';
// import Home from './pages/Home';

const RootContainer = styled.main`
    background-color: ${props => props.theme.body};
    max-height: 100vh;
    overflow: hidden;
`

const Container = styled.article`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.body};
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
                            <Route path = '/' exact element = { <FormPage /> } />    
                        </Routes>    
                    </Container>
                </RootContainer>
            </Router>
        </ThemeProvider>
    )
}

export default App