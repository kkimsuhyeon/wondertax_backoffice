import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleIcon from '@material-ui/icons/People';
import TimelineIcon from '@material-ui/icons/Timeline';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import useDialog from 'hooks/useDialog';

export interface PropTypes {
  isOpen: boolean;
}

function SideNav({ isOpen }: PropTypes) {
  const history = useHistory();
  const activeDialog = useDialog();

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    history.push('/signin');
    activeDialog({ isOpen: true, title: '정상적 로그아웃' });
  }, [history, activeDialog]);

  return (
    <Wrapper isOpen={isOpen}>
      <Menu exact to='/'>
        <DashboardIcon />
        Dashboard
      </Menu>
      <Menu to='/problems'>
        <MenuBookIcon />
        Problems
      </Menu>
      <Menu to='/user'>
        <PeopleIcon />
        User
      </Menu>
      <Menu to='/analytics'>
        <TimelineIcon />
        Analytics
      </Menu>
      <Menu to='/setting'>
        <SettingsIcon />
        Setting
      </Menu>
      <Menu exact to='/logout' onClick={handleLogout}>
        <ExitToAppIcon />
        Logout
      </Menu>
    </Wrapper>
  );
}

export default SideNav;

const Wrapper = styled.div<{ isOpen: boolean }>`
  ${({ isOpen, theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    margin-top: 3.9rem;
    overflow: hidden;
    width: ${isOpen ? '13rem' : '4rem'};
    background-color: ${theme.subBlack};
    transition: width 0.15s ease-out;
    border-right: 1px solid #eaeaea;
  `}
`;

const Menu = styled(NavLink)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 1rem 1.2rem 1rem;
    text-decoration: none;
    color: ${theme.white};

    & > svg {
      margin-right: 2rem;
    }

    &.active {
      background-color: ${theme.yellow};
      color: ${theme.black};
    }
  `}
`;
