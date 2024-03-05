import {Pressable, Text} from 'react-native';
import calendarStyles from './Calendar.styles.ts';
import {CalendarCellType} from './Calendar.types.ts';
import moment from 'moment';

const CalendarCell = ({
  day,
  isCurrentMonth,
  activeState,
  onTouch,
}: CalendarCellType) => {
  const today = moment().date();
  const pressableStyle =
    today === day.digit && day.activeMonth && isCurrentMonth
      ? calendarStyles.calendarCellToday
      : activeState === 'between'
      ? calendarStyles.calendarCellBetween
      : activeState === 'start'
      ? calendarStyles.calendarCellActiveStart
      : activeState === 'end'
      ? calendarStyles.calendarCellActiveEnd
      : calendarStyles.calendarCell;
  const textStyle =
    today === day.digit && day.activeMonth && isCurrentMonth
      ? calendarStyles.calendarCellTextToday
      : day.activeMonth
      ? calendarStyles.calendarCellText
      : calendarStyles.calendarCellTextInactive;

  const handlePress = () => {
    if (day.activeMonth) {
      onTouch(day);
    }
  };

  return (
    <Pressable style={pressableStyle} onPress={handlePress}>
      <Text style={textStyle}>{day.digit}</Text>
    </Pressable>
  );
};

export default CalendarCell;
