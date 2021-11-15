import { createRequest } from './instance';

export const requestSignin = ({ email, password }: { email: string; password: string }) =>
  createRequest<{ jwtToken: string }>({
    endpoint: '/auth/signin',
    method: 'POST',
    body: {
      email,
      password,
    },
  });

export const requestSignup = ({ email, password, name }: { email: string; password: string; name: string }) =>
  createRequest({
    endpoint: '/auth/signup',
    method: 'POST',
    body: {
      email,
      password,
      name,
    },
  });
