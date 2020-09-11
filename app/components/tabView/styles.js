import {StyleSheet, Dimensions} from 'react-native';
import ApplicationStyles from '../../theme/ApplicationStyles';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    width: Dimensions.get('window').width,
  },
  firstScene: {
    flex: 1,
    backgroundColor: '#ff4081',
  },
  secondScene: {
    flex: 1,
    backgroundColor: '#673ab7',
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
