import React, { useCallback, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { RootState } from 'modules';
import useDialog from 'hooks/useDialog';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import styled from 'styled-components';

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

function Dialog() {
  const { isOpen, title } = typedUseSelector(({ dialog }) => dialog);

  const activeDialog = useDialog();

  const overlayRef = useRef<HTMLDivElement>(null);
  const mouseDownedTarget = useRef<HTMLElement>();

  const closeDialog = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent) => {
      e.stopPropagation();
      activeDialog({ isOpen: false });
    },
    [activeDialog]
  );

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    mouseDownedTarget.current = e.target as HTMLElement;
  }, []);

  const onMouseUp = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as HTMLElement) === overlayRef.current && mouseDownedTarget.current === overlayRef.current) closeDialog(e);
      mouseDownedTarget.current = undefined;
    },
    [closeDialog]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') closeDialog(e);
    },
    [closeDialog]
  );

  useEffect(() => {
    overlayRef.current?.focus();
  }, [isOpen]);

  return createPortal(
    <OutLayout ref={overlayRef} tabIndex={0} isOpen={isOpen} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onKeyDown={onKeyDown}>
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
