import React, { useCallback } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import BasicList from 'containers/problems/BasicList';

function List({ history }: RouteComponentProps) {
  const handleClick = useCallback((args) => history.push(`/problems/basic/${args.id}`), [history]);

  return (
    <Wrapper>
      <BasicList onClick={handleClick} />
    </Wrapper>
  );
}

export default List;

const Wrapper = styled.div`
  min-width: 90rem;
  width: 100%;
  margin: 0 auto;
`;
