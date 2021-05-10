import React, { useCallback } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { Text } from 'components/atom/Box';

import BasicRegist from 'containers/problems/BasicRegist';

function Regist({ history }: RouteComponentProps) {
  const handleSubmit = useCallback(() => {
    history.push('/problems/basic');
  }, [history]);

  return (
    <Wrapper>
      <Text align='center' size='2rem' margin='0 0 3rem 0'>
        기본 문제 등록
      </Text>
      <BasicRegist onSubmit={handleSubmit} />
    </Wrapper>
  );
}

export default Regist;

const Wrapper = styled.div`
  max-width: 80rem;
  width: 100%;
  margin: 3rem auto 0;
`;
