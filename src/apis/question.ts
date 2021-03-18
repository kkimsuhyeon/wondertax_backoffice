import instance from './instance';

export const requestBasicRegist = async ({
  difficulty,
  question,
  choices,
  answerIdx,
  suffle,
  type,
  unit,
}: {
  question: string;
  difficulty: number;
  answerIdx: number;
  choices: Array<string>;
  suffle: boolean;
  type: string;
  unit: Array<string>;
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
      unit: unit,
      suffle: suffle,
    },
  });
};
