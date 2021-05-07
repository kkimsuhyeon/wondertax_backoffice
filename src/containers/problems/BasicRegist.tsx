import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { Text } from 'components/atom/Box';
import { Input } from 'components/atom/Input';
import { Button } from 'components/atom/Button';

import ChapterForm, { PropTypes as ChapterFormPropTypes } from 'components/problems/ChapterForm';
import BasicTitleForm, { PropTypes as TitleFormPropTypes } from 'components/problems/BasicTitleForm';
import BasicExampleForm, { PropTypes as ExampleFormPropTypes } from 'components/problems/BasicExampleForm';
import BasicCommentForm, { PropTypes as CommentFormPropTypes } from 'components/problems/BasicCommentForm';

import useSpinner from 'hooks/useSpinner';

import { requestProblemRegist } from 'apis/problem';

export interface PropTypes {
  onSubmit: () => void;
}

function BasicRegist({ onSubmit }: PropTypes) {
  const [activeSpinner] = useSpinner();

  const [chapterValues, setChapterValues] = useState<Array<string>>();
  const [titleValues, setTitleValues] = useState<TitleFormPropTypes['values']>({ answer: '', difficult: '', title: '' });
  const [exampleValues, setExampleValues] = useState<ExampleFormPropTypes['values']>({ 0: '', 1: '', 2: '', 3: '' });
  const [commentValue, setCommentValue] = useState<CommentFormPropTypes['value']>('');
  const [isShuffle, setShuffle] = useState<boolean>(true);

  const handleChapterChange = useCallback<ChapterFormPropTypes['onChange']>((value) => {
    setChapterValues(value);
  }, []);

  const handleTitleChanges = useCallback<TitleFormPropTypes['onChanges']>((args) => {
    setTitleValues((prev) => ({ ...prev, ...args }));
  }, []);

  const handleExampleChanges = useCallback<ExampleFormPropTypes['onChanges']>(({ value, index }) => {
    setExampleValues((prev) => {
      const temp = prev;
      temp[index] = value;
      return { ...temp };
    });
  }, []);

  const handleCommentChange = useCallback<CommentFormPropTypes['onChange']>((value) => {
    setCommentValue(value);
  }, []);

  const handleShuffle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setShuffle(checked);
  }, []);

  const handleSubmit = useCallback(async () => {
    const { answer, difficult, title } = titleValues;
    try {
      activeSpinner(true);
      await requestProblemRegist({
        shuffle: isShuffle,
        answerIdx: +answer,
        difficulty: difficult,
        question: title,
        unit: chapterValues?.slice(0, 3) as Array<string>,
        choices: [exampleValues['0'], exampleValues['1'], exampleValues['2']],
        comment: commentValue,
        type: 'A',
        authorId: 1,
      });
      setTitleValues({ title: '', difficult: '', answer: '' });
      setCommentValue('');
      setExampleValues({ '0': '', '1': '', '2': '', '3': '' });
      setShuffle(true);
      onSubmit();
    } catch (e) {
      console.log(e);
      throw e;
    } finally {
      activeSpinner(false);
    }
  }, [isShuffle, titleValues, activeSpinner, chapterValues, exampleValues, commentValue, onSubmit]);

  return (
    <Wrapper>
      <article>
        <ChapterForm onChange={handleChapterChange} />
      </article>
      <article>
        <BasicTitleForm values={titleValues} onChanges={handleTitleChanges} />
      </article>
      <article>
        <Text margin='0 0 1rem 0'>보기 작성</Text>
        <BasicExampleForm values={exampleValues} onChanges={handleExampleChanges} />
      </article>
      <article>
        <Text margin='0 0 1rem 0'>해설 작성</Text>
        <BasicCommentForm value={commentValue} onChange={handleCommentChange} />
      </article>
      <article className='suffle'>
        <Text as='label' htmlFor='suffle' margin='0 0.5rem 0 0'>
          셔플 여부
        </Text>
        <Input type='checkbox' checked={isShuffle} onChange={handleShuffle} id='suffle' width='1rem' height='1rem' />
      </article>
      <article className='submit'>
        <Button status='active' onClick={handleSubmit} width='5rem' margin='0 0 0 auto'>
          제출
        </Button>
      </article>
    </Wrapper>
  );
}

export default BasicRegist;

const Wrapper = styled.div`
  & > article {
    margin-bottom: 1.5rem;

    &.suffle {
      display: flex;
      align-items: center;
    }

    &.submit {
      text-align: right;
    }
  }
`;
