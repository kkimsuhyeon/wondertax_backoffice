import instance, { createRequest } from './instance';

export interface ProblemListItem {
  answerIdx: number;
  authorId: string | null;
  choices: Array<string>;
  createdOn: string;
  difficulty: string;
  id: string;
  question: string;
  shuffle: boolean;
  type: string;
  unit: Array<number>;
}

export const requestBasicList = () =>
  createRequest<{
    problems: Array<ProblemListItem>;
  }>({ endpoint: '/problem', method: 'GET' });

export const requestProblemDetail = async ({
  id,
}: {
  id: string;
}): Promise<{
  entityData: {
    answerIdx: number;
    authorId: number;
    choices: Array<string>;
    commentary: string;
    createdOn: string;
    difficulty: string;
    question: string;
    shuffle: boolean;
    type: string;
    unit: Array<number>;
  };
  entityKey: {
    id: string;
    kind: string;
    path: Array<string>;
  };
}> => {
  const { data } = await instance({ url: `/problem/${id}`, method: 'GET' });
  return data;
};

export const requestProblemRegist = async ({
  difficulty,
  question,
  choices,
  answerIdx,
  shuffle,
  type,
  unit,
  comment,
  authorId = 1,
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
      authorId: authorId,
    },
  });
};

export const requestProblemModify = async ({
  id,
  difficulty,
  question,
  choices,
  answerIdx,
  shuffle,
  type,
  unit,
  comment,
  authorId = 1,
}: {
  id: string;
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
    url: `/problem/${id}`,
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
      authorId: authorId,
    },
  });
};

export const requestDelete = async (id: string) => {
  await instance({
    url: `/problem/${id}`,
    method: 'DELETE',
  });
};

export const requestFileUpload = async ({ id, file }: { id: string; file: FormData }) => {
  await instance({
    url: `/problem/${id}/image`,
    method: 'POST',
    data: file,
  });
};
