import useInput from 'hooks/useInput';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import { requestSignup } from 'apis/auth';
import useSpinner from 'hooks/useSpinner';
import { RouteComponentProps } from 'react-router';
import useDialog from 'hooks/useDialog';

function Signup({ history }: RouteComponentProps) {
  const [name, setName] = useInput({ initialValue: '' });
  const [email, setEmail] = useInput({ initialValue: '' });
  const [password, setPassword] = useInput({ initialValue: '' });

  const activeSpinner = useSpinner();
  const activeDialog = useDialog();

  const handleSubmit = useCallback(
    async (e: React.FormEvent | React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      try {
        activeSpinner(true);
        await requestSignup({ name, email, password });
        history.push('/signin');
      } catch (e: any) {
        activeDialog({ isOpen: true, title: e.message as string });
        // throw e;
      } finally {
        activeSpinner(false);
      }
    },
    [activeSpinner, name, email, password, history, activeDialog]
  );

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>이름</label>
          <input id='name' value={name} onChange={setName} />
        </div>
        <div>
          <label htmlFor='email'>이메일</label>
          <input id='email' value={email} onChange={setEmail} />
        </div>
        <div>
          <label htmlFor='password'>패스워드</label>
          <input id='password' value={password} onChange={setPassword} />
        </div>
        <button type='submit'>제출</button>
      </Form>
    </Wrapper>
  );
}

export default Signup;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Form = styled.form`
  background-color: ${({ theme }) => theme.lemon};
  padding: 2.5rem;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;

    & > input {
      padding: 0.3rem 0.5rem;
      margin-left: 0.5rem;
    }
  }

  & > button {
    width: 100%;
    background-color: white;
    padding: 0.5rem;
  }
`;
