import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import BasicTitleForm, { PropTypes as TitleFormPropTypes } from 'components/problems/BasicTitleForm';

function BasicRegist() {
  const [titleValues, setTitleValues] = useState<TitleFormPropTypes['values']>({ answer: '', difficult: '', title: '' });

  const handleTitleChanges = useCallback<TitleFormPropTypes['onChanges']>((args) => {
    setTitleValues((prev) => ({ ...prev, ...args }));
  }, []);

  return <BasicTitleForm values={titleValues} onChanges={handleTitleChanges} />;
}

export default BasicRegist;
