import React, {Component} from 'react';
import {Text, ScrollView,  View, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RatingBar } from '../../utils/RatingBar';

import {connect} from 'react-redux';
import { restaurantsList, loading } from "../../actions";

const styles = require('./RestaurantDetailsStyles');

const apiURL = "http://205.134.254.135/~mobile/interview/public/api/restaurants_list"

class RestaurantsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details:this.props.route.params.details
    }
  }

  render() {
    return(
      <ScrollView style={styles.mainContainer}>
        <Image 
            source = {{uri:this.state.details.img[0].image}}
            style ={styles.image}
          />
        <View style={{padding:10}}>  
          <Text style={styles.title}>{this.state.details.title}</Text>
          <Text style={styles.phone}>{this.state.details.phone_no}</Text>
          
          <View style={{marginVertical:15}}>
           <RatingBar defaultRating={this.state.details.rating} />
          </View>
          <Text style={styles.heading}>Description</Text>
          <Text style={styles.phone}>{this.state.details.description}</Text>

          <Text style={styles.heading}>Address</Text>
          <Text style={styles.phone}>{this.state.details.address}</Text>
        </View>  

        <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backBtn}>
          <AntDesign name="arrowleft" style={styles.backIcon} />
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.results.restaurantsList
  };
}

export default connect(mapStateToProps, {loading, restaurantsList})(RestaurantsDetails);