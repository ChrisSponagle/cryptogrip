import React from "react";
import {StyleSheet, TouchableOpacity, View, Image} from "react-native";


export default class Footer extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('MyAccount')}>
                    <Image source={require('../assets/myAccount.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('TransferCoins')}>
                    <Image source={require('../assets/transferCoins.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('TransactionHistory')}>
                    <Image source={require('../assets/transactionHistory.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
                    <Image source={require('../assets/settings.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#F8F8F8',
    },

})