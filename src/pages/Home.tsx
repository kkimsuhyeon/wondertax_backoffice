import React, { useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

function Home({ history }: RouteComponentProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { id } = e.target as HTMLElement;
      history.push(id);
    },
    [history]
  );

  return (
    <Wrapper>
      <Card>
        <Title>문제 등록</Title>
        <Content>
          <div>
            Basic
            <Button id='/problems/basic/regist' onClick={handleClick}>
              등록하기
            </Button>
          </div>
          <div>
            OX
            <Button id='/problems/basic/regist' onClick={handleClick}>
              등록하기
            </Button>
          </div>
          <div>
            Blank
            <Button id='/problems/basic/regist' onClick={handleClick}>
              등록하기
            </Button>
          </div>
        </Content>
      </Card>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  max-width: 90rem;
  margin: 2rem auto 0;
`;

const Card = styled.div`
  width: 280px;
  height: 400px;
  border-radius: 1.5rem;
  background-color: white;
  box-shadow: 2px 2px 4px 2px rgba(172, 166, 166, 0.2);
  padding: 2.5rem;
`;

const Title = styled.div`
  font-size: 1.3rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  & > div {
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Button = styled.button`
  font-size: 0.9rem;
  width: 90px;
  height: 38px;
  border-radius: 7px;
  background-color: #fae423;
  &:hover {
    box-shadow: 2px 2px 4px 2px rgba(129, 129, 128, 0.2);
  }
`;
