import * as React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Header from '../components/Header';
import Content from '../components/Content';
import Menu from '../components/Menu';
import FilledButton from '../components/FilledButton';


function Home({ navigation }){
	return (
		<View style={ styles.container }>
			<Header>
				<Image
			        source={require('../../assets/images/dc-txt.png')}
			        style={styles.imageLogo}
			    />		
				<Pressable
				 	onPress={() => {
				 		navigation.navigate('LoginScreen')
				 	}}
	            >
	                <FontAwesome name="power-off" size={28} color="#fff" />
	            </Pressable>
			</Header>

			<Content style={ styles.content }>
				<Image 
					source={require('../../assets/images/mercedes.png')}
					style={styles.imageContent}
				/>
			</Content>
			<View style={ styles.separator } />
			
			<Menu>
				<View>
					 <FilledButton 
					 	title={'Réservation de voiture'} 
					 	style={[styles.menuButton, styles.button1]}  
					 	onPress={() => {
					 		navigation.navigate('CarReservationScreen')
					 	}}
					 />
					 <FilledButton 
					 	title={'Mes réservation'} 
					 	style={[styles.menuButton, styles.button2]} 
					 	onPress={() => {}}
					 />
				</View>
				<View>
				 <FilledButton 
				 	title={'Conversation'} 
				 	style={[styles.menuButton, styles.button3]} 
				 	onPress={() => {}}
				 />
				 <FilledButton 
				 	title={'Compte Bancaire ou Paypal'} 
				 	style={[styles.menuButton, styles.button4]} 
				 	onPress={() => {}}
				 />
	        	</View>
        	</Menu>
		</View>


	);
};

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: '#aaa'
	},
	content:{
		flex: 0.8,
		alignItems: 'center',
		justifyContent: 'center'
	},
	menuButton:{
		padding: 10,
		margin: 10,
		alignItems:'center',
		justifyContent: 'center',
		width:140,
		height: 140
	},
	button1: {backgroundColor: '#7ca8ffaa'},
	button2: {backgroundColor: '#a8a8faaa'},
	button3: {backgroundColor: '#9858fa88'},
	button4: {backgroundColor: '#7ca8fffa'},
	imageLogo: {width: 100, height: 32},
	imageContent: {
		width: '80%',
		top: 50,
		left: 40,	
	    resizeMode: 'contain',
	    position: 'absolute'
	}
});

export default Home;