import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Input } from 'components/atom/Input';
import { Text } from 'components/atom/Box';
import { Button } from 'components/atom/Button';
import useInput from 'hooks/useInput';

export interface PropTypes {
  onSubmit: ({ id, password }: { id: string; password: string }) => void;
}

function Form({ onSubmit }: PropTypes) {
  const [id, handleId] = useInput({ initialValue: '' });
  const [password, handlePassword] = useInput({ initialValue: '' });

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({ id: id, password: password });
    },
    [onSubmit, id, password]
  );

  return (
    <Wrapper as='form' onSubmit={handleSubmit}>
      <Text margin='0 0 0.5rem 0'>Email Address</Text>
      <Input value={id} onChange={handleId} placeholder='id' height='2.6rem' margin='0 0 1.5rem 0' />
      <Text margin='0 0 0.5rem 0'>Password</Text>
      <Input value={password} onChange={handlePassword} type='password' placeholder='password' height='2.6rem' margin='0 0 1.5rem 0' />
      <Button type='submit' status='active' height='2.5rem' weight='bold'>
        Log In
      </Button>
    </Wrapper>
  );
}

export default Form;

const Wrapper = styled.div`
  margin: 0 auto;
`;
