import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import styles from './Styles/CocktailRowStyle'


const CocktailRow = (details) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.image}
                loadingIndicatorSource={require('../Images/cocktail_black.png')}
                source={{ uri: details.strDrinkThumb }}
            >
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>{details.strDrink}</Text>
                </View>
            </ImageBackground>
        </View>);
};

export default CocktailRow;