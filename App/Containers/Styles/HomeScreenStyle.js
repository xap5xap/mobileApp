import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    logo: {
        height: Metrics.images.titleLogo,
        width: Metrics.images.titleLogo,
        resizeMode: 'contain',
        marginRight: Metrics.baseMargin
    },
    lista: {
        flex: 1,
        paddingTop: Metrics.baseMargin,
        backgroundColor: Colors.transparent
    },
    infoMessage: {
        fontSize: Fonts.size.regular,
        textAlign: 'center',
        fontFamily: Fonts.type.base,
        margin: Metrics.baseMargin
    },
    ellipsis: {
        color: Colors.black,
        fontSize: Fonts.size.h3,
    },
    gridCocktails: {
        flexDirection: 'row',
        flexWrap:'wrap'
    }

})
