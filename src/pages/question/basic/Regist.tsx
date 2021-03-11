import React, { useEffect, useCallback } from 'react';

import instance from 'libs/api';

function Regist() {
  const handleTest = useCallback(() => {
    instance({ url: '/api/problem', method: 'GET' });
  }, []);

  useEffect(() => {
    handleTest();
  }, [handleTest]);

  return <div>regist</div>;
}

export default Regist;
