import * as React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Header from '../components/Header';
import Content from '../components/Content';
import Menu from '../components/Menu';
import FilledButton from '../components/FilledButton';
import CarList from '../components/CarList';


function Home({ navigation }){
	return (
		<View style={ styles.container }>
			<Header>
				<Pressable  
                    onPress={()=>navigation.navigate('GoNowSimpleScreen')} 
                >	
	                <FontAwesome name="arrow-left" size={28} color="#fff" />
	            </Pressable>
				<Pressable
				 	onPress={() => {
				 		navigation.navigate('LoginScreen')
				 	}}
	            >
	                <FontAwesome name="power-off" size={28} color="#fff" />
	            </Pressable>
			</Header>

			<Content style={ styles.content }>
				
			<CarList/>
			</Content>
			
		</View>


	);
};

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: '#aaa'
	},
	content:{
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',top:-30
	},
	imageLogo: {width: 100, height: 32},
});

export default Home;