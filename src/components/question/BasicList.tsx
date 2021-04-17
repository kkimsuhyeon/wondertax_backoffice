import React from 'react';
import styled, { css } from 'styled-components';

import { Div, Flex } from 'components/atom/Box';

interface ListItem {
  question: string;
  choices: Array<string>;
  createTime: string;
  difficulty: string;
  id: string;
  unit: Array<number>;
  type: string;
  shuffle: boolean;
  answer: number;
}

export interface PropTypes {
  list?: Array<ListItem>;
  onClick: (value: ListItem) => void;
}

function BasicList({ list, onClick }: PropTypes) {
  return (
    <Border>
      <Flex>
        <Div flex='2'>문제</Div>
        <Div flex='2'>보기1</Div>
        <Div flex='2'>보기2</Div>
        <Div flex='2'>보기3</Div>
        <Div flex='2'>보기4</Div>
        <Div flex='0.5'>난이도</Div>
        <Div flex='0.5'>답</Div>
      </Flex>
      {list?.map((item) => (
        <Flex key={item.id} onClick={() => onClick(item)}>
          <Div flex='2'>{item.question}</Div>
          {item.choices.map((choice) => (
            <Div flex='2' key={choice}>
              {choice}
            </Div>
          ))}
          <Div flex='0.5'>
            {(() => {
              if (item.difficulty === 'advanve') return '상';
              if (item.difficulty === 'intermediate') return '중';
              if (item.difficulty === 'basic') return '하';
            })()}
          </Div>
          <Div flex='0.5'>{item.answer}</Div>
        </Flex>
      ))}
    </Border>
  );
}

export default BasicList;

const Wrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const Border = styled.div`
  border-top: 1px solid black;
  border-left: 1px solid black;
  & > div > div {
    line-height: 2rem;
    text-align: center;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }
`;
