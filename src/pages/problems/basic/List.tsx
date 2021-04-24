import React, { useCallback, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import { requestProblemList } from 'apis/question';

import BasicList, { PropTypes as BasicListPropTypes } from 'components/question/BasicList';

function List({ history }: RouteComponentProps) {
  const [list, setList] = useState<BasicListPropTypes['list']>();

  const handleUpdate = useCallback(async () => {
    const { entities } = await requestProblemList();
    const temp = entities.map((item) => ({
      question: item.question,
      choices: item.choices,
      createTime: item.createdOn,
      difficulty: item.difficulty,
      id: item.id,
      unit: item.unit,
      type: item.type,
      shuffle: item.shuffle,
      answer: item.answerIdx,
    }));
    setList(temp);
  }, []);

  const handleClick = useCallback<BasicListPropTypes['onClick']>(
    (value) => {
      console.log(value.id);
      history.push(`/basic/${value.id}`);
    },
    [history]
  );

  useEffect(() => {
    handleUpdate();
  }, [handleUpdate]);

  return (
    <Wrapper>
      <BasicList list={list} onClick={handleClick} />
    </Wrapper>
  );
}

export default List;

const Wrapper = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
`;
