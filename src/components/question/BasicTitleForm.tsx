import React, { useCallback } from 'react';
import styled, { CSSProperties } from 'styled-components';

import DropBox, { PropTypes as DropBoxPropTypes } from 'components/common/DropBox';

interface Values {
  title: string;
  difficult: string;
  answer: string;
}

export interface PropTypes {
  values: Values;
  onChanges: (partial: Partial<Values>) => void;
}

function TitleForm({ onChanges, values }: PropTypes) {
  const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChanges({ title: e.target.value });
  };

  const handleDifficultChanges = useCallback<DropBoxPropTypes['onChange']>(
    ({ value }) => {
      onChanges({ difficult: value });
    },
    [onChanges]
  );

  const handleAnswerChanges = useCallback<DropBoxPropTypes['onChange']>(
    ({ value }) => {
      onChanges({ answer: value });
    },
    [onChanges]
  );

  const { answer, difficult, title } = values;

  return (
    <Wrapper>
      <Div flex='3'>
        <Text>문제</Text>
        <Input value={title} onChange={handleInputChanges} />
      </Div>
      <Div flex='1'>
        <Text>난이도</Text>
        <DropBox
          value={difficult}
          height='2.5rem'
          list={[
            { name: '상', value: 'advanced' },
            { name: '중', value: 'intermediate' },
            { name: '하', value: 'basic' },
          ]}
          onChange={handleDifficultChanges}
          count='3'
        />
      </Div>
      <Div flex='1'>
        <Text>답</Text>
        <DropBox
          value={answer}
          height='2.5rem'
          list={[
            { name: '1번', value: '0' },
            { name: '2번', value: '1' },
            { name: '3번', value: '2' },
            { name: '4번', value: '3' },
          ]}
          onChange={handleAnswerChanges}
          count='4'
        />
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

  &:last-child {
    margin-right: initial;
  }
`;

const Input = styled.input`
  border: 1px solid black;
  height: 2.5rem;
  width: 100%;
`;
