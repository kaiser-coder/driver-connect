import {StatusBar} from 'expo-status-bar';
import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, FlatList, Animated,Dimensions } from 'react-native';
import slides from '../fake/slides';
import CarItem from './CarItem';

export default function OnBoarding(){
	return (
		<View style={styles.container}>
			<FlatList 
        		data={slides}
        		renderItem={({item}) => <CarItem item={item}/> }
        		snapToAlignment={'start'}
        		decelerationRate={'fast'}
        		snapToInterval={Dimensions.get('window').height}
      		/>
		</View>
	);
};
 
const styles = StyleSheet.create({
	container: {flex:1,alignItems:'center',justifyContent:'center',top:100},
});