import React, { Component } from 'react'
import { View, Text, Image, ListView } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/HomeScreenStyle'
import CocktailRow from '../Components/CocktailRow'

class HomeScreen extends Component {

    constructor() {
        super()
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
        // console.log('details', details)
        return (
            <CocktailRow {...details} />
        )
    }


    render() {
        console.log('render', this.props);
        const IS_LOADING = this.props.cocktails.fetching === true

        return (
            <View style={styles.container}>
                {IS_LOADING && <Text style={styles.welcome}>Making Cocktails...</Text>}
                {!IS_LOADING &&
                    <ListView style={styles.container}
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
