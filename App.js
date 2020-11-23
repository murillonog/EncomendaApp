import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Page from './views/Page';

export default function App() {
  const props = {
    empresa: 'NogLoc S.A.',
    name:'Murillo Nogueira'
  }

  return (    
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Page {...props}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
