import React from 'react';

import MultiSelector, { PropTypes as MultiSelectorPropTypes } from 'components/common/MultiSelector';

const BOOKS: MultiSelectorPropTypes['books'] = [
  { name: '재경관리사', value: '0' },
  { name: '회계관리1급', value: '1' },
];

const CHAPTER: MultiSelectorPropTypes['chapters'] = [
  { name: '1. 조세총론', book: '재경관리사', value: '0' },
  { name: '2. 국세기본법', book: '재경관리사', value: '1' },
  { name: '3. 법인세법', book: '재경관리사', value: '2' },
  { name: '4. 소득세법', book: '재경관리사', value: '3' },
  { name: '5. 부가가치세법', book: '재경관리사', value: '4' },
];

const TOPIC: MultiSelectorPropTypes['topics'] = [
  { name: '1. 조세의 개념과 분류', chapter: '1. 조세총론', value: '0' },
  { name: '2. 조세법의 기본원칙', chapter: '1. 조세총론', value: '1' },
  { name: '1. 총설', chapter: '2. 국세기본법', value: '2' },
  { name: '2. 국세부과의 원칙', chapter: '2. 국세기본법', value: '3' },
  { name: '3. 세법적용의 원칙', chapter: '2. 국세기본법', value: '4' },
  { name: '4. 과세요건', chapter: '2. 국세기본법', value: '5' },
  { name: '1. 총설', chapter: '3. 법인세법', value: '6' },
  { name: '2. 각 사업연도 소득에 대한 법인세', chapter: '3. 법인세법', value: '7' },
  { name: '3. 익금의 계산', chapter: '3. 법인세법', value: '8' },
  { name: '4. 손금의 계산', chapter: '3. 법인세법', value: '9' },
  { name: '5. 손익의 귀속', chapter: '3. 법인세법', value: '10' },
  { name: '6. 감가상각비의 손금불산입', chapter: '3. 법인세법', value: '11' },
  { name: '7. 기부금의 손금불산입', chapter: '3. 법인세법', value: '12' },
  { name: '8. 접대비의 손금불산입', chapter: '3. 법인세법', value: '13' },
  { name: '9. 지급이자의 손금불산입', chapter: '3. 법인세법', value: '14' },
  { name: '10 충당금의 손금산입', chapter: '3. 법인세법', value: '15' },
  { name: '11. 준비금의 손금산입', chapter: '3. 법인세법', value: '16' },
  { name: '12. 부당행위계산부인', chapter: '3. 법인세법', value: '17' },
  { name: '13. 과세표준과 세액의 계산', chapter: '3. 법인세법', value: '18' },
  { name: '14. 법인세의 신고와 납부', chapter: '3. 법인세법', value: '19' },
  { name: '1. 총설', chapter: '4. 소득세법', value: '20' },
  { name: '2. 소득세의 계산구조', chapter: '4. 소득세법', value: '21' },
  { name: '3. 금융소득', chapter: '4. 소득세법', value: '22' },
  { name: '4. 사업소득', chapter: '4. 소득세법', value: '23' },
  { name: '5. 근로소득', chapter: '4. 소득세법', value: '24' },
  { name: '6. 연금소득, 기타소득', chapter: '4. 소득세법', value: '25' },
  { name: '7. 종합소득금액의 계산', chapter: '4. 소득세법', value: '26' },
  { name: '8. 종합소득과세표준 및 세액의 계산', chapter: '4. 소득세법', value: '27' },
  { name: '9. 세액공제, 감면', chapter: '4. 소득세법', value: '28' },
  { name: '10. 퇴직소득세', chapter: '4. 소득세법', value: '29' },
  { name: '11. 원천징수', chapter: '4. 소득세법', value: '30' },
  { name: '12. 연말정산', chapter: '4. 소득세법', value: '31' },
  { name: '13. 양도소득세', chapter: '4. 소득세법', value: '32' },
  { name: '14. 신고납부 및 결정과 징수', chapter: '4. 소득세법', value: '33' },
  { name: '1. 부가가치세의 의의', chapter: '5. 부가가치세법', value: '34' },
  { name: '2. 부가가치세의 계산구조', chapter: '5. 부가가치세법', value: '35' },
  { name: '3. 납부의무자', chapter: '5. 부가가치세법', value: '36' },
  { name: '4. 과세기간', chapter: '5. 부가가치세법', value: '37' },
  { name: '5. 납세지', chapter: '5. 부가가치세법', value: '38' },
  { name: '6. 부가가치세의 과세대상거래', chapter: '5. 부가가치세법', value: '39' },
  { name: '7. 재화와 용역의 공급시기', chapter: '5. 부가가치세법', value: '40' },
  { name: '8. 영세율과 면세', chapter: '5. 부가가치세법', value: '41' },
  { name: '9. 과세표준과 매출세액의 계산', chapter: '5. 부가가치세법', value: '42' },
  { name: '10. 매입세액의 계산', chapter: '5. 부가가치세법', value: '43' },
  { name: '11. 세금계산서 실무', chapter: '5. 부가가치세법', value: '44' },
  { name: '12. 부가가치세의 신고, 납부', chapter: '5. 부가가치세법', value: '45' },
  { name: '13. 간이과세', chapter: '5. 부가가치세법', value: '46' },

];

