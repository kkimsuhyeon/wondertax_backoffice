import React, { useCallback } from 'react';
import styled from 'styled-components';

export interface PropTypes {
  value: string;
  onChange: (value: string) => void;
}

function BasicCommentForm({ value, onChange }: PropTypes) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = e.target;
      onChange(value);
    },
    [onChange]
  );

  return (
    <StyleTextarea
      value={value}
      onChange={handleChange}
      onKeyDown={(e) => {
        e.stopPropagation();
        if (e.ctrlKey && e.code === 'KeyI') {
          onChange(value + '<image>');
        }
      }}
    />
  );
}

export default BasicCommentForm;

const StyleTextarea = styled.textarea`
  width: 100%;
  height: 10rem;
  resize: none;
  outline: none;
  border: 1px solid gray;
  padding: 0.5rem;
`;
