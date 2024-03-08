import moment from 'moment';
import {activeStateType, DayType} from './Calendar.types.ts';

export const getNumOfDaysInMonth = (year: number, month: number): number => {
  return moment(`${year}-${month}`, 'YYYY-M').daysInMonth();
};

export const formatDigitWithLeading = (str: string) => str.padStart(2, '0');

export const generateCalendarData = (year: number, month: number) => {
  const start: any[] = [];
  const monthDays: any[] = [];
  const end: any[] = [];

  const prevMonth = month === 1 ? 12 : month - 1;
  const nextMonth = month === 12 ? 1 : month + 1;
  const numOfDaysInPrevMonth = getNumOfDaysInMonth(
    year,
    prevMonth,
  );
  const numOfDaysInMonth = getNumOfDaysInMonth(year, month);

  const firstDayOfMonth = moment(
    `${year}-${formatDigitWithLeading(month.toString())}-01`,
  ).day();
  const lastDayOfMonth = moment(
    `${year}-${formatDigitWithLeading(
      month.toString(),
    )}-${formatDigitWithLeading(numOfDaysInMonth.toString())}`,
  ).day();

  for (let i = 0; i < firstDayOfMonth; i++) {
    start.push({
      month: prevMonth,
      digit: numOfDaysInPrevMonth - i,
      currMonth: false,
    });
  }

  for (let i = 0; i < numOfDaysInMonth; i++) {
    monthDays.push({
      month: month,
      digit: i + 1,
      currMonth: true,
    });
  }

  const numberOfEndDays = 7 - (lastDayOfMonth + 1);
  for (let i = 0; i < numberOfEndDays; i++) {
    end.push({
      month: nextMonth,
      digit: i + 1,
      currMonth: false,
    });
  }

  const flatDays = [...start.reverse(), ...monthDays, ...end];

  let dayCount = 1;
  const formattedData: any[] = [];
  let week: any[] = [];

  flatDays.forEach((day, idx) => {
    week.push({
      id: idx + 1,
      digit: day.digit,
      month: day.month,
      activeMonth: day.currMonth,
    });

    if (dayCount === 7) {
      formattedData.push(week);
      dayCount = 1;
      week = [];
    } else {
      dayCount++;
    }
  });

  return formattedData;
};

export const determineActiveState = (
  start: DayType | undefined,
  end: DayType | undefined,
  day: DayType,
  isStart: boolean,
  isEnd: boolean,
): activeStateType => {
  let activeState: activeStateType = 'inactive';

  if (start && end) {
    if (start?.digit < day.digit && end?.digit > day.digit) {
      activeState = 'between';
    }
  }
  if (isStart || isEnd) {
    if (isStart) {
      activeState = 'start';
    }

    if (isEnd) {
      activeState = 'end';
    }
  }

  return activeState;
};
