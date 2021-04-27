import React from 'react';
import styled, { CSSProperties } from 'styled-components';

function LogIn() {
  return (
    <Wrapper>
      <Div flex='1'>
        <img src='images/login.jpeg' />
        <p>Wondertax</p>
      </Div>
      <Div flex='1'></Div>
    </Wrapper>
  );
}

export default LogIn;

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: #d29bae;
`;

const Div = styled.div<{ flex?: CSSProperties['flex'] }>`
  ${({ flex }) => flex && `flex: ${flex}`};
  width: 100%;
  margin-right: 2rem;

  &:last-child {
    margin-right: initial;
  }
`;
