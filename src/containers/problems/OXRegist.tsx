import React from 'react';
import styled from 'styled-components';

import BasicSubmitButtons from 'components/problems/BaiscSubmitButtons';

function OXRegist() {
  return (
    <Wrapper>
      <article></article>
      <article></article>
      <article></article>
      <article>
        <BasicSubmitButtons onFileUpload={() => {}} onSubmit={() => {}} />
      </article>
    </Wrapper>
  );
}

export default OXRegist;

const Wrapper = styled.div`
  & > article {
    margin-bottom: 1.5rem;
  }
`;
