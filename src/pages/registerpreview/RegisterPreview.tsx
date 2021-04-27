import React from 'react';
import styled from 'styled-components';

function RegisterePreview() {
  return (
    <Wrapper>
      <PageTitle>문제 등록</PageTitle>
      <ul>
        <List>
          <a href='/problems/basic/regist'>베이직 문제 등록</a>
        </List>
        <List>
          <a href='/problems/ox/regist'>ox 문제 등록</a>
        </List>
      </ul>
    </Wrapper>
  );
}

export default RegisterePreview;

const Wrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const PageTitle = styled.p`
  font-size: 1.8rem;
  text-align: center;
  font-weight: bold;
  padding: 2rem;
`;

const List = styled.li`
  font-size: 3rem;
  text-align: center;
  margin-top: 5rem;
`;
