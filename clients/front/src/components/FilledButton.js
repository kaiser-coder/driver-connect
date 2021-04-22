import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

function FilledButton({title, style, onPress}){
	return (
			<TouchableOpacity 
				style={[styles.container, style]}
				onPress={onPress}
			>
				<Text style={styles.text}>{title}</Text> 
			</TouchableOpacity> 

	);
}


const styles = StyleSheet.create({
	container: {
		backgroundColor: '#7777ff',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 16,
		borderRadius: 10,
	},
	text: {
		color: 'white',
		fontWeight: '500',
		fontSize: 18,
	}
});

export default FilledButton;