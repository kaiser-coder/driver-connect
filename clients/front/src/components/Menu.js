import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import FilledButton from '../components/FilledButton';

function AllOptions({children, style, props}){
	return (
		<View {...props} style={[styles.content, style]} >
			{children}
        </View>
	);
};

const styles = StyleSheet.create({
	content:{
		flex: 1,
		backgroundColor: '#ccc',
		borderTopRightRadius: 60,
		borderTopLeftRadius: 60,
		padding: 20,
		alignItems:'center',
		flexDirection : 'row'
	},
});

export default AllOptions;