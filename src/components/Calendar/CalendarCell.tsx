import {Pressable, Text} from 'react-native';
import calendarStyles from './Calendar.styles.ts';
import {CalendarCellType} from './Calendar.types.ts';

const CalendarCell = ({day, activeState, onTouch}: CalendarCellType) => {
  const pressableStyle =
    activeState === 'between'
      ? calendarStyles.calendarCellBetween
      : activeState === 'start'
      ? calendarStyles.calendarCellActiveStart
      : activeState === 'end'
      ? calendarStyles.calendarCellActiveEnd
      : calendarStyles.calendarCell;
  const textStyle = day.activeMonth
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
