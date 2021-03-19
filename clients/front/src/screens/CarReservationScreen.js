import * as React from 'react';
import { View, Text, Pressable, StyleSheet, Image, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Header from '../components/Header';
import Content from '../components/Content';
import Menu from '../components/Menu';
import FilledButton from '../components/FilledButton';


function CarReservation({ navigation }){
	return (
		<View style={ styles.container }>
			<ImageBackground 
		        source={require('../../assets/images/map3.jpeg')}
		        style={styles.imageContent}
		    />
			<Header>	
				<Pressable  
					 	onPress={() => {
					 		navigation.navigate('HomeScreen')
					 	}}
	            >
	                <FontAwesome name="arrow-left" size={28} color="#fff" />
	            </Pressable>
				<Pressable  
	                onPress={()=>console.warn('heol')} 
	            >
	                <FontAwesome name="bars" size={28} color="#fff" />
	            </Pressable>
			</Header>

			<Content style={ styles.content }>
			</Content>
			<View style={ styles.separator } />
			
			<Menu>
				<View>
					 <FilledButton 
					 	title={'Partir maintenant'} 
					 	style={[styles.menuButton, styles.button1]} 
					 	onPress={() => {
					 		navigation.navigate('GoNowScreen')
					 	}}
					 />
				</View>
				<View>
				 <FilledButton 
				 	title={'Partir plus tard'} 
				 	style={[styles.menuButton, styles.button2]} 
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
		flex: 2.5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	menuButton:{
		padding: 10,
		margin: 10,
		alignItems:'center',
		justifyContent: 'center',
		width:140,
		height: 160
	},
	button1: {backgroundColor: '#9858fa88'},
	button2: {backgroundColor: '#7ca8fffa'},
	imageLogo: {width: 100, height: 32},
	imageContent: {width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute'
	}
});

export default CarReservation;