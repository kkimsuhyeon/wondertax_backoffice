import React from 'react';
import styled from 'styled-components';

function CommentForm() {
  return <StyleTextarea />;
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
