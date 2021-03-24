import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import Icon from '@expo/vector-icons/MaterialCommunityIcons';

function IconButton({name, style, onPress, size, color}){
	return (
			<TouchableOpacity 
				style={[styles.container, style]}
				onPress={onPress}
			>
				<Icon name={name} size={size} color={color} /> 
			</TouchableOpacity> 

	);
}


const styles = StyleSheet.create({
	container: {

	}
});

export default IconButton;