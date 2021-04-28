import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { requestProblemRegist } from 'apis/problem';

import useInput from 'hooks/useInput';

import TitleForm, { PropTypes as TitleFormPropTypes } from 'components/question/BasicTitleForm';
import ExampleForm, { PropTypes as ExampleFormPropTypes } from 'components/question/ExampleForm';
import ChapterForm, { PropTypes as ChapterFormPropTypes } from 'components/question/ChapterForm';
import CommentForm from 'components/question/CommentForm';

function Regist() {
  const [titleValue, setTitleValue] = useState<TitleFormPropTypes['values']>({ title: '', difficult: '', answer: '' });
  const [example, setExample] = useState<ExampleFormPropTypes['value']>(['', '', '', '']);
  const [comment, handleComment, setComnent] = useInput({ initialValue: '' });
  const [chapterValue, setChapterValue] = useState<Array<string>>();
  const [shuffle, setShuffle] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleTitleChanges = useCallback((partial: Partial<TitleFormPropTypes['values']>) => {
    setTitleValue((prev) => {
      return { ...prev, ...partial };
    });
  }, []);

  const handleExampleChange = useCallback(({ index, value }: { index: number; value: string }) => {
    setExample((prev) => {
      const temp = [...prev];
      temp[index] = value;
      return [...temp];
    });
  }, []);

  const handleChapterChange = useCallback<ChapterFormPropTypes['onChange']>((value) => {
    setChapterValue(value);
  }, []);

  const handleSuffleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setShuffle(checked);
  }, []);

  const handleSubmit = useCallback(async () => {
    const { answer, difficult, title } = titleValue;

    try {
      setButtonStatus(true);
      await requestProblemRegist({
        answerIdx: +answer,
        difficulty: difficult,
        choices: example,
        question: title,
        shuffle: shuffle,
        type: 'A',
        unit: chapterValue as Array<string>,
        comment: comment,
        authorId: 1,
      });
      setTitleValue({ title: '', difficult: '', answer: '' });
      setExample(['', '', '', '']);
      setChapterValue(undefined);
      setShuffle(false);
      setComnent('');
    } catch (e) {
      console.log(e);
      throw e;
    } finally {
      setButtonStatus(false);
    }
  }, [titleValue, example, shuffle, chapterValue, comment, setComnent]);

  return (
    <Wrapper>
      <Text>주제 작성</Text>
      <article>
        <ChapterForm onChange={handleChapterChange} />
      </article>
      <Text>문제 작성</Text>
      <article>
        <TitleForm values={titleValue} onChanges={handleTitleChanges} />
      </article>
      <Text>보기 작성</Text>
      <article>
        <ExampleForm value={example} onChanges={handleExampleChange} />
      </article>
      <Text>해설 작성</Text>
      <article>
        <CommentForm value={comment} onChange={handleComment} />
      </article>
      <SuffleWrapper>
        <input type='checkbox' id='suffle' checked={shuffle} onChange={handleSuffleChange} />
        <Label htmlFor='suffle'>셔플 여부</Label>
      </SuffleWrapper>
      <SubmitWrapper>
        <button disabled={buttonStatus} onClick={handleSubmit}>
          제출
        </button>
      </SubmitWrapper>
    </Wrapper>
  );
}

export default Regist;

const Wrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;

  & > article {
    margin-bottom: 1rem;
  }
`;

const Text = styled.div`
  margin-bottom: 0.5rem;
`;

const SuffleWrapper = styled.div`
  & > input {
    margin-right: 0.5rem;
  }
`;

const SubmitWrapper = styled.article`
  width: 100%;
  text-align: right;

  & > button {
    width: 5rem;
    height: 3rem;
    font-size: 1rem;
  }
`;

const Label = styled.label`
  user-select: none;
`;
