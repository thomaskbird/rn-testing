import {useEffect, useState} from 'react';
import moment from 'moment/moment';
import {DayType} from './Calendar.types.ts';
import {generateCalendarData} from './Calendar.utils.ts';

const useCalendar = () => {
  const today = moment();
  const [currentDate, setCurrentDate] = useState(today);
  const [year, setYear] = useState<number>(currentDate.year());
  const [month, setMonth] = useState<number>(currentDate.month() + 1);
  const [start, setStart] = useState<DayType | undefined>(undefined);
  const [end, setEnd] = useState<DayType | undefined>(undefined);
  const [calendarData, setCalendarData] = useState<any>([]);
  const [isCurrentMonth, setIsCurrentMonth] = useState(true);

  const handlePagination = (dir: 'next' | 'prev') => {
    const nextTimestamp =
      dir === 'next'
        ? currentDate.add(1, 'month')
        : currentDate.subtract(1, 'month');

    setIsCurrentMonth(today.month() === nextTimestamp.month());
    setStart(undefined);
    setEnd(undefined);
    setMonth(nextTimestamp.month() + 1);
    setYear(nextTimestamp.year());
    setCurrentDate(nextTimestamp);
  };

  useEffect(() => {
    setCalendarData(generateCalendarData(year, month));
  }, [year, month]);

  return {
    calendarData,
    currentDate,
    isCurrentMonth,
    start,
    end,
    setStart,
    setEnd,
    handlePagination,
  };
};

export default useCalendar;
