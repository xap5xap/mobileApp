import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Styles/CocktailRowStyle'


const CocktailRow = (details) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.bodyHeader}>{details.strDrink}</Text>
                <Text>* {details.strIngredient1}</Text>
                <Text>* {details.strIngredient2}</Text>
                <Text>And more ingredients</Text>
            </View>
            <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: details.strDrinkThumb }}
            />

        </View>);
};

export default CocktailRow;