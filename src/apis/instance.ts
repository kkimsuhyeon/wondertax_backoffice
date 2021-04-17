import axios, { AxiosRequestConfig } from 'axios';

export const BASE_URL = 'https://wondertax.du.r.appspot.com/api';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.response
  .use
  // (response) => {
  //   console.log(response);
  //   return response;
  // },
  // (err) => {
  //   console.log(err);
  //   return err;
  // }
  ();

instance.interceptors.request
  .use
  // (request) => {
  //   console.log(request);
  //   return request;
  // },
  // (err) => {
  //   console.log(err);
  //   return err;
  // }
  ();

export interface CreateRequestArguments {
  endpoint: AxiosRequestConfig['url'];
  method: AxiosRequestConfig['method'];
  body?: { [key: string]: string | number | Blob | Array<string> | null };
  params?: { [key: string]: string | number | Array<string> | undefined };
  headers?: AxiosRequestConfig['headers'];
}

export interface RequestFunction<T = void, U = void> {
  (args: T): Promise<U>;
}

export const createRequest = async <T = void>({
  endpoint,
  method,
  headers = undefined,
  body = undefined,
  params = undefined,
}: CreateRequestArguments): Promise<T> => {
  try {
    const { data } = await instance({
      method,
      url: `${endpoint}/${params}`,
      data: body,
      headers,
    });
    return data.data as T;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default instance;
