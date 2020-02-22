import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, TextInput, Picker } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import AwesomeAlert from 'react-native-awesome-alerts';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class TransferCoins extends React.Component {
  state= {
    receivingAddress: '',
    amount: '',
    coin: '',
    showAlert: false
  }

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

    render() {
        return (
            <View style={styles.mainContainer}>
                <Header title={"Transfer Coins"}/>
                <View style={styles.accountContainer}>
                    <View style={styles.balancesHeader}>
                        <Text style={styles.balancesHeaderText}>Balances</Text>
                    </View>
                    <View style={styles.balanceRow}>
                        <View style={styles.balanceCurrency}>
                            <Image style={{height: 30, width: 20}} source={require('../assets/ethereum.png')}/>
                            <Text style={styles.currencyFont}>ETH</Text>
                        </View>
                        <View style={styles.balanceView}>
                            <Text style={styles.balance}>13.982</Text>
                        </View>
                    </View>
                    <View style={styles.balanceRow}>
                        <View style={styles.balanceCurrency}>
                            <Image source={require('../assets/bitcoin.png')}/>
                            <Text style={styles.currencyFont}>BTC</Text>
                        </View>
                        <View style={styles.balanceView}>
                            <Text style={styles.balance}>432.876</Text>
                        </View>
                    </View>
                    <View style={styles.selectCoinView}>
                        <Text style={styles.selectCoinFont}>Select Coin</Text>
                        <Picker
                        selectedValue={this.state.coin}
                        onValueChange={coin => this.setState({ coin })}
                        style={{ width: 150, fontSize:10 }}
                        mode="dropdown"
                        itemStyle={{ color:'#262F4C', fontWeight:'900', fontSize: 18, padding:30}}>
                            <Picker.Item label="Select" value="" />
                            <Picker.Item label="ETH" value="ETH" />
                            <Picker.Item label="BTC" value="BTC" />
                        </Picker>
                    </View>
                    <Text style={styles.inputHeader}>Receiving Address</Text>
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#262F4C"
                        autoCorrect={false}
                        value={this.state.receivingAddress} 
                        onChangeText={ (receivingAddress) => this.setState({ receivingAddress }) }
                    />
                    <Text style={styles.inputHeader}>Amount</Text>
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#262F4C"
                        autoCorrect={false}
                        value={this.state.amound} 
                        onChangeText={ (amount) => this.setState({ amount }) }
                    />
                    <TouchableOpacity style={styles.confirmButton} onPress={() => this.showAlert()}>
                        <Text style={styles.confirmButtonFont}>Confirm</Text>
                    </TouchableOpacity>
                    <AwesomeAlert
                        show={this.state.showAlert}
                        showProgress={false}
                        title="Confirm Transfer"
                        message={"Transfer " + this.state.amount + " " + this.state.coin + " to " + this.state.receivingAddress + "?"}
                        closeOnTouchOutside={false}
                        closeOnHardwareBackPress={true}
                        showCancelButton={true}
                        showConfirmButton={true}
                        cancelText="Cancel"
                        confirmText="OK"
                        confirmButtonColor="#68D79B"
                        onCancelPressed={() => {
                            this.hideAlert();
                        }}
                        onConfirmPressed={() => {
                            this.hideAlert();
                        }}
                    />
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
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    balancesHeader: {
        alignSelf: 'stretch',
        height: SCREEN_HEIGHT*0.05,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    balancesHeaderText: {
        fontSize: 20,
        color: '#555151'
    },
    balanceRow: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        borderBottomColor: '#B7B7B7',
        borderBottomWidth: 1,
        height: 50
    },
    balanceCurrency: {
        width: SCREEN_WIDTH*0.5,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15
    },
    currencyFont: {
        fontSize: 20,
        color: '#262F4C',
        marginLeft: 5
    },
    balanceView: {
        width: SCREEN_WIDTH*0.5,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    balance: {
        fontSize: 20,
        color: '#262F4C',
        marginRight: SCREEN_WIDTH*0.1
    },
    selectCoinView: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectCoinFont: {
        color: '#262F4C',
        fontSize: 20,
        marginRight: 40
    },
    inputHeader: {
        fontSize: 20,
        color: '#262F4C',
        marginTop: 20,
        alignSelf: 'flex-start',
        marginLeft: SCREEN_WIDTH*0.1
    },
    input: {
        fontSize: 20,
        width: SCREEN_WIDTH * 0.8,
        height: 50,
        padding: 10,
        borderRadius: 5,
        fontWeight: '300',
        borderColor: '#323A51',
        color: '#262F4C',
        borderWidth: 1,
        alignItems: 'center',
        marginTop: 5
    }, 
    confirmButton: {
        backgroundColor: '#68D79B',
        borderRadius: 5,
        width: 80,
        height: 40,
        marginTop: 50,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    confirmButtonFont: {
        color: '#FFF'
    }
})