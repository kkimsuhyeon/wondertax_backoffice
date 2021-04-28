import React from 'react';
import styled from 'styled-components';

import BasicList from 'containers/problems/BasicList';

function List() {
  return (
    <Wrapper>
      <BasicList />
    </Wrapper>
  );
}

export default List;

const Wrapper = styled.div`
  min-width: 90rem;
  width: 100%;
  margin: 0 auto;
`;
