import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Styles/CocktailRowStyle'


const CocktailRow = (details) => {
    return (
        <View style={styles.container}>           
            <Image
                style={styles.image}
                source={{ uri: details.strDrinkThumb }}
            />

        </View>);
};

export default CocktailRow;