import React, { useCallback, useEffect, useState } from 'react';

import { requestProblemList } from 'apis/question';

import ListComponent, { PropTypes as ListPropTypes } from 'components/question/ListComponent';

function List() {
  const [list, setList] = useState<ListPropTypes['list']>();

  const handleUpdate = useCallback(async () => {
    const { entities } = await requestProblemList();
    setList(entities);
  }, []);

  useEffect(() => {
    handleUpdate();
  }, [handleUpdate]);

  return <ListComponent list={list} />;
}

export default List;
