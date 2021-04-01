import React from 'react';
import { View, StyleSheet } from 'react-native';
import {AuthContext} from '../contexts/AuthContext';

import Heading from '../components/Heading';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import AuthContainer from '../components/AuthContainer';
import TextButton from '../components/TextButton';
import Loading from '../components/Loading';

function RegistrationScreen({navigation}){
	const {register} = React.useContext(AuthContext);
  	const [firstname, setFirstname] = React.useState('defaultfirstname');
  	const [lastname, setLastname] = React.useState('defaultlastname');
  	const [email, setEmail] = React.useState('default@mail.com');
  	const [password, setPassword] = React.useState('azerty');
  const [loading, setLoading] = React.useState(false);
	return (
		<AuthContainer>
			<Heading/>
			<View style={styles.content}>
				<View style={{flexDirection:'row'}}>
					<Input 
				 		style={[styles.input, styles.inputRow, {marginLeft: -6}]} 
				 		placeholder={'Prénom'} 
				        value={firstname}
				        onChangeText={setFirstname}
				 	/>
				 	<Input 
				 		style={[styles.input, styles.inputRow]} 
				 		placeholder={'Nom'} 
				        value={lastname}
				        onChangeText={setLastname}
				 	/>
				</View>
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
			 		title={"S'INSCRIRE"} 
			 		style={styles.loginButton} 
			 		onPress={() => {
			 			register(firstname, lastname, email, password);
			 			try {
				            setLoading(true);
				            navigation.pop();
				        } catch (e) {
				            console.log(e.message);
				            setLoading(false);
				        }
			 		}}
			 	/>
			 	<TextButton 
			 		title={"J'ai déjà un compte"}  
			 		onPress={() => {
			 			navigation.navigate('LoginScreen')
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
		height: 56,
	},
	inputRow: {
		width:'50%', 
		marginHorizontal:4,
	},
	loginButton: {
		marginVertical: 20,
	},
});

export default RegistrationScreen;