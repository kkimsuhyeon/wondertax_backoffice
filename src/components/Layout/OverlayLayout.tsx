import React, { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

function OverlayLayout({ children, isOpen, onClick }: PropsWithChildren<{ isOpen: boolean; onClick: () => void }>) {
  const root = document.body;

  useEffect(() => {
    if (isOpen) root.style.overflow = 'hidden';
    else root.style.overflow = 'auto';
  }, [isOpen, root]);

  if (!isOpen) return null;
  return createPortal(<Wrapper onClick={onClick}>{children}</Wrapper>, root);
}

export default OverlayLayout;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
