import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';

import Header from './Header';
import SideNav from './SideNav';

function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <>
      <Header isOpen={open} onClick={handleOpen} />
      <SideNav isOpen={open} />
      <Main isOpen={open}>{children}</Main>
    </>
  );
}

export default Layout;

const Main = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    margin-top: 3.5rem;
    padding: 1rem;
    margin-left: ${isOpen ? '10rem' : '3rem'};
    background-color: ${theme.whiteGray};
    transition: margin-left 0.2s ease-out;
  `}
`;
