import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, TextInput, Alert, ImageBackground, Clipboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './Header';
import Footer from './Footer';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class MyAccount extends React.Component {
  state= {
    ethAddress: '0x9872363654634623523423426534536432890367',
    btcAddress: '0x9872363654634623523423426534536432890367'
  }

  copyAddress = async (address) => {
    await Clipboard.setString(address);
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <Header title={"My Account"}/>
                <View style={styles.accountContainer}>
                    <ImageBackground source={require('../assets/ethCard.png')} style={styles.ethereumCard} imageStyle={{resizeMode: 'stretch'}}>
                        <View style={styles.cardTitle}>
                            <Text style={styles.currencyFont}>Ethereum</Text>
                            <Image style={{height: 30, width: 20}} source={require('../assets/ethereum.png')}/>
                        </View>
                        <View style={styles.balanceView}>
                            <Text style={styles.balance}>12.345</Text>
                            <Text style={styles.balance}> ETH</Text>
                        </View>
                        <View style={styles.walletAddressView}>
                            <Text style={styles.walletAddressTitle}>Wallet Address</Text>
                            <View style={styles.addressView}>
                                <Text style={styles.walletAddress}>{this.state.ethAddress}</Text>
                                <TouchableOpacity style={styles.copyButton} onPress={ () => {this.copyAddress(this.state.ethAddress)}}> 
                                    <Text style={styles.walletAddressTitle}>Copy</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>

                    <ImageBackground source={require('../assets/btcCard.png')} style={styles.ethereumCard} imageStyle={{resizeMode: 'stretch'}}>
                        <View style={styles.cardTitle}>
                            <Text style={styles.currencyFont}>Bitcoin</Text>
                            <Image source={require('../assets/bitcoin.png')}/>
                        </View>
                        <View style={styles.balanceView}>
                            <Text style={styles.balance}>43.215</Text>
                            <Text style={styles.balance}> BTC</Text>
                        </View>
                        <View style={styles.walletAddressView}>
                            <Text style={styles.walletAddressTitle}>Wallet Address</Text>
                            <View style={styles.addressView}>
                                <Text style={styles.walletAddress}>{this.state.btcAddress}</Text>
                                <TouchableOpacity style={styles.copyButton} onPress={ () => {this.copyAddress(this.state.btcAddress)}}> 
                                    <Text style={styles.walletAddressTitle}>Copy</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                    <TouchableOpacity style={styles.refreshButton} onPress={() => this.props.navigation.navigate('MyAccount')}>
                        <Text style={styles.refreshButtonFont}>Refresh</Text>
                    </TouchableOpacity>
                </View>
                <Footer navigation={this.props.navigation}/>
            </View>
        );
      }
  }

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    accountContainer: {
        flex: 1
    },
    ethereumCard: {
        width: SCREEN_WIDTH*0.95,
        alignSelf: 'center',
        height: 200,
        marginTop: 15,
    },
    bitcoinCard: {
        width: SCREEN_WIDTH*0.9,
        height: SCREEN_HEIGHT*0.25,
        borderRadius: 20,
        marginTop: 30,
        backgroundColor: 'gold'
    },
    cardTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 15
    },
    currencyFont: {
        fontSize: 20,
        color: '#FFF',
        marginRight: 5
    },
    balanceView: {
        flexDirection: 'row',
        marginLeft: 50
    },
    balance: {
        fontSize: 25,
        color: '#FFF'
    },
    walletAddressView: {
        marginLeft: 20,
        marginTop: 40
    },
    walletAddressTitle: {
        fontSize: 15,
        color: '#FFF'
    },
    addressView: {
        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    walletAddress: {
        fontSize: 15,
        color: '#FFF',
        maxWidth: SCREEN_WIDTH*0.5,
        marginRight: 25,
    },
    copyButton: {
        backgroundColor: '#68D79B',
        height: 30,
        width: 80,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    refreshButton: {
        backgroundColor: '#68D79B',
        borderRadius: 5,
        width: 80,
        height: 40,
        marginTop: 15,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    refreshButtonFont: {
        color: '#FFF'
    }
})