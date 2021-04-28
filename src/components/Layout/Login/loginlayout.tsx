import React from 'react';
import styled, { css } from 'styled-components';

function LogInLayout({ children }: any) {
  return <Wrapper>{children}</Wrapper>;
}

export default LogInLayout;

const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.whiteGray};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `}
`;
