import {StyleSheet} from 'react-native';
import {hasNotch} from 'react-native-device-info';
export default StyleSheet.create({
  base: {
    paddingTop: hasNotch() ? 50 : 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flex: 0,
    flexDirection: 'row',
    alignContent: 'space-between',
    backgroundColor: '#1b1b1b',
  },
  logoIcon: {
    width: 100,
    height: 50,
  },
  backColumn: {
    flex: 1,
    flexDirection: 'column',
    maxWidth: 100,
    alignContent: 'center',
    justifyContent: 'center',
  },
  logoColumn: {
    flex: 1,
    maxWidth: 100,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  actionColumn: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    justifyContent: 'center',
  },
  actionBtnColumn: {paddingVertical: 13, paddingHorizontal: 10},
  actionColumnItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'flex-end',
    justifyContent: 'center',
  },
});
