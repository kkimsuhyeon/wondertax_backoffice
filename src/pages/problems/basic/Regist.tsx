import React from 'react';
import styled from 'styled-components';

import { Text } from 'components/atom/Box';

import BasicRegist from 'containers/problems/BasicRegist';

function Regist() {
  return (
    <Wrapper>
      <Text align='center' size='2rem' margin='0 0 3rem 0'>
        기본 문제 등록
      </Text>
      <BasicRegist />
    </Wrapper>
  );
}

export default Regist;

const Wrapper = styled.div`
  max-width: 80rem;
  width: 100%;
  margin: 3rem auto 0;
`;
