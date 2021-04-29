import React, { useCallback } from 'react';

import Form, { PropTypes as FormPropTypes } from 'components/login/Form';

export interface PropTypes {
  onSubmit: () => void;
}

function LoginFormContainer({ onSubmit }: PropTypes) {
  const handleSubmit = useCallback<FormPropTypes['onSubmit']>(
    ({ id, password }) => {
      console.log(id, password);
      // api 호출
      onSubmit();
    },
    [onSubmit]
  );

  return <Form onSubmit={handleSubmit} />;
}

export default LoginFormContainer;
