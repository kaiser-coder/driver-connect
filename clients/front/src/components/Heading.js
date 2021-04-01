import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

function Heading({children, style, props}){
	return (
		<View style={styles.container}>
		 	<Image 
				source={require('../../assets/images/dc-txt.png')}
				style={styles.image}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor:'#9999ff', 
		alignItems:'center',
		borderBottomColor: '#7777ff',
		borderBottomWidth: 5,
	},
	image:{
		width: 200,
		resizeMode:'contain', 
		height: 240,
	},
});

export default Heading;