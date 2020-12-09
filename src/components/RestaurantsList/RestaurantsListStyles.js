const React = require('react-native');
const { Dimensions, StyleSheet } = React;
const {height, width} = Dimensions.get('window');
import { ActuatedNormalize } from '../../utils/ActuatedNormalize';

module.exports = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width:width
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
    height:height * 0.1, 
    width:width*0.2,
    borderRadius:5
  },
  titleContainer: {
    paddingLeft: 15,
    justifyContent:"center"
  },
  title: {
    fontFamily:"sans-serif-medium", 
    paddingLeft:5,
    fontSize:ActuatedNormalize(15)
  },
  icon: {
    backgroundColor:"#27dd93",
    padding:10,
    alignSelf:"center",
    borderRadius:5
  }
})