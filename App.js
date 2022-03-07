import React, {useState} from 'react';
import {Navigate} from './navigate';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fonts = () => Font.loadAsync({
  'ranchers': require('./fonts/ranchers.ttf'),
  'gideon': require('./fonts/gideon.ttf'),
  'Montserrat300': require('./fonts/Montserrat300.ttf'),
  'Montserrat500': require('./fonts/Montserrat500.ttf'),
  'Montserrat800': require('./fonts/Montserrat800.ttf'),
  'Montserrat900': require('./fonts/Montserrat900.ttf'),
})

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return <Navigate/>
  } else {
    return <AppLoading
      startAsync={fonts}
      onFinish={() => setFont(true)}
      onError={(error)=> console.warn(error)}
    />
  }
}
