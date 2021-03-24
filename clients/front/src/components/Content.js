import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

function Content({children, style, props}){
	return (
		<View {...props} style={[styles.content, style]} >
			{children}
        </View>
	);
};

const styles = StyleSheet.create({
	content:{
		flex: 1
	},
});

export default Content;