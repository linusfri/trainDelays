import { StyleSheet, Dimensions } from 'react-native';

const mainAppPadding = 12;
const deviceWidth = Dimensions.get('window').width - mainAppPadding;
const dividedDeviceHeight = Dimensions.get('window').height / 2;

const styles = StyleSheet.create({
  appMainContainer: {
    flex: 1,
    backgroundColor: '#2F2F2F',
    width: '100%',
  },

  flashMessage: {
    paddingTop: 30
  },

  container: {
    flex: 1,
    backgroundColor: '#2F2F2F',
    paddingLeft: mainAppPadding,
    paddingRight: mainAppPadding,
  },

  margin12Top: {
    marginTop: 12
  },

  picker: {
    color: 'white',
    backgroundColor: '#2F2F2F'
  },

  containerRadius: {
    borderRadius: 4
  },

  button: {
    padding: 10,
    backgroundColor: '#339966',
    borderRadius: 2,
  },

  formButton: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#339966',
    borderRadius: 2,
    marginBottom: 12,
  },

  pickerButton: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#339966',
    borderRadius: 2,
    marginBottom: 6,
    marginTop: 12
  },

  headerNav: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerIconLeft: {
    paddingRight: 26,
    color: 'white'
  },

  headerIconRight: {
    paddingRight: 12,
    color: 'white'
  },

  map: {
    height: dividedDeviceHeight,
    width: deviceWidth,
  },

  delayBox: {
    display: 'flex',
    borderRadius: 4,
    backgroundColor: '#424242',
    marginTop: 6,
    padding: 6,
    color: '#FEC106',
    alignItems: 'center'
  },

  stationNameBox: {
    borderRadius: 4,
    backgroundColor: '#424242',
    marginTop: 6,
    marginBottom: 6,
    color: '#FEC106',
  },

  homeTextPlaceholder: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#424242',
    padding: 20
  },

  detailsBox: {
    display: 'flex',
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginBottom: 6,
    padding: 6,
    alignItems: 'center'
  },

  stationDropDown: {
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 2,
    marginTop: 6,
    padding: 4
  },
});

const stackHeaderStyle = {
  headerTintColor: 'white',
  headerStyle: {
      backgroundColor: '#2F2F2F'
  }
};

export { styles, stackHeaderStyle };
