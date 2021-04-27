import React, { useCallback, useState } from 'react';
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

function OXTitleForm({ values, onChanges }: PropTypes) {
  const [oxChecked, setOxChecked] = useState('O');
  const handleInputChanges = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChanges({ title: e.target.value });
    },
    [onChanges]
  );

  const handleOXCheckedChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setOxChecked(e.target.value);
  }, []);

  const handleDifficultChanges = useCallback<DropBoxPropTypes['onChange']>(
    ({ value }) => {
      onChanges({ difficult: value });
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

        <RadioInput
          type='radio'
          id='ochecked'
          name='oxchecked'
          value='O'
          checked={oxChecked === 'O' ? true : false}
          onChange={handleOXCheckedChange}
        />
        <Label htmlFor='ochecked'>O</Label>

        <RadioInput
          type='radio'
          id='xchecked'
          name='oxchecked'
          value='X'
          checked={oxChecked === 'X' ? true : false}
          onChange={handleOXCheckedChange}
        />
        <Label htmlFor='xchecked'>X</Label>
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

const RadioInput = styled.input`
  width: 2rem;
  margin-top: 0.5rem;
`;

const Label = styled.label`
  user-select: none;
`;
