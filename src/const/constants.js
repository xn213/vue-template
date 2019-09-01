export const DATA_GRID_PAGE_SIZE = 10;

// moment 处理时间格式
export const TIME_FORMAT = 'YYYY-MM-DD ddd HH:mm';
export const SECOND_FORMAT = 'YYYY-MM-DD ddd HH:mm:ss';
export const MINUTE_FORMAT = 'YYYY-MM-DD ddd HH:mm';
export const DATE_FORMAT = 'YYYY-MM-DD';
export const PLACEHOLDER = '--';

export const colorMaps = {
  red: '#ed3f14',
  yellow: '#f90',
  blue: '#2d8cf0',
  green: '#19be6b',
  pink: 'rgb(239, 106, 255)',
};

// 用户角色
export const userRoles = [
  // {value:0, label:"未知", label_en:"unknown_user_role"},
  {
    value: 1,
    label: 'admin',
    label_en: 'admin',
  }, // admin
  {
    value: 2,
    label: 'TS leader',
    label_en: 'it_leader',
  }, // IT leader
  {
    value: 3,
    label: 'TS',
    label_en: 'it',
  }, // IT支持
];

// 常用的Table列宽
export const COLUMN_WIDTH = {
  TIME: 150, // 时间
  CLASS: 100, // 课程
  CLASS_TYPE: 80, // 课程类型
  CLASS_STATUS: 100, // 课程状态
  CONTACT: 150, // 联系人
  EMAIL: 150, // 邮箱
  EMPLOYEE: 150, // 员工
  MONEY: 100, // 钱数
};
