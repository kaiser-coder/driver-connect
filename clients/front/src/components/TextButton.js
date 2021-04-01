import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

function TextButton({title, style, onPress}){
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
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
	},
	text: {
		color: '#6666ff',
		fontWeight: '500',
		fontSize: 14,
		textDecorationLine: 'underline'
	}
});

export default TextButton;