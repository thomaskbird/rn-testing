import {ReactNode} from 'react';

export type CalendarTypes = {};

export type CalendarRowType = {
  children: ReactNode | ReactNode[];
};

export type activeStateType = 'start' | 'end' | 'between' | 'inactive';

export type CalendarCellType = {
  activeState: activeStateType;
  day: DayType;
  onTouch(day: DayType): void;
};

export type DayType = {
  id: number;
  digit: number;
  activeMonth: boolean;
};
