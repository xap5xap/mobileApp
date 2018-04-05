import React, { Component } from 'react'
import { View, Text, Image, ListView, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/HomeScreenStyle'
import CocktailRow from '../Components/CocktailRow'
import CocktailsActions from '../Redux/CocktailsRedux'
import {Images} from '../Themes'
import AnimatedEllipsis from 'react-native-animated-ellipsis'

class HomeScreen extends Component {
   

    componentDidMount(){
        this.props.getAllCocktails();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.cocktails.cocktails !== nextProps.cocktails.cocktails) {
            
            const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
            this.setState({
                dataSource: ds.cloneWithRows(nextProps.cocktails.cocktails)
            })
        }
    }

    renderRow(details) {
        return (
            <CocktailRow {...details} />
        )
    }


    render() {
        const IS_LOADING = this.props.cocktails.fetching === true
        const HAS_ERROR = this.props.cocktails.error === true

        return (
            <View style={styles.container}>
                <View style={styles.statusbar}>
                    <Image source={Images.logo} style={styles.logo}></Image>
                    <Text style={styles.statusBarTitle}>Cocktails</Text>
                </View>
                {HAS_ERROR && <Text style={styles.infoMessage}>Error fetching data</Text>}
                {IS_LOADING && <Text style={styles.infoMessage}>Making Cocktails <AnimatedEllipsis  style={styles.ellipsis} minOpacity={0.2} /></Text>}
                {!IS_LOADING && !HAS_ERROR &&
                    <ListView contentContainerStyle={styles.gridCocktails}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this.renderRow(rowData)}
                    />
                }
            </View>
        )
    }

   
}

const mapStateToProps = (state) => {
    return {
        cocktails: state.cocktails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCocktails: () => dispatch(CocktailsActions.getCocktailsRequest()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
