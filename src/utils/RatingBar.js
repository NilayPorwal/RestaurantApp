import React, {Component} from 'react';
import {StyleSheet, Image, View} from 'react-native';
const maxRating = [1, 2, 3, 4, 5];

export const RatingBar = (props) => {
    return (
      <View style={styles.ratingBarStyle}>
        {maxRating.map((item, key) => {
          return (
              <Image
                style={styles.starImageStyle}
                source={
                  item <= props.defaultRating
                    ? require("../assets/Star-fill.png")
                    : require("../assets/Star-empty.png")
                }
              />
          );
        })}
      </View>
    );
  };

  const styles = StyleSheet.create({
  
    ratingBarStyle: {
        flexDirection:"row",
        marginTop:5
    },
    starImageStyle: {
      width: 20,
      height: 20,
      marginLeft:5,
     
    },
  });