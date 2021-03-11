import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface PropTypes {
  books: Array<{ name: string; value: number }>;
  chapters: Array<{ name: string; value: number; book: string }>;
  topics: Array<{ name: string; value: number; chapter: string }>;
  details: Array<{ name: string; value: number; topic: string }>;
  titles: Array<string>;
  onChange: (value: Array<number>) => void;
}

function MultiSelector({ books, chapters, topics, details, titles, onChange }: PropTypes) {
  const [book, setBook] = useState<{ name: string; value: number }>();
  const [chapter, setChapter] = useState<{ name: string; value: number }>();
  const [topic, setTopic] = useState<{ name: string; value: number }>();
  const [detail, setDetail] = useState<{ name: string; value: number }>();

  const handleBookChange = useCallback((value: { name: string; value: number }) => {
    setBook(value);
  }, []);

  const handleChapterChange = useCallback((value: { name: string; value: number }) => {
    setChapter(value);
  }, []);

  const handleTopicChange = useCallback((value: { name: string; value: number }) => {
    setTopic(value);
  }, []);

  const handleDetailChange = useCallback(
    (value: { name: string; value: number }) => {
      setDetail(value);
      onChange([book?.value as number, chapter?.value as number, topic?.value as number, value.value]);
    },
    [book, chapter, topic, onChange]
  );

  return (
    <Wrapper>
      <TitleWrapper>
        {titles.map((title) => (
          <div key={title}>{title}</div>
        ))}
      </TitleWrapper>
      <SelectWrapper>
        <Section>
          {books.map((item) => {
            return (
              <Item key={item.name} select={item.value === book?.value} onClick={() => handleBookChange(item)}>
                {item.name}
              </Item>
            );
          })}
        </Section>
        <Section>
          {chapters.map((item) => {
            if (book?.name === item.book)
              return (
                <Item select={item.value === chapter?.value} onClick={() => handleChapterChange(item)}>
                  {item.name}
                </Item>
              );
          })}
        </Section>
        <Section>
          {topics.map((item) => {
            if (chapter?.name === item.chapter)
              return (
                <Item select={item.value === topic?.value} onClick={() => handleTopicChange(item)}>
                  {item.name}
                </Item>
              );
          })}
        </Section>
        <Section>
          {details.map((item) => {
            if (topic?.name === item.topic)
              return (
                <Item select={item.value === detail?.value} onClick={() => handleDetailChange(item)}>
                  {item.name}
                </Item>
              );
          })}
        </Section>
      </SelectWrapper>
    </Wrapper>
  );
}

export default MultiSelector;

const Wrapper = styled.div``;

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
`;

const SelectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Section = styled.section`
  height: 10rem;
  overflow: auto;
  margin-right: 1rem;

  &::-webkit-scrollbar {
    width: 5px;
    &-thumb {
      border-radius: 0.36rem;
      background-color: #fff44f;
    }
    &-track {
      background-color: transparent;
    }
  }
  & > div {
    margin-bottom: 0.8rem;
    font-size: 0.9rem;
  }
`;

const Item = styled.div<{ select?: boolean }>`
  ${({ select }) =>
    select &&
    css`
      text-decoration: underline;
      text-underline-position: under;
    `}
`;
