import React, { useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

import SigninContainer from 'containers/SigninContainer';

function Signin({ history }: RouteComponentProps) {
  const handleLinkClick = useCallback(() => {
    history.push('/signup');
  }, [history]);

  const handleSignIn = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Wrapper>
      <SigninContainer onClickSignin={handleSignIn} onClickSignup={handleLinkClick} />
    </Wrapper>
  );
}

export default Signin;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
