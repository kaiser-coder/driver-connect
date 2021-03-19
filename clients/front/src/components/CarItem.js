import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import FilledButton from './FilledButton';

export default function CarItem({item}){
	return (
		<View style={styles.container}>
			<ImageBackground 
        		source={item.image}
        		style={styles.image}
      		/>
      		<View style={styles.titles}>
        		<Text style={styles.title}>{item.title}</Text>
        		<Text style={styles.prix}>{item.prix}</Text>
     		</View>
      		<View style={styles.footer}>
			 <FilledButton 
			 	title={'Choisir'} 
			 	style={styles.choiceButton}  
			 	onPress={() => {	}}
			 />
     		</View>
		</View>
	);
};
 
const styles = StyleSheet.create({
	container: {
    width: '100%',
    height: Dimensions.get('window').height},
	image: {
		flex: 1,
		justifyContent: 'center',
		width:Dimensions.get('window').width,
		height:Dimensions.get('window').height,
	},
	titles: {
    marginTop: '20%',
    width: '100%',
    top:-460,
	},
  title: {
    fontSize: 30,
    fontWeight: '500',
    left: 20,
    color: "#8855ff"
  },
  prix: {
    fontSize: 20,
    fontWeight: '500',
    left: 60,
    color: "#ffffff"
  },
	footer: {
		top:-80,
		padding: 20
	}
});