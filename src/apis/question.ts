import instance from './instance';

export interface ProblemListItem {
  answerIdx: number;
  authorId: string | null;
  choices: Array<string>;
  createdOn: string;
  difficulty: number;
  id: string;
  question: string;
  shuffle: boolean;
  type: string;
  unit: Array<string>;
}

export const requestProblemRegist = async ({
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

export const requestProblemList = async (): Promise<{
  entities: Array<ProblemListItem>;
}> => {
  const { data } = await instance({
    url: '/problem',
    method: 'GET',
  });

  return data;
};
