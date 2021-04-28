import React, { useState, useCallback, useEffect } from 'react';

import { requestBasicList } from 'apis/problem';

import List, { PropTypes as ListPropTypes } from 'components/problems/BasicList';

function BasicList() {
  const [list, setList] = useState<ListPropTypes['list']>();

  const handleRequestList = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    handleRequestList();
  }, [handleRequestList]);

  return (
    <article>
      <List list={list} uniqueKey='id' />
    </article>
  );
}

export default BasicList;
