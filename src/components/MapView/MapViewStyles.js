const React = require('react-native');
const { Dimensions, StyleSheet } = React;
const {height, width} = Dimensions.get('window');

module.exports = StyleSheet.create({
  mapContainer: {
    flex:1, 
    marginTop:10
  },
  markerImg:{
      height: 35, 
      width:35, 
      resizeMode:"contain" }
})