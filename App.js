import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import {css} from './assets/css/Css';
import Page from './views/Page';

export default function App() {
  const props = {
    empresa: 'NogLoc S.A.',
    name:'Murillo Nogueira'
  }

  return (    
    <View style={css.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Page {...props}/>
      <StatusBar style="auto" />
    </View>
  );
}


