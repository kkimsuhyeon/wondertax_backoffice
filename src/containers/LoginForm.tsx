import React, { useCallback } from 'react';

import useSpinner from 'hooks/useSpinner';

import { requestSignin } from 'apis/auth';

import Form, { PropTypes as FormPropTypes } from 'components/login/Form';

export interface PropTypes {
  onSubmit: () => void;
}

function LoginFormContainer({ onSubmit }: PropTypes) {
  const activeSpinner = useSpinner();

  const handleSubmit = useCallback<FormPropTypes['onSubmit']>(
    async ({ id, password }) => {
      try {
        activeSpinner(true);
        const { jwtToken } = await requestSignin({ email: id, password: password });
        console.log(jwtToken);
        onSubmit();
      } catch (e) {
        console.log(e);
      } finally {
        activeSpinner(false);
      }
    },
    [activeSpinner, onSubmit]
  );

  return <Form onSubmit={handleSubmit} />;
}

export default LoginFormContainer;
