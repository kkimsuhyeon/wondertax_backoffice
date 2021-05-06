import React, { useEffect, useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import { requestProblemDetail } from 'apis/problem';

import useInput from 'hooks/useInput';

import { Text } from 'components/atom/Box';
import TitleForm, { PropTypes as TitleFormPropTypes } from 'components/problems/BasicTitleForm';
import ExampleForm, { PropTypes as ExampleFormPropTypes } from 'components/problems/BasicExampleForm';
import ChapterForm, { PropTypes as ChapterFormPropTypes } from 'components/problems/ChapterForm';
import CommentForm from 'components/problems/BasicCommentForm';

function Detail({
  history,
  match: {
    params: { basicId },
  },
}: RouteComponentProps<{ basicId: string }>) {
  const [titleValue, setTitleValue] = useState<TitleFormPropTypes['values']>({ title: '', difficult: '', answer: '' });

  const handleUpdate = useCallback(async () => {
    const { entities } = await requestProblemDetail({ id: basicId });
    console.log(entities);
    setTitleValue({ title: '', difficult: '', answer: '' });
  }, [basicId]);

  useEffect(() => {
    handleUpdate();
  }, [handleUpdate]);

  return (
    <Wrapper>
      <Text>주제 작성</Text>
      <article>{/* <ChapterForm /> */}</article>
      <Text>문제 작성</Text>
      <article>
        <TitleForm values={titleValue} onChanges={() => {}} />
      </article>
      <Text>보기 작성</Text>
      <article>{/* <ExampleForm /> */}</article>
      <Text>해설 작성</Text>
      <article>{/* <CommentForm /> */}</article>
    </Wrapper>
  );
}

export default Detail;

const Wrapper = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;

  & > article {
    margin-bottom: 1rem;
  }
`;
