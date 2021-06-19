import { RootState } from 'modules';
import React from 'react';
import { createPortal } from 'react-dom';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

function Spinner() {
  const { isOpen } = typedUseSelector(({ spinner }) => spinner);

  return createPortal(
    <Wrapper isOpen={isOpen}>
      <Spin />
    </Wrapper>,
    document.body
  );
}

export default Spinner;

const Wrapper = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const spin = keyframes`
0% {
    transform: rotate(0deg);
}
25%{
    transform: rotate(90deg);
}
50%{
    transform:rotate(180deg);
}
75%{
    transform:rotate(270deg);
}
100%{
    transform:rotate(360deg);
}
`;

const Spin = styled.div`
  width: 5rem;
  height: 5rem;
  border: 4px solid ${({ theme }) => theme.blackGray};
  border-top: 4px solid ${({ theme }) => theme.white};
  border-bottom: 4px solid ${({ theme }) => theme.white};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
