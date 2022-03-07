import React from 'react';
import { imagesStadium } from '../../consts';
import { Slider } from '../components/Slider';
import { StyleSheet, View, Text } from 'react-native';

export const Stadium = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stamford Bridge</Text>
      <View style={styles.sliderWrap}>
        <Slider images={imagesStadium}/>
      </View>
      <Text style={styles.mainText}>
        Stamford Bridge opened in 1877 as a home for the London Athletic Club and was used almost exclusively for that purpose until 1904, when the lease was acquired by brothers Gus and Joseph Mears, who wanted to stage high-profile professional football matches there.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: 'ranchers',
    color: '#034694',
    textAlign: 'center',
    margin: 15,
    fontSize: 30
  },
  sliderWrap: {
    // borderTopWidth: 3,
    // borderBottomWidth: 3,
    // borderColor: 'black',
    shadowColor: "black",
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.4,
      shadowRadius: 3.84,
      elevation: 5,
  },
  mainText: {
    padding: 15,
    paddingTop: 20,
    fontFamily: 'Montserrat500',
    color: '#034694',
    fontSize: 15
  }
});
