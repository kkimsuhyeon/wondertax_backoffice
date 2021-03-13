import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
// import { css } from '@emotion/react';

import instance from 'libs/api';

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
    url: '/api/problem',
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
  const [type, setType] = useState<string>();
  const [difficult, setDifficult] = useState<number>();
  const [question, setQuestion] = useState<string>();
  const [answerNumber, setAnswerNumber] = useState<number>();

  const handleTypeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  }, []);

  const handleQuestionChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  }, []);

  const handleDifficultChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDifficult(Number(e.target.value));
  }, []);

  const handleAnswerChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswerNumber(Number(e.target.value));
  }, []);

  const handleSubmit = useCallback(async () => {
    await requestSubmit({
      type: type,
      answerIdx: answerNumber,
      difficulty: difficult,
      question: question,
      choices: ['문제1', '문제2', '문제3', '문제4'],
      suffle: false,
      unit: [1, 1, 1, 1],
    });
  }, [type, answerNumber, difficult, question]);

  return (
    <Wrapper>
      <div>타입</div>
      <input value={type} onChange={handleTypeChange} />

      <div>난이도</div>
      <input value={difficult} onChange={handleDifficultChange} />

      <div>문제</div>
      <input value={question} onChange={handleQuestionChange} />

      <div>답변</div>
      <input value={answerNumber} onChange={handleAnswerChange} />

      <button onClick={handleSubmit}>제출</button>
    </Wrapper>
  );
}

export default Regist;

const Wrapper = styled.div`
  max-width: 90rem;
`;
