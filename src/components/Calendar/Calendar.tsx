import calendarStyles from './Calendar.styles.ts';
import {Pressable, Text, View} from 'react-native';
import CalendarRow from './CalendarRow.tsx';
import CalendarCell from './CalendarCell.tsx';
import {determineActiveState} from './Calendar.utils.ts';
import {CalendarApi, CalendarTypes, DayType} from './Calendar.types.ts';
import useCalendar from './useCalendar.ts';
import {FontAwesome} from "@expo/vector-icons";
import {useEffect} from "react";

const Calendar = ({
  multiMonth = true,
  onReady,
}: CalendarTypes) => {
  const {
    calendarData,
    currentDate,
    handlePagination,
    start,
    end,
    setStart,
    setEnd,
  } = useCalendar();

  const api: CalendarApi = {
    getValues: () => {
      return [start, end];
    }
  };

  useEffect(() => {
    if(onReady) onReady(api);
  }, []);

  const handleCellClick = (pressedDay: DayType) => {
    if(multiMonth) {
      if (start && end) {
        setStart(pressedDay);
        setEnd(undefined);
      } else if (start) {
        // is it the selected day before start day
          // if not set a new start day
          // if yes set end day
        // is the selected day the same as start day
          // if yes do nothing
          // if no proceed to below condition
        // is the selected day the same as the start day and the start month is less than the pressed month, meaning same day but next month
          // if yes set end
          // if no reset start
        if (start.digit !== pressedDay.digit && start.month <= pressedDay.month|| start.digit === pressedDay.digit && start.month < pressedDay.month) {
          setEnd(pressedDay);
        }
      } else {
        setStart(pressedDay);
      }
    } else {
      if (start && end) {
        setStart(pressedDay);
        setEnd(undefined);
      } else if (start) {
        if (start.digit !== pressedDay.digit) {
          if (start.digit < pressedDay.digit) {
            setEnd(pressedDay);
          } else {
            setStart(pressedDay);
          }
        }
      } else {
        setStart(pressedDay);
      }
    }
  };

  return (
    <View style={calendarStyles.wrapper}>
      <View style={calendarStyles.header}>
        <Pressable onPress={() => handlePagination('prev')}>
          <FontAwesome name="chevron-left" />
        </Pressable>
        <Text style={calendarStyles.headerText}>
          {currentDate.format('MMMM, YYYY')}
        </Text>
        <Pressable onPress={() => handlePagination('next')}>
          <FontAwesome name="chevron-right" />
        </Pressable>
      </View>
      <View style={calendarStyles.content}>
        {calendarData.map((week: DayType[], idx: number) => (
          <CalendarRow key={idx}>
            {week.map((day: DayType) => {
              const isStart = start?.digit === day.digit && start.month === day.month;
              const isEnd = end?.digit === day.digit && end.month === day.month;

              const activeState = determineActiveState(
                start,
                end,
                day,
                isStart,
                isEnd,
              );

              return (
                <CalendarCell
                  day={day}
                  key={day.id}
                  multiMonth={multiMonth}
                  activeState={activeState}
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
