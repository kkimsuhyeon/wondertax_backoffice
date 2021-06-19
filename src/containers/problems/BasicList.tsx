import React, { useState, useCallback, useEffect } from 'react';

import { requestBasicList } from 'apis/problem';

import useSpinner from 'hooks/useSpinner';

import List, { PropTypes as ListPropTypes } from 'components/problems/BasicList';

export interface PropTypes {
  onClick: ListPropTypes['onClick'];
}

function BasicList({ onClick }: PropTypes) {
  const activeSpinner = useSpinner();

  const [list, setList] = useState<ListPropTypes['list']>();

  const handleRequestList = useCallback(async () => {
    try {
      activeSpinner(true);
      const { entities } = await requestBasicList();
      const temp: typeof list = entities.map((item) => {
        return {
          id: item.id,
          question: item.question,
          answer: item.answerIdx,
          example1: item.choices[0],
          example2: item.choices[1],
          example3: item.choices[2],
          example4: item.choices[3],
        };
      });
      setList(temp);
    } finally {
      activeSpinner(false);
    }
  }, [activeSpinner]);

  useEffect(() => {
    handleRequestList();
  }, [handleRequestList]);

  return (
    <article>
      <List list={list} uniqueKey='id' onClick={onClick} />
    </article>
  );
}

export default BasicList;
