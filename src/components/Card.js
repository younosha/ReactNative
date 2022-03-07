import React from 'react';
import {Text, Image, TouchableWithoutFeedback, StyleSheet, View} from 'react-native';

function MyComponent({element}) {
  return (
    <View>
      <Image 
        style={styles.itemImage}
        source={{uri: `${element.image}`}}
      />
      <Text style={styles.itemTitle}>{element.title}</Text>
      <Text style={styles.itemText}>{element.description}</Text>
    </View>
  );
}

export const Card = ({push, element}) => {
    return <TouchableWithoutFeedback onPress={() => push(element.title)}>
      <View style={styles.card}>
        <MyComponent element={element}/>
      </View>
</TouchableWithoutFeedback>
}

const styles = StyleSheet.create({
    card: {
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#034694',
      paddingBottom: 10,
      backgroundColor: '#034694',
      margin: 10,
      shadowColor: "black",
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.4,
      shadowRadius: 3.84,
      elevation: 5,
    },
    itemImage: {
      width: 150,
      height: 150
    },
    itemText: {
      maxWidth: 150,
      color: 'white',
      textAlign: 'center',
      padding: 5,
      fontFamily: 'gideon'
    },
    itemTitle: {
      textTransform: 'uppercase',
      maxWidth: 140,
      color: 'white',
      textAlign: 'center',
      padding: 5,
      fontFamily: 'ranchers'
    }
  });