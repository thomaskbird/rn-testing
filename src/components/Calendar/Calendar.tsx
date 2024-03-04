import calendarStyles from './Calendar.styles.ts';
import {Pressable, Text, View} from 'react-native';
import CalendarRow from './CalendarRow.tsx';
import CalendarCell from './CalendarCell.tsx';
import {determineActiveState} from './Calendar.utils.ts';
import {CalendarTypes, DayType} from './Calendar.types.ts';
import useCalendar from './useCalendar.ts';

const Calendar = ({}: CalendarTypes) => {
  const {
    calendarData,
    handlePagination,
    month,
    year,
    start,
    end,
    setStart,
    setEnd,
  } = useCalendar();

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
              {week.map((day: DayType) => {
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
