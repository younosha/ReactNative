import React, {useState} from 'react';
import { StyleSheet, Dimensions, View, ScrollView, Image } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const Slider = ({images}) => {
    const [imgActive, setImgActive] = useState(0);

    const onChange = (nativeEvent) => {
      if (nativeEvent) {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide != imgActive && slide !== images.length) {
          setImgActive(slide);
        }
      }
    }

    return (
        <View style={styles.wrap}>
        <ScrollView
          onScroll={({nativeEvent}) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {images.map((e) => {
            return <Image
                key={e}
                resizeMode='stretch'
                style={styles.wrap}
                source={{uri: e}}
            />
          }) }
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => {
            return <View 
              key={e}
              style={imgActive == index ? styles.dotActive : styles.dot}
            >
            </View>
          })}
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
      width: WIDTH,
      height: HEIGHT * 0.25
    },
    wrapDot: {
      position: 'absolute',
      bottom: 5,
      flexDirection: 'row',
      alignSelf: 'center'
    },
    dotActive: {
      margin: 3,
      backgroundColor: 'yellow',
      borderRadius: 50,
      height: 10,
      width: 10
    },
    dot: {
      margin: 3,
      backgroundColor: 'white',
      borderRadius: 50,
      height: 10,
      width: 10
    }
  });
