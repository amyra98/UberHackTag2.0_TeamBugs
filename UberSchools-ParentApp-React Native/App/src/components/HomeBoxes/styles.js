import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  heading: {
    backgroundColor: '#e7e7e7',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#434343',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },
  bottomText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
    marginBottom : 10,
  },

  paddingBottom: {
    fontSize: 5,
    color: '#ffffff',
  }
});

export default styles;
