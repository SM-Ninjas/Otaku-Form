import React from 'react';
import styled from 'styled-components';

const Btn = styled.div`
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${props => props.theme.primary};
  transition: all 0.3s;
`

const Button = ({ text, clickEvent }) => {
  return (
    <Btn onClick={clickEvent}>{text}</Btn>
  )
}

export default Button