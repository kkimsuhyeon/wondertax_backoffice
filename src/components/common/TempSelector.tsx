import React, { useState, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';

export interface PropTypes {
  books: Array<{ name: string; value: string }>;
  chapters: Array<{ name: string; value: string; book: string }>;
  topics: Array<{ name: string; value: string; chapter: string }>;
  titles: Array<string>;
  values: { book: string; chapter: string; topic: string };
  onChanges: (value: any) => void;
}

function MultiSelector({ books, chapters, onChanges, titles, topics, values }: PropTypes) {
  const [selectValue, setSelectValue] = useState<{ book: string; chapter: string; topic: string }>({
    book: '',
    chapter: '',
    topic: '',
  });

  const handleBookChange = useCallback(
    ({ name, value }: { name: string; value: string }) => {
      onChanges({ book: value });
      setSelectValue((prev) => {
        return { ...prev, book: name };
      });
    },
    [onChanges]
  );

  const handleChapterChange = useCallback(
    ({ name, value }: { name: string; value: string }) => {
      onChanges({ chapter: value });
      setSelectValue((prev) => {
        return { ...prev, chapter: name };
      });
    },
    [onChanges]
  );

  const handleTopicChange = useCallback(
    ({ name, value }: { name: string; value: string }) => {
      onChanges({ topic: value });
      setSelectValue((prev) => {
        return { ...prev, topic: name };
      });
    },
    [onChanges]
  );

  useEffect(() => {
    setSelectValue({
      book: books.filter(({ name, value }) => value === values.book)[0]?.name,
      chapter: chapters.filter(({ name, value }) => value === values.chapter)[0]?.name,
      topic: topics.filter(({ name, value }) => value === values.topic)[0]?.name,
    });
  }, [books, chapters, topics, values]);

  return (
    <Wrapper>
      <TitleWrapper></TitleWrapper>
      <SelectWrapper>
        <Section>
          {books.map(({ name, value }) => (
            <Item key={value} select={name === selectValue?.book} onClick={() => handleBookChange({ name: name, value: value })}>
              {name}
            </Item>
          ))}
        </Section>
        <Section>
          {selectValue.book
            ? chapters.map(({ name, value, book }) => {
                if (book === selectValue.book)
                  return (
                    <Item
                      key={value}
                      select={name === selectValue.chapter}
                      onClick={() => handleChapterChange({ name: name, value: value })}
                    >
                      {name}
                    </Item>
                  );
                else return null;
              })
            : null}
        </Section>
        <Section>
          {selectValue.chapter
            ? topics.map(({ name, value, chapter }) => {
                if (chapter === selectValue.chapter)
                  return (
                    <Item key={value} select={name === selectValue.topic} onClick={() => handleTopicChange({ name: name, value: value })}>
                      {name}
                    </Item>
                  );
                else return null;
              })
            : null}
        </Section>
      </SelectWrapper>
    </Wrapper>
  );
}

export default MultiSelector;

const Wrapper = styled.div``;

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
`;

const SelectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Section = styled.section`
  height: 10rem;
  overflow: auto;
  margin-right: 1rem;
  text-align: center;
  margin-top: 0.5rem;

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
