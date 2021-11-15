import React, { useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

import Img from 'image/lemon.png';

import SignUpLink from 'components/login/SignUpLink';

import LoginForm from 'containers/LoginForm';

function Signin({ history }: RouteComponentProps) {
  const handleLinkClick = useCallback(() => {
    history.push('/signup');
  }, [history]);

  const handleSignIn = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Wrapper>
      <Title>Wondertax</Title>
      <Image src={Img} />
      <Article>
        <LoginForm onSubmit={handleSignIn} />
        <SignUpLink onClick={handleLinkClick} />
      </Article>
    </Wrapper>
  );
}

export default Signin;

const Wrapper = styled.div`
  max-width: 30rem;
  height: 100%;
  margin: 0 auto;
  box-shadow: 2px 2px 4px 2px rgba(165, 165, 165, 0.1);
  border-radius: 3rem;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 3rem 5rem;
  margin-top: 10%;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  display: block;
  width: 12rem;
  margin: 0 auto;
`;

const Article = styled.div`
  & > form {
    padding-bottom: 2rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.blackGray};
  }
`;
