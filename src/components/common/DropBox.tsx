import React, { useState, useMemo, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';

interface Wrapper {
  width?: string;
  margin?: string;
  disabled?: boolean;
  selected?: string;
  height?: string;
  count?: number;
}

export interface DataType {
  name: string;
  value: string | number;
}

export interface PropTypes {
  disabled?: boolean;
  height?: string;
  placeHolder?: string;
  count?: number;
  list: Array<DataType>;
}

function DropBox({ disabled, height, placeHolder, list, count }: PropTypes) {
  const [isOpen, setOpen] = useState(false);
  const [{ name, value }, setData] = useState<DataType>({ name: '', value: '' });

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleData = useCallback(({ name, value }: { name: string; value: string | number }) => {
    setData({ name: name, value: value });
  }, []);

  const makeList = useMemo(() => {
    return list.map((item) => (
      <li key={item.value} data-value={item.value} onClick={() => handleData({ name: item.name, value: item.value })}>
        {item.name}
      </li>
    ));
  }, [list, handleData]);

  useEffect(() => {
    if (placeHolder) setData({ name: placeHolder, value: '' });
  }, [placeHolder]);

  return (
    <Wrapper onClick={handleToggle} tabIndex={0} onBlur={handleClose} disabled={disabled} height={height}>
      <Selector>{name}</Selector>
      <List open={isOpen} count={count} value={value}>
        {makeList}
      </List>
    </Wrapper>
  );
}

export default DropBox;

const Selector = styled.div<{ height?: string }>`
  border: 1px solid black;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul<{ open?: boolean; count?: number; value?: string | number }>`
  ${({ open, count = 4, value }) => css`
    ${!open && `display: none;`}
    overflow-y: overlay;
    position: absolute;
    z-index: 1;
    width: 100%;
    text-align: center;
    border: 1px solid black;
    border-top: 0;
    height: ${count === 1 ? '2.55rem' : `${2.52 * count}rem`};

    & > li {
      height: 2.5rem;
      line-height: 2.5rem;
      cursor: pointer;

      &[data-value='${value}'] {
        background-color: wheat;
      }

      &:hover {
        background-color: pink;
      }
    }
  `}
`;

const Wrapper = styled.div<Wrapper>`
  ${({ width, margin, disabled, height, theme }) => {
    if (disabled)
      return css`
        pointer-events: none;
        background-color: ${theme.whiteGray};
      `;
    return css`
      position: relative;
      width: ${width ?? '100%'};
      ${margin && `margin: ${margin};`}
      background-color: white;
      height: ${height ?? `2.5rem`};
      &:focus {
        outline: none;
        text-decoration: none;
      }

      & > ${Selector} {
      }

      & > ${List} {
        top: ${height ?? `2.5rem`};
      }
    `;
  }}
`;
