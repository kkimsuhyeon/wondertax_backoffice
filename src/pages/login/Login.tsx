import React, { useState } from 'react';
import styled, { CSSProperties } from 'styled-components';

function LogIn() {
  const [id, setId] = useState('');
  const handleIdChanges = (e: any) => {
    setId(e.target.value);
  };
  return (
    <Wrapper>
      <Div flex='1'>
        <Logo>Wondertax</Logo>
        <LoginForm>
          <Label>Email Address </Label>
          <Input placeholder='id' onChange={handleIdChanges} />

          <Label>Password </Label>
          <Input placeholder='password' onChange={handleIdChanges} />
          <Button type='submit'>Log In</Button>
        </LoginForm>
        <Join>
          Don&apos;t have an account? <a href='/'>Sing up</a>
        </Join>
      </Div>
    </Wrapper>
  );
}

export default LogIn;

const Wrapper = styled.div`
  max-width: 900px;
  display: flex;
  margin: 0 auto;
`;

const Div = styled.div<{ flex?: CSSProperties['flex'] }>`
  ${({ flex }) => flex && `flex: ${flex}`};
  width: 100%;
  margin-right: 2rem;

  &:last-child {
    margin-right: initial;
  }
  > img {
    width: 100%;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

const LoginForm = styled.form`
  margin: 0 auto;
  border-bottom: 1px solid rgba(160, 160, 160, 0.3);
  height: 225px;
  max-width: 340px;
`;

const Input = styled.input`
  border: 1px solid rgba(160, 160, 160, 0.3);
  height: 2.6rem;
  width: 100%;
  border-radius: 7px;
  color: #999;
  font-size: 1rem;
  padding-left: 1.2rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 7px;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;

const Button = styled.button`
  background-color: #ffef61;
  width: 100%;
  height: 2.5rem;
  border-radius: 7px;
  color: #444;
  font-weight: bold;
  &:hover {
    box-shadow: 2px 2px 4px 2px rgba(165, 165, 165, 0.1);
  }
`;

const Join = styled.p`
  width: 340px;
  margin: 0 auto;
  color: #666;
  margin-top: 1rem;
  > a {
    text-decoration: none;
    color: #ffe600;
    text-shadow: rgba(165, 165, 165, 1);
  }
`;
