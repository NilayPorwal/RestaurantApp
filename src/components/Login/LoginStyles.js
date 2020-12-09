const React = require('react-native');
const { Dimensions, StyleSheet } = React;
const {height, width} = Dimensions.get('window');
import { ActuatedNormalize } from '../../utils/ActuatedNormalize';

module.exports = StyleSheet.create({
    logo:{
      height:height*0.3,
      width:width*0.5,
      resizeMode:"contain",
      alignSelf:"center"
    },
    textView:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        alignSelf: 'center', 
        width: width*0.85, 
        borderBottomWidth: 1, 
        borderBottomColor: "#d3d3d3",
    },
    button:{ 
        alignSelf: 'center', 
        elevation: 1, 
        borderRadius: 25, 
        paddingVertical: 12, 
        backgroundColor: '#27dd93', 
        width: width*0.85, 
        marginTop:20
    },
    buttonText:{
        color: "#fff",  
        fontFamily:"sans-serif-medium", 
        fontSize: ActuatedNormalize(18), 
        textAlign: 'center'
    },
    errorText:{
        fontSize:ActuatedNormalize(12), 
        color:"red"
    }
})