import React from 'react';
import styled, { css } from 'styled-components';

export interface PropTypes {
  isOpen: boolean;
  onClick: () => void;
}

function Header({ isOpen, onClick }: PropTypes) {
  return (
    <Wrapper>
      <Content isOpen={isOpen}>
        <Hamburger onClick={onClick}>
          <div />
          <div />
          <div />
        </Hamburger>
        <Info>
          <Profile>
            <ProfileImg src='images/suhyeon.png' />
          </Profile>
          <div>Hi~ 수현</div>
        </Info>
        <Title>Wondertax Backoffice</Title>
      </Content>
    </Wrapper>
  );
}

export default Header;

const Content = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    background-color: ${theme.lemon};

    ${isOpen &&
    css`
      & > ${Hamburger} {
        width: 0.7rem;
        height: 0.56rem;
        left: 11.3rem;
        & > div {
          &:nth-of-type(1) {
            transform: rotate(-45deg);
          }
          &:nth-of-type(2) {
            display: none;
          }
          &:nth-of-type(3) {
            transform: rotate(45deg);
          }
        }
      }

      & > ${Info} {
        padding-left: 1rem;
        width: 13rem;
      }

      & > ${Title} {
        margin-left: 1rem;
      }
    `};
  `}
`;

const Profile = styled.div`
  width: 45px;
  height: 45px;
`;

const ProfileImg = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const Info = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.white};
    height: 100%;
    width: 0rem;
    overflow: hidden;
    transition: width 0.2s ease-out;
    display: flex;
    align-items: center;
    & > div {
      margin-left: 0.7rem;

      &:first-of-type {
        font-weight: bold;
      }
    }
  `}
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 3.5rem;
  transition: margin-left 0.15s ease-out;
`;

const Hamburger = styled.div`
  ${({ theme }) => css`
    position: absolute;
    z-index: 1;
    left: 1rem;
    width: 1.2rem;
    height: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: left 0.2s ease-out;
    cursor: pointer;

    & > div {
      height: 2px;
      border-radius: 1rem;
      background-color: ${theme.black};
      transition: transform 0.2s ease-out;
    }
  `}
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  border-bottom: 1px solid #eaeaea;
`;
