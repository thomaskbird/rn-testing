import {ReactNode} from 'react';

export type CalendarTypes = {};

export type CalendarRowType = {
  children: ReactNode | ReactNode[];
};

export type activeStateType = 'start' | 'end' | 'between' | 'inactive';

export type CalendarCellType = {
  day: DayType;
  isCurrentMonth: boolean;
  onTouch(day: DayType): void;
  activeState: activeStateType;
};

export type DayType = {
  id: number;
  digit: number;
  activeMonth: boolean;
};
