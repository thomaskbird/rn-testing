import {ReactNode} from 'react';

export type CalendarTypes = {
  multiMonth?: boolean;
};

export type CalendarRowType = {
  children: ReactNode | ReactNode[];
};

export type activeStateType = 'start' | 'end' | 'between' | 'inactive';

export type CalendarCellType = CalendarTypes & {
  day: DayType;
  onTouch(day: DayType): void;
  activeState: activeStateType;
};

export type DayType = {
  id: number;
  digit: number;
  month: number;
  activeMonth: boolean;
};
