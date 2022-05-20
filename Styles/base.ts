import { StyleSheet, Dimensions } from 'react-native';

const mainAppPadding = 12;
const deviceWidth = Dimensions.get('window').width - mainAppPadding;
const dividedDeviceHeight = Dimensions.get('window').height / 2;

const styles = StyleSheet.create({
  appMainContainer: {
    flex: 1,
        paddingLeft: mainAppPadding,
        paddingRight: mainAppPadding
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
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

  headerNav: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerIcon: {
    paddingRight: 16
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

  homeTextPlaceholder: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: 'rgba(255,60,0,0.8)',
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
});

export { styles };
