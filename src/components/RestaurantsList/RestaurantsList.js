import React, {Component} from 'react';
import {Linking, Text, TouchableOpacity, ScrollView, FlatList, View, Image} from 'react-native';
import axios from 'axios';
import Feather from 'react-native-vector-icons/Feather';

import {connect} from 'react-redux';
import { restaurantsList, loading } from "../../actions";
import  HOC  from "../HOC";
import { RatingBar } from '../../utils/RatingBar';


const Spinner = HOC(View);
const styles = require('./RestaurantsListStyles');
const apiURL = "http://205.134.254.135/~mobile/interview/public/api/restaurants_list"

class RestaurantsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.getList()
  }

  getList = () => {
    this.props.loading(true);

    let URL = apiURL;
    axios.get(URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      console.log(JSON.stringify(response))
      this.props.loading(false);
      this.props.restaurantsList(response.data.data);
    }).catch((error) => {
      console.log(error)
      this.props.loading(false);

    });
  }

   ItemView = ({item}) => {
    return (
      // Flat List Item
    <View style={styles.itemContainer}>
      <View style={{flexDirection:"row"}}>
        <Image 
          source = {{uri:item.img[0].image}}
          style ={styles.image}
        />
        <TouchableOpacity 
              onPress={() => { this.props.navigation.push("RestaurantsDetails",{details:item})}}
              style={styles.titleContainer}
            >
              <Text style={styles.title}>{item.title}</Text>
              <RatingBar defaultRating={item.rating} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
            onPress={() => {this.props.navigation.push("MapView", {details:item})}}
            style={styles.icon}
          >
            <Feather name="map-pin" size={20} color="#fff"/>

      </TouchableOpacity>
    </View>   
    );
  };

  render() {
    return(
      <Spinner spinner={this.props.isLoading} style={{flex:1}}> 
        <ScrollView style={styles.mainContainer}>
            <FlatList
              data={this.props.list}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.ItemView}
              style={{marginBottom:20}}
            />
        </ScrollView>
      </Spinner>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.results.restaurantsList,
    isLoading: state.results.loading
  };
}

export default connect(mapStateToProps, {loading, restaurantsList})(RestaurantsList);