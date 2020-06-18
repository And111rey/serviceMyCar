

import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView, View,Text, StatusBar} from 'react-native';

import { TutorialMainScreenComponents } from "./src/components/tutorialScreens/TutorialMainScreen"
import { SignUpScreen } from "./src/components/SignUpScreens/SignUpScreen"
import { ScreenLogInPhoneNumber } from "./src/components/SignUpScreens/ScreenLogInPhoneNumber"
import { ScreenNumberVerify } from "./src/components/SignUpScreens/ScreenNumberVerify"
import { ScreenAddAdress } from "./src/components/SignUpScreens/ScreenAddAdress"
import { ScreenSelectFromMap } from "./src/components/SignUpScreens/ScreenSelectFromMap"

 

const App = ()  => {
  return (
      // <TutorialMainScreenComponents/>
    // <SignUpScreen/>
    // < ScreenLogInPhoneNumber />
    // <ScreenNumberVerify/>
    // <ScreenAddAdress/>
    <ScreenSelectFromMap/>
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
