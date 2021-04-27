import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleIcon from '@material-ui/icons/People';
import TimelineIcon from '@material-ui/icons/Timeline';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export interface PropTypes {
  isOpen: boolean;
}

function SideNav({ isOpen }: PropTypes) {
  return (
    <Wrapper isOpen={isOpen}>
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
      <Menu exact to='/'>
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
    margin-top: 3.5rem;
    overflow: hidden;
    width: ${isOpen ? '10rem' : '3rem'};
    background-color: ${theme.white};
    transition: width 0.15s ease-out;
    border-right: 1px solid #eaeaea;
  `}
`;

const Menu = styled(NavLink)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 1rem 0.7rem 1rem;
    text-decoration: none;
    color: black;

    & > svg {
      margin-right: 2rem;
    }

    &.active {
      background-color: ${theme.lemon};
    }
  `}
`;
