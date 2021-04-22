import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import lightTheme from './src/themes/light';
import {AuthContext} from './src/contexts/AuthContext';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

function App() {
	// Fake authentification
	// En attente des données du bo
	var fakeToken=false;
	const auth = React.useMemo(()=>({
		login: (email, password)=>{
			if(email=="default@mail.com"){
				fakeToken=true;
				console.log(email, password, fakeToken);
			}else{
				fakeToken=false;
				console.log("error")
			}
		},
		logout: ()=>{console.log("logout")},
		register: (firstname, lastname, email, password)=>{
			console.log(firstname, lastname, email, password)
		},
	}),[],
	);
	return (
		<AuthContext.Provider value={auth}>
			<NavigationContainer theme={lightTheme}>
				<RootStack.Navigator 
					screenOptions={{
						headerShown: false
					}}
				>
				{
					(fakeToken) ? <RootStack.Screen name={'MainStack'} component={MainStackNavigator} /> : <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
				}
				</RootStack.Navigator>
			</NavigationContainer>
		</AuthContext.Provider>
	);
}

export default App;