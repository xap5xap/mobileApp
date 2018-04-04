import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'


const ApplicationStyles = {
    screen: {
        container: {
            flex: 1,
        },
        statusbar: {
            height: Metrics.navBarHeight,
            backgroundColor: Colors.black,
            justifyContent: 'center',
            alignItems:'center',
            flexDirection:'row'
        },
        statusBarTitle:{            
            color: Colors.white,
            ...Fonts.style.title,
        }
    }
}

export default ApplicationStyles
