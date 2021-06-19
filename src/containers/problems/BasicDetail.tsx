import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';

import useSpinner from 'hooks/useSpinner';

import { Text } from 'components/atom/Box';
import { Input } from 'components/atom/Input';

import { requestProblemDetail, requestProblemModify, requestDelete } from 'apis/problem';

import TitleForm, { PropTypes as TitleFormPropTypes } from 'components/problems/BasicTitleForm';
import ExampleForm, { PropTypes as ExampleFormPropTypes } from 'components/problems/BasicExampleForm';
import CommentForm, { PropTypes as CommentFormPropTypes } from 'components/problems/BasicCommentForm';
import { Button } from 'components/atom/Button';
import ChapterForm from 'components/problems/ChapterForm';

export interface PropTypes {
  id: string;
  onToList: () => void;
}

function BasicDetail({ id, onToList }: PropTypes) {
  const activeSpinner = useSpinner();

  const [chapterValues, setChapterValuse] = useState({ book: '', chapter: '', topic: '' });
  const [titleValues, setTitleValues] = useState<TitleFormPropTypes['values']>({ answer: '', difficult: '', title: '' });
  const [exampleValues, setExampleValues] = useState<ExampleFormPropTypes['values']>({ '0': '', '1': '', '2': '', '3': '' });
  const [commentValue, setCommentValue] = useState<CommentFormPropTypes['value']>('');
  const [isShuffle, setShuffle] = useState<boolean>(true);

  const handleChapterChanges = useCallback((args: any) => {
    setChapterValuse((prev) => ({ ...prev, ...args }));
  }, []);

  const handleTitleChanges = useCallback<TitleFormPropTypes['onChanges']>((args) => {
    setTitleValues((prev) => ({ ...prev, ...args }));
  }, []);

  const handleExampleChanges = useCallback<ExampleFormPropTypes['onChanges']>(({ index, value }) => {
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

  const handleUpdate = useCallback(async () => {
    try {
      activeSpinner(true);
      const { entityData } = await requestProblemDetail({ id: id });
      setChapterValuse({ book: String(entityData.unit[0]), chapter: String(entityData.unit[1]), topic: String(entityData.unit[2]) });
      setTitleValues({ answer: String(entityData.answerIdx), difficult: entityData.difficulty, title: entityData.question });
      setExampleValues({ '0': entityData.choices[0], '1': entityData.choices[1], '2': entityData.choices[2], '3': entityData.choices[3] });
      setCommentValue(entityData.commentary);
      setShuffle(entityData.shuffle);
    } catch (e) {
      console.log(e);
    } finally {
      activeSpinner(false);
    }
  }, [id, activeSpinner]);

  const handleSubmit = useCallback(async () => {
    try {
      activeSpinner(true);
      await requestProblemModify({
        id: id,
        answerIdx: +titleValues.answer,
        authorId: 1,
        choices: [exampleValues[0], exampleValues[1], exampleValues[2], exampleValues[3]],
        comment: commentValue,
        difficulty: titleValues.difficult,
        question: titleValues.title,
        shuffle: isShuffle,
        type: 'A',
        unit: [chapterValues.book, chapterValues.chapter, chapterValues.topic],
      });
    } catch (e) {
      console.log(e);
    } finally {
      activeSpinner(false);
    }
  }, [activeSpinner, titleValues, exampleValues, commentValue, isShuffle, id, chapterValues]);

  const handleDelete = useCallback(async () => {
    try {
      activeSpinner(true);
      await requestDelete(id);
      onToList();
    } catch (e) {
      console.log(e);
    } finally {
      activeSpinner(false);
    }
  }, []);

  useEffect(() => {
    handleUpdate();
  }, [handleUpdate]);

  return (
    <Wrapper>
      <article>
        <ChapterForm values={chapterValues} onChange={handleChapterChanges} />
      </article>
      <article>
        <TitleForm values={titleValues} onChanges={handleTitleChanges} />
      </article>
      <article>
        <Text margin='0 0 1rem 0'>보기 작성</Text>
        <ExampleForm values={exampleValues} onChanges={handleExampleChanges} />
      </article>
      <article>
        <Text margin='0 0 1rem 0'>해설 작성</Text>
        <CommentForm value={commentValue} onChange={handleCommentChange} />
      </article>
      <article className='shuffle'>
        <Text as='label' htmlFor='shuffle' margin='0 0.5rem 0 0'>
          셔플 여부
        </Text>
        <Input type='checkbox' id='shuffle' checked={isShuffle} onChange={handleShuffle} width='1rem' height='1rem' />
      </article>
      <article className='submit'>
        <Button status='normal' width='5rem' margin='0 1rem 0 0' onClick={handleDelete}>
          삭제
        </Button>
        <Button status='active' width='5rem' onClick={handleSubmit}>
          제출
        </Button>
      </article>
    </Wrapper>
  );
}

export default BasicDetail;

const Wrapper = styled.div`
  & > article {
    margin-bottom: 1.5rem;

    &.shuffle {
      display: flex;
      align-items: center;
    }

    &.submit {
      text-align: right;
    }
  }
`;
