import React, { useCallback, useState } from 'react';
// import OXTitleForm, { PropTypes as OXTitleFormPropTypes } from 'components/problems/OXTitleForm';
import ChapterForm, { PropTypes as ChapterFormPropTypes } from 'components/problems/ChapterForm';
import styled from 'styled-components';
import { GoTag, GoPencil } from 'react-icons/go';

function List() {
  const [chapterValue, setChapterValue] = useState<Array<string>>();
  // const [titleValue, setTitleValue] = useState<OXTitleFormPropTypes['values']>({ title: '', difficult: '', answer: '' });
  const handleChapterChange = useCallback<ChapterFormPropTypes['onChange']>((value) => {
    console.log(value);
    // setChapterValue(value);
  }, []);

  // const handleTitleChanges = useCallback((partial: Partial<OXTitleFormPropTypes['values']>) => {
  //   setTitleValue((prev) => {
  //     return { ...prev, ...partial };
  //   });
  // }, []);

  return <div>ox 리스트</div>;
}

export default List;

const Wrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const SubjectText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #002137;
  border-bottom: 1px solid #002137;
  padding-bottom: 1rem;
  margin-bottom: 1.8rem;
`;

const Section = styled.div`
  box-shadow: 2px 2px 4px 2px rgba(139, 139, 139, 0.2);
  padding: 1rem;
  margin-bottom: 3rem;
`;
