import React from 'react';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login/Login'
import RestaurantsList from './components/RestaurantsList/RestaurantsList'
import RestaurantsDetails from './components/RestaurantDetails/RestaurantDetails'
import MapView from './components/MapView/MapView'


const Stack = createStackNavigator();


const CreateHomeStack = () => {
    return (
     <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="RestaurantsList" component={RestaurantsList}  
                      options={{
                        title: 'Restaurants',
                        headerStyle: {
                          backgroundColor: '#27dd93',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontFamily:"sans-serif-medium", alignSelf:"center",marginRight:50
                        },
                      }} />
        <Stack.Screen name="RestaurantsDetails" component={RestaurantsDetails} options={{headerShown: false}} />
        <Stack.Screen name="MapView" component={MapView} 
                      options={{
                        title: 'Map View',
                        headerStyle: {
                          backgroundColor: '#27dd93',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontFamily:"sans-serif-medium", alignSelf:"center", marginRight:50
                        },
                      }}/>
      </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <CreateHomeStack />
     </NavigationContainer>
  );
};



export default Navigation;
