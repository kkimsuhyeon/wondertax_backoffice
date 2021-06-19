import React, { useCallback } from 'react';

import useSpinner from 'hooks/useSpinner';

import Form, { PropTypes as FormPropTypes } from 'components/login/Form';

export interface PropTypes {
  onSubmit: () => void;
}

function LoginFormContainer({ onSubmit }: PropTypes) {
  const activeSpinner = useSpinner();

  const handleSubmit = useCallback<FormPropTypes['onSubmit']>(
    ({ id, password }) => {
      activeSpinner(true);
      console.log(id, password);
      setTimeout(() => {
        activeSpinner(false);
        // api 호출
        onSubmit();
      }, 2000);
    },
    [onSubmit, activeSpinner]
  );

  return <Form onSubmit={handleSubmit} />;
}

export default LoginFormContainer;
