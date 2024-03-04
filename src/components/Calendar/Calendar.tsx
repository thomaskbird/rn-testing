import calendarStyles from './Calendar.styles.ts';
import {Pressable, Text, View} from 'react-native';
import CalendarRow from './CalendarRow.tsx';
import CalendarCell from './CalendarCell.tsx';
import {useEffect, useState} from 'react';
import {determineActiveState, generateCalendarData} from './Calendar.utils.ts';
import moment from 'moment';
import {CalendarTypes, DayType} from './Calendar.types.ts';

const Calendar = ({}: CalendarTypes) => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [year, setYear] = useState(currentDate.year());
  const [month, setMonth] = useState(currentDate.month() + 1);
  const [start, setStart] = useState<DayType | undefined>(undefined);
  const [end, setEnd] = useState<DayType | undefined>(undefined);
  const [calendarData, setCalendarData] = useState<any>(undefined);

  const handleCellClick = (pressedDay: DayType) => {
    if (start && end) {
      setStart(pressedDay);
      setEnd(undefined);
    } else if (start) {
      if (start.digit !== pressedDay.digit && start.digit < pressedDay.digit) {
        setEnd(pressedDay);
      }
    } else {
      setStart(pressedDay);
    }
  };

  const handlePagination = (dir: 'next' | 'prev') => {
    const nextTimestamp =
      dir === 'next'
        ? currentDate.add(1, 'month')
        : currentDate.subtract(1, 'month');

    setMonth(nextTimestamp.month() + 1);
    setYear(nextTimestamp.year());
    setCurrentDate(nextTimestamp);
  };

  useEffect(() => {
    setCalendarData(generateCalendarData(year, month));
  }, [year, month]);

  return (
    <View style={calendarStyles.wrapper}>
      <View style={calendarStyles.header}>
        <Pressable onPress={() => handlePagination('prev')}>
          <Text>Prev</Text>
        </Pressable>
        <Text style={calendarStyles.headerText}>
          {month}, {year}
        </Text>
        <Pressable onPress={() => handlePagination('next')}>
          <Text>Next</Text>
        </Pressable>
      </View>
      <View style={calendarStyles.content}>
        {calendarData &&
          calendarData.map((week: DayType[]) => (
            <CalendarRow>
              {week.map(day => {
                const isStart = start?.digit === day.digit;
                const isEnd = end?.digit === day.digit;

                const activeState = determineActiveState(
                  start,
                  end,
                  day,
                  isStart,
                  isEnd,
                );

                return (
                  <CalendarCell
                    activeState={activeState}
                    day={day}
                    onTouch={pressedDay => handleCellClick(pressedDay)}
                  />
                );
              })}
            </CalendarRow>
          ))}
      </View>
    </View>
  );
};

export default Calendar;
