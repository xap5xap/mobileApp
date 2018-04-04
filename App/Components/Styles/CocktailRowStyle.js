import { StyleSheet, PixelRatio } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 10,
        borderWidth: Metrics.borderWidth,
        borderRadius: 4,
        borderColor: Colors.steel,
        backgroundColor: Colors.snow,
        shadowColor: Colors.amarillo,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3,
        padding: 10
    },
    body: {
        flex: 1,
        paddingVertical: Metrics.listItemPadding,
        marginLeft: Metrics.listItemPadding + 5,
        borderRightWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
        borderColor: Colors.steel
    },
    bodyHeader: {
        marginBottom: Metrics.smallMargin,
        fontSize: Fonts.size.h4
    }
})
