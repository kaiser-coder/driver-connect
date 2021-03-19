import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function Header({children, style, props}){
	return (
		<View {...props} style={[styles.container, style]} >
			{children}
        </View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 70,
		backgroundColor: '#99f',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 30,
		paddingTop: 28,
		position: 'absolute'
	}
});

export default Header;