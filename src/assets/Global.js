import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${props => props.theme.text};
    font-family: 'Exo 2', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-size: 36px;
    font-weight: 800;
  }

  h2 {
    font-size: 27px;
    font-weight: 500;
  }

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 18px;
    color: ${props => props.theme.disable};
  }

  ::-webkit-scrollbar {
    width: 0.5em;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 100vw;
  }
  
  ::-webkit-scrollbar-thumb {
    background: transparent;
    background: ${props => props.theme.disable};
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.text};
  }
  
  @supports (scrollbar-color: red blue) {
    *{
        scrollbar-color: ${props => props.theme.text} transparent;
        scrollbar-width: thin;
    }
    .mobile {
      scrollbar-color: transparent;
      scrollbar-width: 0;
    }
  
  }
`