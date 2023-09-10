import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '97%',
    borderWidth: 1,
    padding: 10,
    display: 'flex',
    gap: 10
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  name: {
    width: '75%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginRight: 15
  },
  content: {
    // width: '87%',
    height: 100,
    borderWidth: 1,
    padding: 10,
    marginRight: 15
  },
});

export default styles;
