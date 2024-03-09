import {StyleSheet} from 'react-native';

const cellRadius = 15;
const cellActiveColor = '#cbe0fc';

const calendarCellCommon = {
  flex: 1,
  marginVertical: 2,
  paddingVertical: 20,
  paddingHorizontal: 10,
};

const calendarStyles = StyleSheet.create({
  wrapper: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  headerText: {
    flex: 1,
    color: '#333',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -10
  },
  content: {},
  calendarRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  calendarCell: {
    ...calendarCellCommon,
  },
  calendarCellActiveStart: {
    ...calendarCellCommon,
    borderTopLeftRadius: cellRadius,
    borderBottomLeftRadius: cellRadius,
    backgroundColor: cellActiveColor,
  },
  calendarCellActiveEnd: {
    ...calendarCellCommon,
    borderTopRightRadius: cellRadius,
    borderBottomRightRadius: cellRadius,
    backgroundColor: cellActiveColor,
  },
  calendarCellToday: {
    ...calendarCellCommon,
    borderRadius: 10,
    backgroundColor: '#7099e8',
  },
  calendarCellBetween: {
    ...calendarCellCommon,
    backgroundColor: '#cbe0fc',
  },
  calendarCellText: {
    color: '#333',
    fontWeight: '600',
    textAlign: 'center',
  },
  calendarCellTextInactive: {
    color: '#aaa',
    fontWeight: '300',
    textAlign: 'center',
  },
  calendarCellTextToday: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default calendarStyles;
