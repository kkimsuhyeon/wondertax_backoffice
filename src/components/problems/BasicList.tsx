import React from 'react';

import Table, { PropTypes as TablePropTypes } from 'components/common/Table';

interface ListItem {
  id: string;
  question: string;
  answer: number;
  example1: string;
  example2: string;
  example3: string;
  example4: string;
}

type BasicListTablePropTypes = TablePropTypes<ListItem>;

const TABLE_STRUCTURE: BasicListTablePropTypes['structure'] = [
  { id: 'question', title: '문제', flex: '4' },
  { id: 'example1', title: '보기1', flex: '4' },
  { id: 'example2', title: '보기2', flex: '4' },
  { id: 'example3', title: '보기3', flex: '4' },
  { id: 'example4', title: '보기4', flex: '4' },
  { id: 'answer', title: '답', flex: '0.5', parser: ({ answer }) => answer !== undefined && answer + 1 },
];

export interface PropTypes {
  list: BasicListTablePropTypes['list'];
  onClick: BasicListTablePropTypes['onClick'];
  uniqueKey: BasicListTablePropTypes['uniqueKey'];
}

function BasicList({ list, onClick, uniqueKey }: PropTypes) {
  return <Table structure={TABLE_STRUCTURE} list={list} uniqueKey={uniqueKey} onClick={onClick} />;
}

export default BasicList;
