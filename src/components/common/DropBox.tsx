import React, { useState, useMemo, useCallback } from 'react';
import styled, { css } from 'styled-components';

export interface DataType {
  name: string;
  value: string;
}

interface WrapperProps {
  width?: string;
  height?: string;
  margin?: string;
  disabled?: boolean;
  selected?: string;
}

export interface PropTypes extends Omit<WrapperProps, 'selected'> {
  onChange: (value: DataType) => void;
  list: Array<DataType>;
  placeholder?: string;
  value: string;
  height?: string;
  count?: string;
  className?: string;
}

const Wrapper = styled.div<WrapperProps>`
  ${({ ...props }) =>
    css`
      user-select: none;
      cursor: pointer;
      position: relative;
      width: ${props.width ?? `100%`};
      ${props.margin && `margin: ${props.margin};`}
      background-color: white;
      border-radius: 4px;
      font-size: 14px;
      & > div > div:first-child {
        ${!props.selected && `color: #E1E1E1;`}
      }
      & li {
        padding: 0 10px;
        width: 100%;
        height: 2.5rem;
        line-height: 2.5rem;
        cursor: pointer;
        &[data-value='${props.selected}'] {
          background-color: '#EF9CAC';
        }
        &:hover {
          background-color: '#EF9CAC';
        }
      }
      ${props.disabled &&
      css`
        cursor: not-allowed;
        background-color: '#EF9CAC';
      `}
    `}
  &:focus {
    outline: none;
  }
`;

const Selector = styled.div<{ height?: string }>`
  ${({ height }) => css`
    height: ${height ?? `52px`};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #16191d;
    border-radius: 4px;
    padding: 0px 17px;
    @media screen and (max-width: 500px) {
      font-size: 14px;
      height: ${height ?? '46px'};
    }
  `}
`;

const List = styled.ul<{ open?: boolean; count?: string }>`
  ${({ open, count = '4' }) => css`
    ${!open && `display: none;`}
    overflow-y: auto;
    position: absolute;
    width: 100%;
    border: 1px solid #16191d;
    border-top: 0;
    height: ${`${Number(count) * 2.5}rem`};
    background-color: #fff;
    &::-webkit-scrollbar {
      width: 0.3rem;
      background: rgba(0, 0, 0, 0.05);
      &-thumb {
        background-color: '#AAAAAA';
        border-radius: 5px;
      }
    }
  `}
`;

function DropBox({ width, margin, height, onChange, disabled, list, placeholder, value, count }: PropTypes) {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    if (!disabled) setOpen((prev) => !prev);
  }, [disabled]);

  const handleClick = useCallback(
    ({ name, value }: DataType) => {
      onChange({ name, value });
      setOpen(false);
    },
    [onChange]
  );

  const selectedName = useMemo(() => list.find((item) => item.value === value)?.name ?? placeholder, [list, value, placeholder]);

  const makeList = useMemo(
    () =>
      list.map(({ name, value }) => (
        <li key={value} data-value={value} onClick={() => handleClick({ name, value })}>
          {name}
        </li>
      )),
    [handleClick, list]
  );

  return (
    <Wrapper width={width} margin={margin} disabled={disabled} selected={value} tabIndex={0} onBlur={() => setOpen(false)}>
      <Selector height={height} onClick={toggleOpen}>
        <div>{selectedName}</div>
        <div style={{ fontSize: '0.5rem' }}>{isOpen ? '▲' : '▼'}</div>
      </Selector>
      <List open={isOpen} count={count}>
        {makeList}
      </List>
    </Wrapper>
  );
}

export default DropBox;
