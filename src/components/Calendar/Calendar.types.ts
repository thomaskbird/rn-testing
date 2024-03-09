import {ReactNode} from 'react';

export type CalendarApi = {
  getValues(): [DayType | undefined, DayType | undefined];
}

export type CalendarTypes = {
  multiMonth?: boolean;
  onReady?(api: CalendarApi): void,
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
  year: number;
  activeMonth: boolean;
};
