import React from 'react';
import styled from 'styled-components';

import { Text } from 'components/atom/Box';

import OXRegist from 'containers/problems/OXRegist';

function Regist() {
  return (
    <Wrapper>
      <Text align='center' size='2rem' margin='0 0 3rem 0'>
        OX 문제 등록
      </Text>
      <OXRegist />
    </Wrapper>
  );
}

export default Regist;

const Wrapper = styled.div`
  max-width: 80rem;
  margin: 3rem auto 0;
  width: 100%;
`;
