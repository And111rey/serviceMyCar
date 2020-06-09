

import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView, View,Text, StatusBar} from 'react-native';

import {TutorialMainScreenComponents} from "./src/components/tutorialScreens/TutorialMainScreen"

 

const App = ()  => {
  return (
    // <View style={styles.conteiner}>
      <TutorialMainScreenComponents/>

    // </View>
  ); 
};

const styles = StyleSheet.create({
  conteiner : {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  mainText: {
    fontSize: 25
  }
});

export default App;
