const React = require('react-native');
const { Dimensions, StyleSheet } = React;
const {height, width} = Dimensions.get('window');
import { ActuatedNormalize } from '../../utils/ActuatedNormalize';

module.exports = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width:width,
    backgroundColor:"#fff",
  },
  itemContainer: {
    flexDirection:"row", 
    padding:10,
    elevation:5,
    marginTop:10,
    marginHorizontal:15,
    borderRadius:5,
    backgroundColor:"#fff",
    justifyContent:"space-between"
  },
  image: {
    height:height * 0.3, 
    width:width,
    resizeMode:"stretch"
  },
  title: {
    fontFamily:"sans-serif-medium", 
    paddingLeft:5, 
    fontSize:ActuatedNormalize(22)
  },
  phone: {
    fontFamily:"notoserif", 
    paddingLeft:5, 
    fontSize:ActuatedNormalize(17), 
    color:"#696969",
    marginTop:5
  },
  heading: {
    fontFamily:"sans-serif-medium", 
    paddingLeft:5, 
    fontSize:ActuatedNormalize(18), 
    marginTop:15
  },
  backBtn:{
    position:"absolute", 
    top:15, 
    left:10
  },
  backIcon:{
    fontSize:ActuatedNormalize(25),
  }
})