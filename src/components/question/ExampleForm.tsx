import React from 'react';
import styled from 'styled-components';

function ExampleForm() {
  return (
    <Wrapper>
      <div>
        <div>1. </div>
        <Input />
      </div>
      <div>
        <div>2. </div>
        <Input />
      </div>
      <div>
        <div>3. </div>
        <Input />
      </div>
      <div>
        <div>4.</div>
        <Input />
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
