import React from 'react';
import { StyleSheet, View, } from 'react-native';

function Heading({children}){
	return (
		<View style={styles.container}>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex :1
	},
});

export default Heading;