const UNIT: MultiSelectorPropTypes['details'] = [
  { topic: '1. 조세의 개념과 분류', name:'꼭 클릭하세요!!', value: '0' },
  { topic: '2. 조세법의 기본원칙',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '1. 총설',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '2. 국세부과의 원칙',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '3. 세법적용의 원칙',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '4. 과세요건',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '1. 총설',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '2. 각 사업연도 소득에 대한 법인세',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '3. 익금의 계산',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '4. 손금의 계산',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '5. 손익의 귀속',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '6. 감가상각비의 손금불산입',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '7. 기부금의 손금불산입',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '8. 접대비의 손금불산입',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '9. 지급이자의 손금불산입',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '10 충당금의 손금산입',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '11. 준비금의 손금산입',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '12. 부당행위계산부인',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '13. 과세표준과 세액의 계산',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '14. 법인세의 신고와 납부',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '1. 총설',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '2. 소득세의 계산구조',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '3. 금융소득',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '4. 사업소득',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '5. 근로소득',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '6. 연금소득, 기타소득',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '7. 종합소득금액의 계산',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '8. 종합소득과세표준 및 세액의 계산',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '9. 세액공제, 감면', name:'꼭 클릭하세요!!', value: '0' },
  { topic: '10. 퇴직소득세',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '11. 원천징수',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '12. 연말정산',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '13. 양도소득세',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '14. 신고납부 및 결정과 징수',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '1. 부가가치세의 의의',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '2. 부가가치세의 계산구조',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '3. 납부의무자',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '4. 과세기간', name:'꼭 클릭하세요!!', value: '0' },
  { topic: '5. 납세지',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '6. 부가가치세의 과세대상거래',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '7. 재화와 용역의 공급시기', name:'꼭 클릭하세요!!', value: '0' },
  { topic: '8. 영세율과 면세', name:'꼭 클릭하세요!!', value: '0' },
  { topic: '9. 과세표준과 매출세액의 계산',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '10. 매입세액의 계산',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '11. 세금계산서 실무',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '12. 부가가치세의 신고, 납부',  name:'꼭 클릭하세요!!', value: '0' },
  { topic: '13. 간이과세',  name:'꼭 클릭하세요!!', value: '0' },
];

const TITLE: MultiSelectorPropTypes['titles'] = ['책', '챕터', '토픽', '유닛'];

export interface PropTypes {
  onChange: MultiSelectorPropTypes['onChange'];
}

function ChapterForm({ onChange }: PropTypes) {
  return <MultiSelector books={BOOKS} chapters={CHAPTER} topics={TOPIC} details={UNIT} titles={TITLE} onChange={onChange} />;
}

export default ChapterForm;
