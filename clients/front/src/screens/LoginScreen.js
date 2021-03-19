import React from 'react';
import { View, StyleSheet } from 'react-native';
import {AuthContext} from '../contexts/AuthContext';

import Heading from '../components/Heading';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import TextButton from '../components/TextButton';
import Error from '../components/Error';
import AuthContainer from '../components/AuthContainer';
import Loading from '../components/Loading';

function LoginScreen({navigation}){
	const {login} = React.useContext(AuthContext);
  	const [email, setEmail] = React.useState('default@mail.com');
  	const [password, setPassword] = React.useState('azerty');
  	const [loading, setLoading] = React.useState(false);
	
	return (
		<AuthContainer>
			<Heading/>
			<View style={styles.content}>
			 <Input 
			 	style={styles.input} 
			 	placeholder={'Adresse email'} 
		        keyboardType={'email-address'}
		        value={email}
		        onChangeText={setEmail}
			 />
			 <Input 
			 	style={styles.input} 
			 	placeholder={'Mot de passe'} 
		        secureTextEntry
		        value={password}
		        onChangeText={setPassword}
			 />
			 <FilledButton 
			 	title={'LOGIN'} 
			 	style={styles.loginButton}  
			 	onPress={() => {
					// Fake authentification
					// En attente des données du bo
		 			try {
				 		login( email, password);
			            setLoading(true);
			            console.log("Afaka miditra");
				        navigation.navigate('HomeScreen');
			            setLoading(false);
			        } catch (e) {
			            console.log(e.message);
			            setLoading(false);
			        }
			 	}}
			 />
			 <TextButton 
			 	title={"Créer un compte ici - C'est gratuit"}  
			 	onPress={() => {
			 		navigation.navigate('RegistrationScreen')
			 	}}
			 />
			</View>
			<Loading loading={loading} />
		</AuthContainer>
	);
}

const styles = StyleSheet.create({ 
	content: {
		padding: 20,
	},
	input: {
		marginVertical: 10,
		height: 60,
	},
	loginButton: {
		marginVertical: 32,
	}
});

export default LoginScreen;