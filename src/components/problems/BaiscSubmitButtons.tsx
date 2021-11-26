import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Button } from 'components/atom/Button';

export interface PropTypes {
  onFileUpload?: (fileList: Array<File>) => void;
  onSubmit: () => void;
  onDelete?: () => void;
}

function FileUploadButton({ onFileUpload, onSubmit, onDelete }: PropTypes) {
  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newFileList = Array.from(e.target.files as FileList);
      onFileUpload && onFileUpload(newFileList);
      e.target.value = '';
    },
    [onFileUpload]
  );

  return (
    <>
      {onFileUpload && (
        <Label>
          <input type='file' accept=' .jpg' multiple onChange={handleFileUpload} />
          파일 업로드
        </Label>
      )}
      {onDelete && (
        <Button status='normal' width='5rem' margin='0 1rem 0 0' onClick={onDelete}>
          삭제
        </Button>
      )}
      <Button status='active' onClick={onSubmit} width='6rem'>
        제출
      </Button>
    </>
  );
}

export default FileUploadButton;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 2rem;
  border-radius: 0.36rem;
  background-color: white;
  margin-right: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  & > input {
    display: none;
  }
`;
