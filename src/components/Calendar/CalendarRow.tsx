import {View} from 'react-native';
import calendarStyles from './Calendar.styles.ts';
import {CalendarRowType} from './Calendar.types.ts';

const CalendarRow = ({children}: CalendarRowType) => {
  return <View style={calendarStyles.calendarRow}>{children}</View>;
};

export default CalendarRow;
