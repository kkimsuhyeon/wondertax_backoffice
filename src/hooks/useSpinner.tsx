import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { activeSpinner, inactiveSpinner } from 'modules/spinner';

function useSpinner() {
  const dispatch = useDispatch();

  const setSpinner = useCallback(
    (isOpen: boolean) => {
      isOpen ? dispatch(activeSpinner()) : dispatch(inactiveSpinner());
    },
    [dispatch]
  );

  return setSpinner;
}

export default useSpinner;
