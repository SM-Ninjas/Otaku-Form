import React from 'react';
import styled from 'styled-components';

const Btn = styled.div`
  height: 3.5rem;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.neutral};
  box-shadow: 0 0.4rem 0 0 ${props => props.theme.secondary};
  letter-spacing: 3px;
  transition: all 0.3s;
  
  &:active {
      transform: translateY(0.3rem);
      box-shadow: 0 0.2rem 0 0 ${props => props.theme.secondary};
  }
`

const Button = ({ text, clickEvent }) => {
  return (
    <Btn onClick={clickEvent}>{text}</Btn>
  )
}

export default Button