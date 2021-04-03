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
  shuffle,
  type,
  unit,
  comment,
  authorId,
}: {
  question: string;
  difficulty: string;
  answerIdx: number;
  choices: Array<string>;
  shuffle: boolean;
  type: string;
  unit: Array<string>;
  comment: string;
  authorId: number;
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
      shuffle: shuffle,
      commentary: comment,
      authorId: 1
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
