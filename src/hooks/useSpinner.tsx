import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { activeSpinner } from 'store/spinner';

function useSpinner(status?: boolean) {
  const [isActive, setActive] = useRecoilState(activeSpinner);

  useEffect(() => {
    setActive(status ?? false);
  }, [status, setActive]);

  return [setActive, isActive] as const;
}

export default useSpinner;
