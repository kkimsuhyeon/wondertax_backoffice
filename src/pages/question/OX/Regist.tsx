import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { requestProblemRegist } from 'apis/question';

import useInput from 'hooks/useInput';

import { Button } from 'components/atom';
import TitleForm, { PropTypes as TitleFormPropTypes } from 'components/question/OXTitleForm';
import ExampleForm, { PropTypes as ExampleFormPropTypes } from 'components/question/ExampleForm';
import ChapterForm, { PropTypes as ChapterFormPropTypes } from 'components/question/ChapterForm';
import CommentForm from 'components/question/CommentForm';

function Regist() {
  const [titleValue, setTitleValue] = useState<TitleFormPropTypes['values']>({ title: '', answer: 'O' });
  const [example, setExample] = useState<ExampleFormPropTypes['value']>(['', '', '', '']);
  const [comment, handleComment] = useInput({ initialValue: '' });
  const [chapterValue, setChapterValue] = useState<Array<string>>();

  const handleChapterChange = useCallback<ChapterFormPropTypes['onChange']>((value) => {
    setChapterValue(value);
  }, []);

  return (
    <Wrapper>
      <Text>주제 작성</Text>
      <article>
        <ChapterForm onChange={handleChapterChange} />
      </article>
      <Text>문제 작성</Text>
      <article>
        <TitleForm onChanges={() => {}} values={{ answer: 'test', title: 'test' }} />
      </article>
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
