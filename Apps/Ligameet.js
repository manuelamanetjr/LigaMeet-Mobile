//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Ligameet = () => {
    return (
        <View style={styles.container}>
            <Text>Ligameet</Text>
            <Text style={{ 
                color: 'red',
                fontSize: 31,
                fontWeight: '900'
             }}>LOL</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    
});

//make this component available to the app
export default Ligameet;
