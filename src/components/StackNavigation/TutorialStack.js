// In App.js in a new project

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer,  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {Tutorial1} from "../tutorialScreens/Tutorial1"
import {Tutorial2} from "../tutorialScreens/Tutorial2"
import {Tutorial3} from "../tutorialScreens/Tutorial3"
import {Tutorial4} from "../tutorialScreens/Tutorial4"
import {Tutorial5} from "../tutorialScreens/Tutorial5"
import {Tutorial6} from "../tutorialScreens/Tutorial6"



// const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


const TototialStackNavigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Tutorial1">
          <Stack.Screen name="Tutorial1" component={Tutorial1} />
          <Stack.Screen name="Tutorial2" component={Tutorial2} />
          <Stack.Screen name="Tutorial3" component={Tutorial3} />
          <Stack.Screen name="Tutorial4" component={Tutorial4} />
          <Stack.Screen name="Tutorial5" component={Tutorial5} />
          <Stack.Screen name="Tutorial6" component={Tutorial6} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}



export default TototialStackNavigation;

