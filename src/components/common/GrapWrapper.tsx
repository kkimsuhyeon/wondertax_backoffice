import React, { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

function GrayWrapper({ children, isOpen, onClick }: PropsWithChildren<{ isOpen: boolean; onClick: () => void }>) {
  const root = document.body;

  return isOpen ? createPortal(<Wrapper onClick={onClick}>{children}</Wrapper>, root) : null;
}

export default GrayWrapper;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.blackGray};
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
