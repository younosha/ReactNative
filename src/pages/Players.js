import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export const Players = ({navigation}) => {

  return (
    <View>
      <ScrollView>
      <View style={styles.blockLogo}>
          <Image 
            style={styles.logo}
            source={{uri: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/f7/FC_Chelsea_Logo.svg/1200px-FC_Chelsea_Logo.svg.png'}}
          />
      </View>
      <Text>PLAYERS</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#034694',
    fontSize: 30
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 10
  },
  mainBlock: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // padding: 10,
    justifyContent: 'center'
  },
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
  blockLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  itemImage: {
    width: 150,
    height: 150
  },
  itemText: {
    maxWidth: 140,
    color: 'white',
    textAlign: 'center',
    padding: 5
  }
});
