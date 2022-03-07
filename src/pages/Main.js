import { StyleSheet, View, Image, ScrollView } from 'react-native';
import {menuItems} from '../../consts';
import {Card} from '../components/Card'

export const Main = ({navigation}) => {

  return (
    <View style={{backgroundColor: 'yellow', flex: 1}}>
      <ScrollView>
      <View style={styles.mainBlock}>
        {menuItems.map(element => {
          return <Card
            element={element}
            push={navigation.navigate}
            key={element.title}
          />
        })}
      </View>
      <View style={styles.blockLogo}>
          <Image 
            style={styles.logo}
            source={{uri: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/f7/FC_Chelsea_Logo.svg/1200px-FC_Chelsea_Logo.svg.png'}}
          />
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  mainBlock: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  blockLogo: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 20
  }
});
