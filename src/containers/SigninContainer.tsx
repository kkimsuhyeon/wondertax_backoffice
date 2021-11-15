import React, { useCallback } from 'react';
import styled from 'styled-components';

import { requestSignin } from 'apis/auth';

import useSpinner from 'hooks/useSpinner';
import useDialog from 'hooks/useDialog';

import SigninForm, { FormProps } from 'components/signin/Form';
import SignupLink from 'components/signin/SignUpLink';

export interface SigninContainerProps {
  onClickSignin: () => void;
  onClickSignup: () => void;
}

function SigninContainer({ onClickSignin, onClickSignup }: SigninContainerProps) {
  const activeSpinner = useSpinner();
  const activeDialog = useDialog();

  const handleSubmit = useCallback<FormProps['onSubmit']>(async ({ id, password }) => {
    try {
      activeSpinner(true);
      const { jwtToken } = await requestSignin({ email: id, password: password });
      localStorage.setItem('token', jwtToken);
      onClickSignin();
    } catch (e: any) {
      activeDialog({ isOpen: true, title: e.message });
      throw e;
    } finally {
      activeSpinner(false);
    }
  }, []);

  return (
    <Wrapper>
      <SigninForm onSubmit={handleSubmit} />
      <SignupLink onClick={onClickSignup} />
    </Wrapper>
  );
}
export default SigninContainer;

const Wrapper = styled.article`
  background-color: white;
  padding: 3rem;

  & > form {
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
  }
`;
