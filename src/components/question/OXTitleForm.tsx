import React, { useCallback } from 'react';
import styled, { CSSProperties } from 'styled-components';

import DropBox, { PropTypes as DropBoxPropTypes } from 'components/common/DropBox';

interface Values {
  title?: string;
  answer: string;
}

export interface PropTypes {
  values: Values;
  onChanges: (partial: Partial<Values>) => void;
}

function OXTitleForm({ values, onChanges }: PropTypes) {
  const handleInputChanges = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChanges({ title: e.target.value });
    },
    [onChanges]
  );

  const handleAnswerChanges = useCallback<DropBoxPropTypes['onChange']>(
    ({ value }) => {
      onChanges({ answer: value });
    },
    [onChanges]
  );

  const { answer, title } = values;

  return (
    <Wrapper>
      <Div flex='3'>
        <Text>문제</Text>
        <Input value={title} onChange={handleInputChanges} />
      </Div>
      <Div flex='1'>
        <Text>답</Text>
        <DropBox value={answer} onChange={handleAnswerChanges} count='2' list={[]} height='2.5rem' />
      </Div>
    </Wrapper>
  );
}

export default OXTitleForm;

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
