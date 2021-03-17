import React, { useCallback } from 'react';
import styled from 'styled-components';

export interface PropTypes {
  value: Array<string>;
  onChanges: ({ index, value }: { index: number; value: string }) => void;
}

function ExampleForm({ onChanges, value }: PropTypes) {
  const handleChanges = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      onChanges({ index: +name, value: value });
    },
    [onChanges]
  );

  return (
    <Wrapper>
      <div>
        <div>1. </div>
        <Input name='0' value={value[0]} onChange={handleChanges} />
      </div>
      <div>
        <div>2. </div>
        <Input name='1' value={value[1]} onChange={handleChanges} />
      </div>
      <div>
        <div>3. </div>
        <Input name='2' value={value[2]} onChange={handleChanges} />
      </div>
      <div>
        <div>4.</div>
        <Input name='3' value={value[3]} onChange={handleChanges} />
      </div>
    </Wrapper>
  );
}

export default ExampleForm;

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

const Input = styled.input`
  border: 1px solid black;
  width: 100%;
  height: 2rem;
`;
