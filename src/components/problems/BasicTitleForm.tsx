import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Text, Div } from 'components/atom/Box';
import { Input } from 'components/atom/Input';
import DropBox, { PropTypes as DropBoxPropTypes } from 'components/common/DropBox';

interface Values {
  title: string;
  difficult: string;
  answer: string;
}

export interface PropTypes {
  values: Values;
  onChanges: (args: Partial<Values>) => void;
}

function BasicTitleForm({ onChanges, values }: PropTypes) {
  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChanges({ title: e.target.value });
    },
    [onChanges]
  );

  const handleDifficultChange = useCallback<DropBoxPropTypes['onChange']>(
    ({ value }) => {
      onChanges({ difficult: value });
    },
    [onChanges]
  );

  const handleAnswerChange = useCallback<DropBoxPropTypes['onChange']>(
    ({ value }) => {
      onChanges({ answer: value });
    },
    [onChanges]
  );

  const { answer, difficult, title } = values;

  return (
    <Wrapper>
      <Div flex='3'>
        <Text margin='0 0 0.5rem 0'>문제</Text>
        <Input
          value={title}
          onChange={handleTitleChange}
          onKeyDown={(e) => {
            e.stopPropagation();
            if (e.ctrlKey && e.code === 'KeyI') {
              onChanges({ title: title + '<image>' });
            }
          }}
        />
      </Div>
      <Div flex='1'>
        <Text margin='0 0 0.5rem 0'>난이도</Text>
        <DropBox
          value={difficult}
          list={[
            { name: '상', value: 'advanced' },
            { name: '중', value: 'intermediate' },
            { name: '하', value: 'basic' },
          ]}
          onChange={handleDifficultChange}
          count='3'
          height='2rem'
        />
      </Div>
      <Div flex='1'>
        <Text margin='0 0 0.5rem 0'>답</Text>
        <DropBox
          value={answer}
          list={[
            { name: '1번', value: '0' },
            { name: '2번', value: '1' },
            { name: '3번', value: '2' },
            { name: '4번', value: '3' },
          ]}
          onChange={handleAnswerChange}
          count='4'
          height='2rem'
        />
      </Div>
    </Wrapper>
  );
}

export default BasicTitleForm;

const Wrapper = styled.article`
  display: flex;

  & > div {
    margin-right: 2rem;
  }
`;
