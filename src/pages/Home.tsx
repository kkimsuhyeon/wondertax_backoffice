import React from 'react';
import styled from 'styled-components';

function Home() {
  const Register = [
    {
      type: 'Basic',
      url: '/problems/basic/regist',
    },
    {
      type: 'OX',
      url: '/problems/ox/regist',
    },
    {
      type: 'Blank',
      url: '/problems/blank/regist',
    },
  ];

  return (
    <Wrapper>
      <Card>
        <BoxTitle>문제 등록</BoxTitle>
        <BoxContent>
          <List>
            Basic
            <a href='/problems/basic/regist'>
              <RegisterButton>등록하기</RegisterButton>
            </a>
          </List>
          <List>
            OX
            <a href='/problems/ox/regist'>
              <RegisterButton>등록하기</RegisterButton>
            </a>
          </List>
          <List>
            Blank
            <a href='/problems/blank/regist'>
              <RegisterButton>등록하기</RegisterButton>
            </a>
          </List>
        </BoxContent>
      </Card>
      {/* <PageTitle>문제 등록</PageTitle>
      <ul>
        <List>
          <a href='/problems/basic/regist'>베이직 문제 등록</a>
        </List>
        <List>
          <a href='/problems/ox/regist'>ox 문제 등록</a>
        </List>
      </ul> */}
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const Card = styled.div`
  margin-top: 2rem;
  width: 25%;
  height: 400px;
  border-radius: 1.5rem;
  background-color: white;
  box-shadow: 2px 2px 4px 2px rgba(139, 139, 139, 0.2);
`;

const BoxTitle = styled.p`
  font-size: 1.3rem;
  text-align: center;
  font-weight: bold;
  padding-top: 2.5rem;
`;

const BoxContent = styled.ul`
  padding: 2.8rem;
`;

const List = styled.li`
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.3rem;
  & > a {
    color: #333;
    text-decoration: none;
    line-height: 1;
  }
`;

const RegisterButton = styled.button`
  font-size: 0.9rem;
  width: 90px;
  height: 38px;
  border-radius: 7px;
  background-color: #fae423;
  &:hover {
    box-shadow: 2px 2px 4px 2px rgba(129, 129, 128, 0.2);
  }
`;
