import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

function Input({ style, placeholder, props}){
	return (
		<TextInput {...props} style={[styles.input, style]} placeholder={placeholder}/>
	);
}

const styles = StyleSheet.create({
	input: {
		borderWidth: 2,
		borderColor: '#bcbcff',
		color: '#000',fontSize: 14,
		width: '100%',
		padding: 20,
		borderRadius: 10,
	},
});

export default Input;