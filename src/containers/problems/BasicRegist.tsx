import React, { useState, useCallback, useRef, useMemo } from 'react';
import styled from 'styled-components';

import useSpinner from 'hooks/useSpinner';

import { requestImageUpload, requestProblemRegist, requestProblemModify } from 'apis/problem';

import { Text } from 'components/atom/Box';
import { Input } from 'components/atom/Input';
import ChapterForm, { PropTypes as ChapterFormPropTypes } from 'components/problems/ChapterForm';
import BasicTitleForm, { PropTypes as TitleFormPropTypes } from 'components/problems/BasicTitleForm';
import BasicExampleForm, { PropTypes as ExampleFormPropTypes } from 'components/problems/BasicExampleForm';
import BasicCommentForm, { PropTypes as CommentFormPropTypes } from 'components/problems/BasicCommentForm';
import BasicSubmitButtons from 'components/problems/BaiscSubmitButtons';

export interface PropTypes {
  onSubmit: () => void;
}

function BasicRegist({ onSubmit }: PropTypes) {
  const activeSpinner = useSpinner();

  const imageRef = useRef<FormData | null>(null);

  const [imageInfo, setImageInfo] = useState<Array<{ name: string; url: string }>>([]);
  const [chapterValues, setChapterValues] = useState({ book: '', chapter: '', topic: '' });
  const [titleValues, setTitleValues] = useState<TitleFormPropTypes['values']>({ answer: '', difficult: '', title: '' });
  const [exampleValues, setExampleValues] = useState<ExampleFormPropTypes['values']>({ 0: '', 1: '', 2: '', 3: '' });
  const [commentValue, setCommentValue] = useState<CommentFormPropTypes['value']>('');
  const [isShuffle, setShuffle] = useState<boolean>(true);

  const handleChapterChange = useCallback<ChapterFormPropTypes['onChange']>((value) => {
    setChapterValues((prev) => ({ ...prev, ...value }));
  }, []);

  const handleTitleChanges = useCallback<TitleFormPropTypes['onChanges']>((args) => {
    setTitleValues((prev) => ({ ...prev, ...args }));
  }, []);

  const handleExampleChanges = useCallback<ExampleFormPropTypes['onChanges']>(({ value, index }) => {
    setExampleValues((prev) => {
      const temp = prev;
      temp[index] = value;
      return { ...temp };
    });
  }, []);

  const handleCommentChange = useCallback<CommentFormPropTypes['onChange']>((value) => {
    setCommentValue(value);
  }, []);

  const handleShuffle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setShuffle(checked);
  }, []);

  const handleFileUpload = useCallback(async (files: Array<File>) => {
    const data = new FormData();
    files.forEach((file) => {
      const url = URL.createObjectURL(file);
      setImageInfo((prev) => [...prev, { name: file.name, url: url }]);
      data.append(`images`, file);
    });
    console.log(data.getAll('images'));
    imageRef.current = data;
  }, []);

  const handleSubmit = useCallback(async () => {
    const { answer, difficult, title } = titleValues;
    try {
      activeSpinner(true);
      const { id } = await requestProblemRegist({
        shuffle: isShuffle,
        answerIdx: +answer,
        difficulty: difficult,
        question: title,
        unit: [chapterValues.book, chapterValues.chapter, chapterValues.topic],
        choices: [exampleValues['0'], exampleValues['1'], exampleValues['2']],
        commentary: commentValue,
        type: 'A',
        authorId: 1,
      });
      if (imageRef.current !== null) {
        const { imageIds } = await requestImageUpload({ id: id, image: imageRef.current as FormData });
        await requestProblemModify({ id: id, params: { imageIds: imageIds } });
      }

      setTitleValues({ title: '', difficult: '', answer: '' });
      setCommentValue('');
      setExampleValues({ '0': '', '1': '', '2': '', '3': '' });
      setShuffle(true);
      onSubmit();
    } catch (e) {
      console.log(e);
      throw e;
    } finally {
      activeSpinner(false);
    }
  }, [isShuffle, titleValues, activeSpinner, chapterValues, exampleValues, commentValue, onSubmit]);

  const createImageList = useMemo(() => {
    if (imageInfo === null || imageInfo.length === 0) return null;
    return imageInfo.map(({ name, url }) => (
      <div key={url}>
        <img
          src={url}
          onClick={(e) => {
            e.stopPropagation();
            window.open(url);
          }}
        />
        <span
          onClick={(e) => {
            const data = new FormData();

            e.stopPropagation();
            setImageInfo(imageInfo.filter((info) => info.name !== name));

            const temp = imageRef.current?.getAll('images');
            temp?.filter((file) => (file as File).name !== name).forEach((file) => data.append('images', file));
            imageRef.current = data;
          }}
        >
          x
        </span>
      </div>
    ));
  }, [imageInfo]);

  return (
    <Wrapper>
      <article>
        <ChapterForm onChange={handleChapterChange} values={chapterValues} />
      </article>
      <article>
        <BasicTitleForm values={titleValues} onChanges={handleTitleChanges} />
      </article>
      <article>
        <Text margin='0 0 1rem 0'>보기 작성</Text>
        <BasicExampleForm values={exampleValues} onChanges={handleExampleChanges} />
      </article>
      <article>
        <Text margin='0 0 1rem 0'>해설 작성</Text>
        <BasicCommentForm value={commentValue} onChange={handleCommentChange} />
      </article>
      <article className='suffle'>
        <Text as='label' htmlFor='suffle' margin='0 0.5rem 0 0'>
          셔플 여부
        </Text>
        <Input type='checkbox' checked={isShuffle} onChange={handleShuffle} id='suffle' width='1rem' height='1rem' />
      </article>
      <article className='submit'>
        <BasicSubmitButtons onSubmit={handleSubmit} onFileUpload={handleFileUpload} />
      </article>
      <article className='image'>{createImageList}</article>
    </Wrapper>
  );
}

export default BasicRegist;

const Wrapper = styled.div`
  & > article {
    margin-bottom: 1.5rem;

    &.suffle {
      display: flex;
      align-items: center;
    }

    &.submit {
      text-align: right;
    }

    &.image {
      display: flex;
      & > div {
        width: fit-content;
        height: fit-content;
        position: relative;
        margin-right: 0.5rem;
        cursor: zoom-in;

        & > img {
          width: 7rem;
          height: 7rem;
        }

        & > span {
          position: absolute;
          top: 0;
          right: 5px;
          cursor: pointer;
        }
      }
    }
  }
`;
