import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import CarReservationScreen from '../screens/CarReservationScreen';
import GoNowScreen from '../screens/GoNowScreen';
import GoNowSimpleScreen from '../screens/GoNowSimpleScreen';
import CarsScreen from '../screens/CarsScreen';
import HomeScreen from '../screens/HomeScreen';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
	return (
		<AuthStack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<AuthStack.Screen 
				name={'LoginScreen'}
				component={LoginScreen}
			/>
			<AuthStack.Screen 
				name={'RegistrationScreen'}
				component={RegistrationScreen}
			/>
      <AuthStack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          title: 'Products List',
        }}
      />
      <AuthStack.Screen 
        name={'CarReservationScreen'}
        component={CarReservationScreen}
      />
      <AuthStack.Screen 
        name={'GoNowScreen'}
        component={GoNowScreen}
      />
      <AuthStack.Screen 
        name={'GoNowSimpleScreen'}
        component={GoNowSimpleScreen}
      />
      <AuthStack.Screen 
        name={'CarsScreen'}
        component={CarsScreen}
      />
		</AuthStack.Navigator>
	);
}

export default AuthStackNavigator;