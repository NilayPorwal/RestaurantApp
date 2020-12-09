import React, {Component} from 'react';
import {
  SafeAreaView,
  PermissionsAndroid,
  Image
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from 'react-native-maps';
const styles = require('./MapViewStyles');

class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          details:this.props.route.params.details,
          coords:[]
        }
        this.mapRef = null;
     }

    componentDidMount(){
        this.initPermissions()
        this.getCurrentLocation()

    }
 
    initPermissions = async() => {

        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the location');
        } else {
            console.log('Location permission denied');
        }
    }

    getCurrentLocation(){
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          const coords = [{latitude:parseInt(position.coords.latitude), longitude:parseInt(position.coords.longitude)},
                          {latitude:parseInt(this.state.details.lat), longitude:parseInt(this.state.details.long)}]

            this.setState({coords})

            this.mapRef.fitToCoordinates(
              coords,
              true, // not animated
            );

        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
    }

 render(){
  return (
    <SafeAreaView style={{flex:1}}>
       <MapView
          ref={(ref) => { this.mapRef = ref }}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.mapContainer}
          initialRegion={{
            latitude: parseInt(this.state.details.lat),
            longitude: parseInt(this.state.details.long),
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
          loadingEnabled
          showsMyLocationButton
          tintColor="#27dd93"
        >
            <Marker
              coordinate={{
                  latitude: parseInt(this.state.details.lat),
                  longitude: parseInt(this.state.details.long)
                }}
            >
             <Image source={require('../../assets/shop-pin.png')} style={styles.markerImg} />
           </Marker> 

        	<Polyline
                coordinates={this.state.coords}
                strokeColor="#27dd93"
                strokeWidth={2}
            />
          <MapViewDirections
            origin={this.state.coords[0]}
            destination={this.state.coords[1]}
            apikey="AIzaSyDUDrgGaXeWZ6xDf64kgrQTd2Rz_ikCDF0"
          />
        </MapView>
      </SafeAreaView>
  )
 }
}



export default MapScreen;
