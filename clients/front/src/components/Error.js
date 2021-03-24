import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Error({error}){
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{error}</Text>
		</View >
	);
}


const styles = StyleSheet.create({
	container: {
		paddingVertical:5
	},
	text: {
		color: 'red',
		fontWeight: 'bold',
		fontSize: 14,
	}
});

export default Error;