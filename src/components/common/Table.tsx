import React from 'react';

import styled, { css } from 'styled-components';

export interface Structure<T>
  extends Array<{
    id: keyof T;
    title: string;
    flex: string;
    parser?: (args: Partial<T>) => React.ReactNode;
  }> {}

export interface PropTypes<T> {
  structure: Structure<T>;
  list?: Array<T>;
  uniqueKey: keyof T;
  onClick?: (args: T) => void;
}

function Table<T>({ structure, list = [], uniqueKey, onClick }: PropTypes<T>) {
  return (
    <Wrapper>
      <Header>
        {structure.map((item) => {
          return (
            <Data key={`${item.id}`} flex={item.flex}>
              {item.title}
            </Data>
          );
        })}
      </Header>
      <Body>
        {list.map((item) => (
          <Row key={`${item[uniqueKey]}`} onClick={onClick ? () => onClick(item) : undefined}>
            {structure.map(({ flex, id, parser }) => (
              <Data key={`${item[uniqueKey]}-${id}`} flex={flex}>
                {parser ? parser(item) : item[id]}
              </Data>
            ))}
          </Row>
        ))}
      </Body>
    </Wrapper>
  );
}

export default Table;

const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.blackGray};
  border-left: 1px solid ${({ theme }) => theme.blackGray};
  background-color: white;
`;

const Row = styled.div<{ onClick?: () => void }>`
  display: flex;
  ${({ onClick, theme }) =>
    css`
      ${onClick &&
      css`
        cursor: pointer;
        &:hover {
          background-color: ${theme.lemon};
        }
      `}
    `}
`;

const Header = styled(Row)`
  ${({ theme }) => css`
    background-color: ${theme.whiteGray};

    & > div {
      text-align: center;
    }
  `}
`;

const Body = styled.div`
  & > div > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Data = styled.div<{ flex: string }>`
  ${({ flex, theme }) => css`
    border-right: 1px solid ${theme.blackGray};
    border-bottom: 1px solid ${theme.blackGray};
    padding: 1rem 0.5rem 1rem;
    flex: ${flex};
  `}
`;
