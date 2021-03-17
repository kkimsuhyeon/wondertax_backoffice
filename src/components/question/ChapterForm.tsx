import React from 'react';

import MultiSelector, { PropTypes as MultiSelectorPropTypes } from 'components/common/MultiSelector';

const BOOKS: MultiSelectorPropTypes['books'] = [
  { name: '책1', value: 0 },
  { name: '책2', value: 1 },
];

const CHAPTER: MultiSelectorPropTypes['chapters'] = [
  { name: '챕터1', book: '책1', value: 0 },
  { name: '챕터2', book: '책1', value: 1 },
  { name: '챕터3', book: '책1', value: 2 },
  { name: '챕터4', book: '책1', value: 3 },
  { name: '챕터5', book: '책2', value: 3 },
  { name: '챕터6', book: '책2', value: 3 },
  { name: '챕터7', book: '책2', value: 3 },
  { name: '챕터8', book: '책2', value: 3 },
];

const TOPIC: MultiSelectorPropTypes['topics'] = [
  { name: '토픽1', chapter: '챕터1', value: 0 },
  { name: '토픽2', chapter: '챕터1', value: 1 },
  { name: '토픽2', chapter: '챕터2', value: 1 },
  { name: '토픽3', chapter: '챕터2', value: 1 },
  { name: '토픽4', chapter: '챕터3', value: 1 },
  { name: '토픽5', chapter: '챕터3', value: 1 },
  { name: '토픽6', chapter: '챕터4', value: 1 },
  { name: '토픽7', chapter: '챕터5', value: 1 },
  { name: '토픽8', chapter: '챕터6', value: 1 },
  { name: '토픽9', chapter: '챕터7', value: 1 },
  { name: '토픽1', chapter: '챕터8', value: 1 },
  { name: '토픽2', chapter: '챕터1', value: 1 },
];

const UNIT: MultiSelectorPropTypes['details'] = [
  { name: '유닛1', topic: '토픽1', value: 0 },
  { name: '유닛2', topic: '토픽2', value: 1 },
  { name: '유닛3', topic: '토픽4', value: 1 },
  { name: '유닛4', topic: '토픽3', value: 1 },
  { name: '유닛5', topic: '토픽5', value: 1 },
  { name: '유닛6', topic: '토픽1', value: 1 },
  { name: '유닛7', topic: '토픽2', value: 1 },
  { name: '유닛8', topic: '토픽3', value: 1 },
  { name: '유닛9', topic: '토픽4', value: 1 },
  { name: '유닛1', topic: '토픽5', value: 1 },
  { name: '유닛2', topic: '토픽1', value: 1 },
  { name: '유닛3', topic: '토픽2', value: 1 },
  { name: '유닛4', topic: '토픽3', value: 1 },
  { name: '유닛5', topic: '토픽4', value: 1 },
  { name: '유닛6', topic: '토픽5', value: 1 },
  { name: '유닛7', topic: '토픽1', value: 1 },
  { name: '유닛8', topic: '토픽2', value: 1 },
];

const TITLE: MultiSelectorPropTypes['titles'] = ['책', '챕터', 'xhvl'];

function ChapterForm() {
  return <div>test</div>;
}

export default ChapterForm;
