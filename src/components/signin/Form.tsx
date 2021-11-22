import React, { useCallback } from 'react';
import styled from 'styled-components';

import useInput from 'hooks/useInput';

export interface FormProps {
  onSubmit: ({ id, password }: { id: string; password: string }) => void;
}

function Form({ onSubmit }: FormProps) {
  const [id, setId] = useInput({ initialValue: '' });
  const [password, setPassword] = useInput({ initialValue: '' });

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({ id, password });
    },
    [id, password, onSubmit]
  );

  return (
    <Wrapper onSubmit={handleSubmit}>
      <div>
        <label>아이디</label>
        <input placeholder='아이디' value={id} onChange={setId} />
      </div>
      <div>
        <label>패스워드</label>
        <input type='password' placeholder='패스워드' value={password} onChange={setPassword} />
      </div>
      <button type='submit'>로그인</button>
    </Wrapper>
  );
}

export default Form;

const Wrapper = styled.form`
  padding: 1rem;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;

    & > input {
      border: 1px solid black;
      padding: 0.3rem 0.5rem;
      border-radius: 0.35rem;
    }
  }

  & > button {
    width: 100%;
  }
`;
