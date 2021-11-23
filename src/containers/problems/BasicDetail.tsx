import React, { useEffect, useCallback, useState, useRef, useMemo } from 'react';
import styled from 'styled-components';

import useSpinner from 'hooks/useSpinner';

import { Text } from 'components/atom/Box';
import { Input } from 'components/atom/Input';

import { requestProblemDetail, requestProblemModify, requestDelete, requestImageUpload } from 'apis/problem';

import TitleForm, { PropTypes as TitleFormPropTypes } from 'components/problems/BasicTitleForm';
import ExampleForm, { PropTypes as ExampleFormPropTypes } from 'components/problems/BasicExampleForm';
import CommentForm, { PropTypes as CommentFormPropTypes } from 'components/problems/BasicCommentForm';
import ChapterForm from 'components/problems/ChapterForm';
import BasicSubmitButtons from 'components/problems/BaiscSubmitButtons';

export interface PropTypes {
  id: string;
  onToList: () => void;
}

function BasicDetail({ id, onToList }: PropTypes) {
  const activeSpinner = useSpinner();

  const [chapterValues, setChapterValuse] = useState({ book: '', chapter: '', topic: '' });
  const [titleValues, setTitleValues] = useState<TitleFormPropTypes['values']>({ answer: '', difficult: '', title: '' });
  const [exampleValues, setExampleValues] = useState<ExampleFormPropTypes['values']>({ '0': '', '1': '', '2': '', '3': '' });
  const [commentValue, setCommentValue] = useState<CommentFormPropTypes['value']>('');
  const [isShuffle, setShuffle] = useState<boolean>(true);
  const [imageId, setImageId] = useState<Array<string>>([]);

  const handleChapterChanges = useCallback((args: any) => {
    setChapterValuse((prev) => ({ ...prev, ...args }));
  }, []);

  const handleTitleChanges = useCallback<TitleFormPropTypes['onChanges']>((args) => {
    setTitleValues((prev) => ({ ...prev, ...args }));
  }, []);

  const handleExampleChanges = useCallback<ExampleFormPropTypes['onChanges']>(({ index, value }) => {
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

  const handleFileUpload = useCallback(
    async (data: FormData) => {
      try {
        const { imageIds } = await requestImageUpload({ id: id, image: data });
        setImageId((prev) => [...prev, ...imageIds]);
      } catch (e) {
        console.log(e);
      }
    },
    [id]
  );

  const handleUpdate = useCallback(async () => {
    try {
      activeSpinner(true);
      const result = await requestProblemDetail(id);
      setChapterValuse({ book: String(result.unit[0]), chapter: String(result.unit[1]), topic: String(result.unit[2]) });
      setTitleValues({ answer: String(result.answerIdx), difficult: result.difficulty, title: result.question });
      setExampleValues({ '0': result.choices[0], '1': result.choices[1], '2': result.choices[2], '3': result.choices[3] });
      setCommentValue(result.commentary);
      setShuffle(result.shuffle);
      setImageId(result.imageIds);
    } catch (e) {
      console.log(e);
    } finally {
      activeSpinner(false);
    }
  }, [id, activeSpinner]);

  const handleSubmit = useCallback(async () => {
    try {
      activeSpinner(true);
      await requestProblemModify({
        id: id,
        params: {
          answerIdx: +titleValues.answer,
          authorId: 1,
          choices: [exampleValues[0], exampleValues[1], exampleValues[2], exampleValues[3]],
          commentary: commentValue,
          difficulty: titleValues.difficult,
          question: titleValues.title,
          shuffle: isShuffle,
          type: 'A',
          unit: [chapterValues.book, chapterValues.chapter, chapterValues.topic],
          imageIds: imageId,
        },
      });
    } catch (e) {
      console.log(e);
    } finally {
      activeSpinner(false);
    }
  }, [activeSpinner, titleValues, imageId, exampleValues, commentValue, isShuffle, id, chapterValues]);

  const handleDelete = useCallback(async () => {
    try {
      activeSpinner(true);
      await requestDelete(id);
      onToList();
    } catch (e) {
      console.log(e);
    } finally {
      activeSpinner(false);
    }
  }, [activeSpinner, onToList, id]);

  const createImageList = useMemo(() => {
    return imageId.map((image) => (
      <div key={image}>
        <img
          id={image}
          src={`https://storage.googleapis.com/images-wondertax/problems/${id}/${image}.jpg`}
          onError={async () => {
            activeSpinner(true);
            const test = document.getElementById(image) as HTMLImageElement;
            setTimeout(() => {
              test.src = `https://storage.googleapis.com/images-wondertax/problems/${id}/${image}.jpg`;
              activeSpinner(false);
            }, 300);
          }}
          onClick={(e) => {
            e.stopPropagation();
            window.open(`https://storage.googleapis.com/images-wondertax/problems/${id}/${image}.jpg`);
          }}
        />
        <span
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            setImageId((prev) => {
              return prev.filter((id) => id !== image);
            });
          }}
        >
          x
        </span>
      </div>
    ));
  }, [imageId, id]);

  useEffect(() => {
    handleUpdate();
  }, [handleUpdate]);

  return (
    <Wrapper>
      <article>
        <ChapterForm values={chapterValues} onChange={handleChapterChanges} />
      </article>
      <article>
        <TitleForm values={titleValues} onChanges={handleTitleChanges} />
      </article>
      <article>
        <Text margin='0 0 1rem 0'>보기 작성</Text>
        <ExampleForm values={exampleValues} onChanges={handleExampleChanges} />
      </article>
      <article>
        <Text margin='0 0 1rem 0'>해설 작성</Text>
        <CommentForm value={commentValue} onChange={handleCommentChange} />
      </article>
      <article className='shuffle'>
        <Text as='label' htmlFor='shuffle' margin='0 0.5rem 0 0'>
          셔플 여부
        </Text>
        <Input type='checkbox' id='shuffle' checked={isShuffle} onChange={handleShuffle} width='1rem' height='1rem' />
      </article>
      <article className='submit'>
        <BasicSubmitButtons onFileUpload={handleFileUpload} onSubmit={handleSubmit} onDelete={handleDelete} />
      </article>
      <article className='image'>{createImageList}</article>
    </Wrapper>
  );
}

export default BasicDetail;

const Wrapper = styled.div`
  & > article {
    margin-bottom: 1.5rem;

    &.shuffle {
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
