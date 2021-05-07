import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';

import useSpinner from 'hooks/useSpinner';

import { requestProblemDetail } from 'apis/problem';

import TitleForm, { PropTypes as TitleFormPropTypes } from 'components/problems/BasicTitleForm';

export interface PropTypes {
  id: string;
}

function BasicDetail({ id }: PropTypes) {
  const [activeSpinner] = useSpinner();

  const [titleValues, setTitleValues] = useState<TitleFormPropTypes['values']>({ answer: '', difficult: '', title: '' });

  const handleTitleChanges = useCallback<TitleFormPropTypes['onChanges']>((args) => {
    setTitleValues((prev) => ({ ...prev, ...args }));
  }, []);

  const handleUpdate = useCallback(async () => {
    try {
      activeSpinner(true);
      const { entities } = await requestProblemDetail({ id: id });
      setTitleValues({ answer: String(entities.answerIdx), difficult: entities.difficulty, title: entities.question });
    } catch (e) {
      console.log(e);
    } finally {
      activeSpinner(false);
    }
  }, [id, activeSpinner]);

  useEffect(() => {
    handleUpdate();
  }, [handleUpdate]);

  return (
    <Wrapper>
      <TitleForm values={titleValues} onChanges={handleTitleChanges} />
    </Wrapper>
  );
}

export default BasicDetail;

const Wrapper = styled.div``;
