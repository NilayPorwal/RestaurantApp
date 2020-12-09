import React, {Component} from 'react';
import { Text, Image, TextInput, View, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const styles = require('./LoginStyles');


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
            errors:{},
            isLoading:false
        }
     }

 
   onLogin = () => {
        if (this._validateForm()) {
        this.props.navigation.push("RestaurantsList")
        }

   }


 _validateForm = () =>{
          const {username, password} = this.state
          let errors = {};
          let formIsValid = true;
            
          if (username.trim().length == 0 || username != "test") {
            formIsValid = false;
            errors["username"] = "*Please enter a valid Username.";
          }
          

          if (password.trim().length == 0 || password != "testing") {
            formIsValid = false;
            errors["password"] = "*Please enter a valid Password.";
          }
        

        this.setState({errors})
        return formIsValid;
  }  

  render(){
    return (
           <View style={{backgroundColor:'rgba(255,255,255,0.8)', flex:1}}> 
            <KeyboardAvoidingView
                behavior='position'
                keyboardVerticalOffset={(Platform.OS === 'ios') ? 40 : 20}
                >   
                <Image 
                    source = {require("../../assets/logo.png")}
                    style ={styles.logo}
                    />
         
                <View style={{...styles.textView, marginTop:50}}>
                    <View style={{ width: '10%', alignItems: 'flex-start'}}>
                      <FontAwesome name="user" style={{fontSize:20}} />
                    </View>
                    <View style={{ width: "90%", }}>
                        <TextInput
                            style={{color: '#000000', fontSize: 15 }}
                            placeholder="Username"
                            returnKeyLabel={"next"}
                            onChangeText={username => this.setState({username})}
                            autoFocus
                            underlineColorAndroid="transparent"
                            placeholderTextColor="#696969"

                        />   
                    </View>
              

                </View>
                <Text style={styles.errorText}>{this.state.errors.username}</Text>
 
                
                <View style={styles.textView}>
                     <View style={{ width: '10%', alignItems: 'flex-start', }}>
                      <FontAwesome  name="key" style={{fontSize:20}}  />
                    </View>
                    <View style={{ width: "90%", }}>
                        <TextInput
                            style={{color: '#000000', fontSize: 15 }}
                            returnKeyLabel={"next"}
                            onChangeText={password => this.setState({password})}
                            placeholder="Password"
                            placeholderTextColor="#696969"
                            secureTextEntry={true}
                        />                   
                   </View>
                </View>
                 <Text style={styles.errorText}>{this.state.errors.password}</Text>

                
                {
                    (this.state.isLoading == true) ? 
                        <View style={{ marginVertical: 10 }}>
                          <ActivityIndicator size='large' color="#3498db" />
                        </View> :
                        <TouchableOpacity onPress={()=>this.onLogin()} style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                }
             </KeyboardAvoidingView>
            </View>   
    )
}
}

export default Login;
