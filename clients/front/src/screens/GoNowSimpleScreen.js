import React, {useState} from 'react';
import { View, Text, Pressable, StyleSheet, Image, ImageBackground, Picker } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Header from '../components/Header';
import Content from '../components/Content';
import Menu from '../components/Menu';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';


function CarReservation({ navigation }){
	const [selectedValueBebe, setSelectedValueBebe] = useState('0');
	const [selectedValueEnfant, setSelectedValueEnfant] = useState('0');
	const [selectedValueAdulte, setSelectedValueAdulte] = useState('0');
	return (
		<View style={ styles.container }>
			<Header>
				<Pressable  
					 	onPress={() => {
					 		navigation.navigate('GoNowScreen')
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

			<View style={ styles.content }>
				<View style={styles.headerContent}>
					<Text style={styles.textLeft}>TRAJET SIMPLE </Text>
					<Image 
						source={require('../../assets/images/mercedes4.png')}
						style={styles.imageContent}
					/>
				</View>
			</View>

			<View style={ styles.content }>
				<View style={styles.formContent}>
					<Text style={styles.optionText}>Option du trajet</Text>
					 <Input 
					 	style={styles.input} 
					 	placeholder={'Lieu de départ'} 
					 	keyboardType="email-adress" 
					 />
					 <Input 
					 	style={styles.input} 
					 	placeholder={'Lieu de destination'} 
					 	keyboardType="email-adress" 
					 />
					<Text style={styles.optionText}>Option des passagers </Text>
					<View style={{flex:1, flexDirection:'row', justifyContent:'space-evenly'}}>
						<View>
							<Text style={{color:"#3a3a3add"}}>Bébé </Text>
						 	<Picker
						 		selectedValue={selectedValueBebe}
						 		style={{height: 40, width: 90, color:'#000'}}
						 		onValueChange={(itemValue, itemIndex) => setSelectedValueBebe(itemValue) }
						 	>
						 	<Picker.Item label="0" value='0' />
						 	<Picker.Item label="1" value='1' />
						 	<Picker.Item label="2" value='2' />
						 	<Picker.Item label="3" value='3' />
						 </Picker>
						</View>
						<View>
							<Text style={{color:"#3a3a3add"}}>Enfant </Text>
						 	<Picker
						 		selectedValue={selectedValueEnfant}
						 		style={{height: 40, width: 90, color:'#000'}}
						 		onValueChange={(itemValue, itemIndex) => setSelectedValueEnfant(itemValue) }
						 	>
						 	<Picker.Item label="0" value='0' />
						 	<Picker.Item label="1" value='1' />
						 	<Picker.Item label="2" value='2' />
						 	<Picker.Item label="3" value='3' />
						 </Picker>
						</View>
						<View>
							<Text style={{color:"#3a3a3add"}}>Adulte </Text>
						 	<Picker
						 		selectedValue={selectedValueAdulte}
						 		style={{height: 40, width: 90, color:'#000'}}
						 		onValueChange={(itemValue, itemIndex) => setSelectedValueAdulte(itemValue) }
						 	>
						 	<Picker.Item label="0" value='0' />
						 	<Picker.Item label="1" value='1' />
						 	<Picker.Item label="2" value='2' />
						 	<Picker.Item label="3" value='3' />
						 </Picker>
						</View>
					 </View>
					 <View style={{flex:1,position:'absolute', marginTop: 270, width: '80%',marginHorizontal:34}}>

			 <FilledButton 
			 	title={'Valider'} 
			 	style={styles.validateButton} 
					 	onPress={() => {
					 		navigation.navigate('CarsScreen')
					 	}}
			 />
					 </View>
				</View>
			</View>
			
		</View>


	);
};

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: '#fdfdfdff'
	},
	content:{
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	headerContent: {top: 60,width: '100%', height: 200, backgroundColor:'#99f'},
	imageContent: {
		width:180,
		top: -280,
		left: 160,
	    resizeMode: 'contain',
	    position: 'absolute'
	},
	textLeft: {
		color: '#ffffff',
		fontSize: 25,
		left:30,
		top: 60,
		width: 100
	},
	formContent: {marginTop: 60},
	 input: {
		width: 330,height: 50,
		paddingHorizontal:10,
		padding:0,
		marginHorizontal: 10,
		marginVertical: 3,
	},
	optionText: {
		color: 'gray',
		marginHorizontal: 10,
		marginVertical: 10,
	},
	validateButton:{
		
	}
});

export default CarReservation;