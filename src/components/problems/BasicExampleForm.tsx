import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Input } from 'components/atom/Input';

export interface PropTypes {
  values: { 0: string; 1: string; 2: string; 3: string };
  onChanges: ({ index, value }: { index: string; value: string }) => void;
}

function BasicExampleForm({ onChanges, values }: PropTypes) {
  const handleChanges = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      onChanges({ index: name, value: value });
    },
    [onChanges]
  );

  return (
    <Wrapper>
      <div>
        <div>1. </div>
        <Input name='0' value={values['0']} onChange={handleChanges} />
      </div>
      <div>
        <div>2. </div>
        <Input name='1' value={values['1']} onChange={handleChanges} />
      </div>
      <div>
        <div>3. </div>
        <Input name='2' value={values['2']} onChange={handleChanges} />
      </div>
      <div>
        <div>4. </div>
        <Input name='3' value={values['3']} onChange={handleChanges} />
      </div>
    </Wrapper>
  );
}

export default BasicExampleForm;

const Wrapper = styled.div`
  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    & > div:first-child {
      margin-right: 1rem;
    }
  }
`;
