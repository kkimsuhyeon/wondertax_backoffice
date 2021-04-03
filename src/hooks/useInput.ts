import React, { useCallback, useState } from 'react';

export interface PropTypes {
  initialValue: string;
  preParse?: (value: string) => string | undefined;
}

function useInput({ initialValue, preParse }: PropTypes) {
  const [value, setValue] = useState(initialValue);

  const handleValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (preParse) return setValue((prev) => preParse(e.target.value) ?? prev);
      return setValue(e.target.value);
    },
    [preParse]
  );

  return [value, handleValue, setValue] as const;
}

export default useInput;
