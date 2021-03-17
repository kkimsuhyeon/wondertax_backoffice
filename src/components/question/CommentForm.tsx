import React from 'react';
import styled from 'styled-components';

export interface PropTypes {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function CommentForm({ onChange, value }: PropTypes) {
  return <StyleTextarea value={value} onChange={onChange} />;
}

export default CommentForm;

const StyleTextarea = styled.textarea`
  width: 100%;
  height: 10rem;
  resize: none;
  outline: none;
  border: 1px solid gray;
  padding: 0.5rem;
`;
