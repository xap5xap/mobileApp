import { StyleSheet, PixelRatio } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
    container: {
        paddingLeft: 5,
        paddingTop: 5
    },
    image: {
        width: ((Metrics.screenWidth - 5) / 3) - 5,
        height: ((Metrics.screenWidth - 5) / 3) - 5,
        justifyContent: 'flex-end'
    },
    labelContainer: {
        backgroundColor: Colors.blackTransparent,
        height: Metrics.section,
        justifyContent: 'center'
    },
    label: {
        color: Colors.white,
        marginLeft: Metrics.smallMargin
    }

})