import instance, { createRequest } from './instance';

export interface Problem {
  id: string;
  type: string;
  unit: Array<number>;
  difficulty: string;
  authorId: string | null;
  question: string;
  choices: Array<string>;
  answerIdx: number;
  commentary: string;
  imageIds: Array<string>;
  shuffle: boolean;
  createdOn: string;
}

interface Params {
  type: string;
  unit: Array<string>;
  difficulty: string;
  authorId: number;
  question: string;
  choices: Array<string>;
  answerIdx: number;
  commentary?: string;
  imageIds?: Array<string>;
  shuffle?: boolean;
}

export const requestBasicList = () => createRequest<{ problems: Array<Problem> }>({ endpoint: '/problem', method: 'GET' });

export const requestProblemDetail = (id: string) => createRequest<Problem>({ method: 'GET', endpoint: `/problem/${id}` });

export const requestProblemRegist = (params: Params) =>
  createRequest<{ id: string }>({ method: 'POST', endpoint: '/problem', body: { ...params } });

export const requestProblemModify = ({ id, params }: { id: string; params: Partial<Params> }) =>
  createRequest({ method: 'POST', endpoint: `/problem/${id}`, body: { ...params } });

export const requestDelete = (id: string) => createRequest({ method: 'DELETE', endpoint: `/problem/${id}` });

export const requestImageUpload = async ({ id, image }: { id: string; image: FormData }): Promise<{ imageIds: Array<string> }> => {
  const { data } = await instance({ method: 'POST', url: `/problem/${id}/image`, data: image });
  return data;
};
