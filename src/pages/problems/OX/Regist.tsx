import React, { useCallback, useState } from 'react';
import OXTitleForm, { PropTypes as OXTitleFormPropTypes } from 'components/question/OXTitleForm';
import ChapterForm, { PropTypes as ChapterFormPropTypes } from 'components/question/ChapterForm';
import styled from 'styled-components';
import { GoTag, GoPencil } from 'react-icons/go';
import { requestProblemRegist } from 'apis/question';

function Regist() {
  const [chapterValue, setChapterValue] = useState<Array<string>>();
  const [titleValue, setTitleValue] = useState<OXTitleFormPropTypes['values']>({ title: '', difficult: '', answer: '' });
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleChapterChange = useCallback<ChapterFormPropTypes['onChange']>((value) => {
    setChapterValue(value);
  }, []);

  const handleTitleChanges = useCallback((partial: Partial<OXTitleFormPropTypes['values']>) => {
    setTitleValue((prev) => {
      return { ...prev, ...partial };
    });
  }, []);

  const handleSubmit = useCallback(async () => {
    const { answer, difficult, title } = titleValue;

    try {
      setButtonStatus(true);
      await requestProblemRegist({
        answerIdx: +answer,
        difficulty: difficult,
        choices: example,
        question: title,
        shuffle: shuffle,
        type: 'A',
        unit: chapterValue as Array<string>,
        comment: comment,
        authorId: 1,
      });
      setTitleValue({ title: '', difficult: '', answer: '' });
      setExample(['', '', '', '']);
      setChapterValue(undefined);
      setShuffle(false);
      setComnent('');
    } catch (e) {
      console.log(e);
      throw e;
    } finally {
      setButtonStatus(false);
    }
  }, [titleValue, example, shuffle, chapterValue, comment, setComnent]);

  return (
    <Wrapper>
      <Section>
        <SubjectText>
          <GoTag />
          주제 작성
        </SubjectText>
        <article>
          <ChapterForm onChange={handleChapterChange} />
        </article>
      </Section>
      <Section>
        <SubjectText>
          <GoPencil />
          문제 작성
        </SubjectText>
        <article>
          <OXTitleForm values={titleValue} onChanges={handleTitleChanges} />
        </article>
      </Section>
      <SubmitWrapper>
        <button disabled={buttonStatus} onClick={handleSubmit}>
          제출
        </button>
      </SubmitWrapper>
    </Wrapper>
  );
}

export default Regist;

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

const SubmitWrapper = styled.article`
  width: 100%;
  text-align: right;

  & > button {
    width: 5rem;
    height: 3rem;
    font-size: 1rem;
  }
`;
