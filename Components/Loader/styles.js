import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    opacity: 0.8,
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999999999
  },
  text: {
    color: '#FFF',
    fontSize: 50,
    opacity: 1,
  },
});

export default styles;
