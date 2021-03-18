import React from 'react';
import styled from 'styled-components';

interface ListItem {
  question: string;
  unit: Array<string>;
}

export interface PropTypes {
  list?: Array<ListItem>;
  onClick?: (value: ListItem) => void;
}

function ListComponent({ list }: PropTypes) {
  return (
    <Wrapper>
      <Row>
        <div>제목</div>
        <div>내용</div>
      </Row>
      <Content>
        {list?.map((item, index) => (
          <Row key={index}>
            <div>{item.question ?? '-'}</div>
            <div>{item.unit ?? '-'}</div>
          </Row>
        ))}
      </Content>
    </Wrapper>
  );
}

export default ListComponent;

const Wrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  line-height: 2rem;
  & > div {
    &:first-child {
      flex: 1;
    }
    &:last-child {
      flex: 2;
    }
  }
`;

const Content = styled.div`
  & > div {
    border-top: 1px solid black;
    border-left: 1px solid black;
    &:last-child {
      border-bottom: 1px solid black;
    }
    & > div {
      border-right: 1px solid black;
    }
  }
`;
