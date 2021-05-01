import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';

export interface DropboxItem {
  name: string;
  value: string;
}

interface WrapperPropTypes {
  width?: string;
  disabled?: boolean;
  selected?: string;
  margin?: string;
}

export interface PropTypes extends Omit<WrapperPropTypes, 'selected'> {
  list: Array<DropboxItem>;
  value: DropboxItem['value'];
  onChange: (value: DropboxItem) => void;
  count?: string;
  placeholder?: string;
  height?: string;
}

function DropBox({
  list,
  value,
  count = '4',
  placeholder,
  height = '2.5rem',
  width = '100%',
  disabled = false,
  onChange,
  margin,
}: PropTypes) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [selectValue, setSelectValue] = useState<DropboxItem>({ name: '', value: '' });

  const handleClick = useCallback(
    ({ name, value }) => {
      setSelectValue({ name: name, value: value });
      onChange({ name: name, value: value });
      wrapperRef.current?.blur();
    },
    [onChange]
  );

  const handleWrapperClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (document.activeElement === e.currentTarget) {
      e.preventDefault(); // mouseDown은 Focus를 일으키는 이벤트임.
      // 즉 mouseDown의 기본 이벤트를 막게되면 Focus를 막는다.
      e.currentTarget.blur();
    }
  }, []);

  useEffect(() => {
    setSelectValue({ value: value, name: list.find((item) => item.value === value)?.name as string });
  }, [list, value]);

  return (
    <Wrapper
      tabIndex={0}
      ref={wrapperRef}
      onMouseDown={handleWrapperClick}
      width={width}
      disabled={disabled}
      selected={value}
      margin={margin}
    >
      <Selector height={height}>{selectValue.value === '' ? placeholder : selectValue.name}</Selector>
      <List count={count}>
        {list.map(({ name, value }) => (
          <div
            key={value}
            data-value={value}
            onMouseDown={(e) => e.stopPropagation()}
            // 이벤트 전파 방지.
            onClick={() => handleClick({ name: name, value: value })}
          >
            {name}
          </div>
        ))}
      </List>
    </Wrapper>
  );
}

export default DropBox;

const Selector = styled.div<{ height: string }>`
  position: relative;
  height: ${({ height }) => height};
  line-height: ${({ height }) => height};
  text-align: center;
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};

  &::after {
    content: '▼';
    position: absolute;
    right: 5px;
    font-size: 0.8rem;
  }
`;

const List = styled.div<{ count: string; isOpen?: boolean }>`
  ${({ theme, count }) => css`
    position: absolute;
    display: none;
    overflow-y: auto;
    height: ${`${count === '1' ? `2.54rem` : +count * 2.52}rem`};
    width: 100%;
    border: 1px solid black;
    border-top: none;
    background-color: ${theme.white};
  `}

  & > div {
    text-align: center;
    height: 2.5rem;
    line-height: 2.5rem;
    cursor: pointer;
  }
`;

const Wrapper = styled.div<WrapperPropTypes>`
  ${({ disabled, width, theme, selected }) => css`
    position: relative;
    user-select: none;
    width: ${width};

    & > ${List} > div[data-value='${selected}'] {
      background-color: ${theme.lemon};
    }

    &:focus {
      & > ${List} {
        display: block;
      }

      & > ${Selector}::after {
        content: '▲';
      }
    }

    ${disabled &&
    css`
      & > ${Selector} {
        cursor: not-allowed;
        background-color: ${theme.whiteGray};
      }

      &:focus {
        & > ${List} {
          display: none;
        }

        & > ${Selector}::after {
          content: '▼';
        }
      }
    `}
  `}
`;
