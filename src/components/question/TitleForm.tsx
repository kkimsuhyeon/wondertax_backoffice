import React from 'react';
import styled, { CSSProperties } from 'styled-components';

import DropBox from 'components/common/DropBox';

function TitleForm() {
  return (
    <Wrapper>
      <Div flex='3'>
        <Text>문제</Text>
        <Input />
      </Div>
      <Div flex='1'>
        <Text>난이도</Text>
        <DropBox height='2.5rem' list={[{ name: 'test', value: '0' }]} onChange={() => {}} value='' count='3' />
      </Div>
      <Div flex='1'>
        <Text>답</Text>
        <DropBox height='2.5rem' list={[{ name: 'test', value: '0' }]} onChange={() => {}} value='' count='4' />
      </Div>
    </Wrapper>
  );
}

export default TitleForm;

const Wrapper = styled.div`
  display: flex;
`;

const Text = styled.div`
  margin-bottom: 0.5rem;
`;

const Div = styled.div<{ flex?: CSSProperties['flex'] }>`
  ${({ flex }) => flex && `flex: ${flex}`};
  width: 100%;
  margin-right: 2rem;
`;

const Input = styled.input`
  border: 1px solid black;
  height: 2.5rem;
  width: 100%;
`;
