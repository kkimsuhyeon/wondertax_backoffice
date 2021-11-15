import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { activeDialog, inactiveDialog } from 'modules/dialog';

function useDialog() {
  const dispatch = useDispatch();

  const setSpinner = useCallback(
    ({ isOpen, title }: { isOpen: boolean; title?: string }) => {
      isOpen ? dispatch(activeDialog(title as string)) : dispatch(inactiveDialog());
    },
    [dispatch]
  );

  return setSpinner;
}

export default useDialog;
