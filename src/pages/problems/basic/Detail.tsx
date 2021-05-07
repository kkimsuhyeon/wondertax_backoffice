import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import { Text } from 'components/atom/Box';

import BasicDetail from 'containers/problems/BasicDetail';

function Detail({
  history,
  match: {
    params: { basicId },
  },
}: RouteComponentProps<{ basicId: string }>) {
  return (
    <Wrapper>
      <Text align='center' size='2rem' margin='0 0 3rem 0'>
        기본 문제 수정
      </Text>
      <BasicDetail id={basicId} />
    </Wrapper>
  );
}

export default Detail;

const Wrapper = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`;
