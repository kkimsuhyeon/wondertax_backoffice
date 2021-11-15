import React from 'react';
import styled from 'styled-components';

export interface SignupLinkProps {
  onClick: () => void;
}

function SignUpLink({ onClick }: SignupLinkProps) {
  return (
    <Text>
      {`Don't have an account?`}
      <span onClick={onClick}>Sign Up</span>
    </Text>
  );
}

export default SignUpLink;

const Text = styled.div`
  & > span {
    margin-left: 0.6rem;
    color: ${({ theme }) => theme.yellow};
    cursor: pointer;
  }
`;
