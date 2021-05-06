import React from 'react';
import { useRecoilValue } from 'recoil';
import styled, { keyframes, css } from 'styled-components';

import OverlayLayout from 'components/Layout/OverlayLayout';

import { activeSpinner } from 'store/spinner';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg);}
`;

function Spinner() {
  const isActive = useRecoilValue(activeSpinner);

  return (
    <OverlayLayout isOpen={isActive} onClick={() => {}}>
      <Spin />
    </OverlayLayout>
  );
}

export default Spinner;

const Spin = styled.div`
  width: 5rem;
  height: 5rem;
  ${({ theme }) => css`
    border: 0.2rem solid ${theme.white};
    border-top: 0.2rem solid ${theme.lemon};
  `}
  border-radius: 50%;
  animation: ${spin} 0.7s infinite linear;
  translate: all 0.2s;
`;
