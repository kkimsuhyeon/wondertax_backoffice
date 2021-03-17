import instance from './instance';

export const requestBasicRegist = async ({
  difficulty,
  question,
  choices,
  answerIdx,
  suffle,
  type,
}: {
  question: string;
  difficulty: number;
  answerIdx: number;
  choices: Array<string>;
  suffle: boolean;
  type: string;
}) => {
  await instance({
    url: '/problem',
    method: 'POST',
    data: {
      difficulty: difficulty,
      answerIdx: answerIdx,
      choices: choices,
      question: question,
      type: type,
      unit: ['1', '1', '1', '1'],
      suffle: suffle,
    },
  });
};
