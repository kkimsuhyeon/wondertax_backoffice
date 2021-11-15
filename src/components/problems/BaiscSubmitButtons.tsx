import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Button } from 'components/atom/Button';

export interface PropTypes {
  onFileUpload: (data: FormData) => void;
  onSubmit: () => void;
  onDelete?: () => void;
}

function FileUploadButton({ onFileUpload, onSubmit, onDelete }: PropTypes) {
  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newFileList = Array.from(e.target.files as FileList);

      newFileList.forEach((file) => {
        if (file.size / (1024 * 1024) > 1) return;
      });

      const data = new FormData();
      newFileList.forEach((item) => data.append(`images`, item));
      onFileUpload(data);
      e.target.value = '';
    },
    [onFileUpload]
  );

  return (
    <>
      <Label>
        <input type='file' accept='.png, .jpg, .jpeg' multiple onChange={handleFileUpload} />
        파일 업로드
      </Label>
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