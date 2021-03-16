import React, { useCallback } from 'react';
import styled from 'styled-components';

import instance from 'libs/api';

import useInput from 'hooks/useInput';

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
      <Flex>
        <div>
          <Text>타입</Text>
          <input value={type} onChange={handleType} />
        </div>
        <div>
          <Text>난이도</Text>
          <input value={difficult} onChange={handleDifficult} />
        </div>
        <div>
          <Text>문제</Text>
          <input value={question} onChange={handleQuestion} />
        </div>
      </Flex>

      <Text>답변</Text>
      <input value={answerNumber} onChange={handleAnswerNumber} />

      <button onClick={handleSubmit}>제출</button>
    </Wrapper>
  );
}

export default Regist;

const Wrapper = styled.div`
  max-width: 90rem;
`;

const Text = styled.div``;

const Flex = styled.div`
  display: flex;
`;
