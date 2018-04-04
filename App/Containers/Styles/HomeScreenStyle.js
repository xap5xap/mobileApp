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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: Fonts.type.base,
        margin: Metrics.baseMargin
    },

})
