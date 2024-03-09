import {Pressable, Text} from 'react-native';
import calendarStyles from './Calendar.styles.ts';
import {CalendarCellType} from './Calendar.types.ts';
import moment from 'moment';

const CalendarCell = ({
  day,
  activeState,
  multiMonth,
  onTouch,
}: CalendarCellType) => {
  const today = moment().date();
  const currentMonth = moment().format('M');

  const pressableStyle =
    today === day.digit && Number(currentMonth) === day.month
      ? calendarStyles.calendarCellToday
      : activeState === 'between'
      ? calendarStyles.calendarCellBetween
      : activeState === 'start'
      ? calendarStyles.calendarCellActiveStart
      : activeState === 'end'
      ? calendarStyles.calendarCellActiveEnd
      : calendarStyles.calendarCell;
  const textStyle =
    today === day.digit && Number(currentMonth) === day.month
      ? calendarStyles.calendarCellTextToday
      : day.activeMonth
      ? calendarStyles.calendarCellText
      : calendarStyles.calendarCellTextInactive;

  const handlePress = () => {
    if (!multiMonth) {
      if(day.activeMonth) {
        onTouch(day);
      }
    } else {
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
