import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const MainStack = createStackNavigator();

function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
    </MainStack.Navigator>
  );
}

export default MainStackNavigator;