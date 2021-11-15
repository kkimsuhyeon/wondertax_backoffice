import React, { useCallback } from 'react';
import { RootState } from 'modules';
import useDialog from 'hooks/useDialog';
import { createPortal } from 'react-dom';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import styled from 'styled-components';

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

function Dialog() {
  const { isOpen, title } = typedUseSelector(({ dialog }) => dialog);

  const activeDialog = useDialog();

  const closeDialog = useCallback(() => {
    activeDialog({ isOpen: false });
  }, [activeDialog]);

  return createPortal(
    <OutLayout isOpen={isOpen} onClick={closeDialog}>
      <Wrapper>{title}</Wrapper>
    </OutLayout>,
    document.body
  );
}

export default Dialog;

const OutLayout = styled.div<{ isOpen: boolean }>`
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

const Wrapper = styled.div`
  background-color: white;
  padding: 2rem;
`;
