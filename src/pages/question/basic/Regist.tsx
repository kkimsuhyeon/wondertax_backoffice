import React, { useCallback } from 'react';
import styled, { CSSProperties } from 'styled-components';

import instance from 'libs/api';

import useInput from 'hooks/useInput';

import TitleForm from 'components/question/TitleForm';
import ExampleForm from 'components/question/ExampleForm';
import CommentForm from 'components/question/CommentForm';

// type은 뭘까?
// createdOn은 생성날짜인데 내가 직접 적어주는건 아니겠지?
// authorId는 일단 내가 전달해야하나?
// unit은 단원인거 같다
// difficultly: 난이도
// question: 문제
// choices: 보기
// answerIdx: 답 번호
// suffle 문제 섞을지

const requestSubmit = async ({
  type,
  unit,
  difficulty,
  question,
  choices,
  answerIdx,
  suffle,
}: {
  type?: string;
  unit?: Array<number>;
  difficulty?: number;
  question?: string;
  choices?: Array<string>;
  answerIdx?: number;
  suffle?: boolean;
}) => {
  await instance({
    url: '/problem',
    method: 'POST',
    data: {
      type: type,
      unit: unit,
      difficulty: difficulty,
      question: question,
      choices: choices,
      answerIdx: answerIdx,
      suffle: suffle,
    },
  });
};

function Regist() {
  const [type, handleType] = useInput({
    initialValue: '',
    preParse: (value) => {
      if (Number.isFinite(+value)) return value.trim();
    },
  });
  const [difficult, handleDifficult] = useInput({ initialValue: '' });
  const [question, handleQuestion] = useInput({ initialValue: '' });
  const [answerNumber, handleAnswerNumber] = useInput({ initialValue: '' });

  const handleSubmit = useCallback(async () => {
    await requestSubmit({
      type: type,
      answerIdx: 1,
      difficulty: 1,
      question: question,
      choices: ['문제1', '문제2', '문제3', '문제4'],
      suffle: false,
      unit: [1, 1, 1, 1],
    });
  }, [type, question]);

  return (
    <Wrapper>
      <Text>문제 작성</Text>
      <article>
        <TitleForm />
      </article>
      <Text>보기 작성</Text>
      <article>
        <ExampleForm />
      </article>
      <Text>해설 작성</Text>
      <article>
        <CommentForm />
      </article>
      <button onClick={handleSubmit}>제출</button>
    </Wrapper>
  );
}

export default Regist;

const Wrapper = styled.div`
  max-width: 90rem;
  margin: 0 auto;

  & > article {
    margin-bottom: 1rem;
  }
`;

const Text = styled.div`
  margin-bottom: 0.5rem;
`;
