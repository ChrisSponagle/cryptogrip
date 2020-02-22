import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const records = [
    {sentRec: 'sent', walletAddress: '0x9872363654634623523423426534536432890367', amount: 234.12, currency: 'ETH'},
    {sentRec: 'rec', walletAddress: '0x98723636546346235232342642653453643289036', amount: 42.12, currency: 'ETH'},
    {sentRec: 'rec', walletAddress: '0x98723636546346945680234234265345643289036', amount: 104.12, currency: 'BTC'},
    {sentRec: 'sent', walletAddress: '0x9872363654634623523423426534536432890609', amount: 52.12, currency: 'ETH'},
    {sentRec: 'sent', walletAddress: '0x9872363654634623523423426534536432890367', amount: 234.12, currency: 'ETH'},
    {sentRec: 'rec', walletAddress: '0x98723636546346235232342642653453643289036', amount: 42.12, currency: 'ETH'},
    {sentRec: 'rec', walletAddress: '0x98723636546346945680234234265345643289036', amount: 104.12, currency: 'BTC'},
    {sentRec: 'sent', walletAddress: '0x9872363654634623523423426534536432890609', amount: 52.12, currency: 'ETH'},
    {sentRec: 'sent', walletAddress: '0x9872363654634623523423426534536432890367', amount: 234.12, currency: 'ETH'},
    {sentRec: 'rec', walletAddress: '0x98723636546346235232342642653453643289036', amount: 42.12, currency: 'ETH'},
    {sentRec: 'rec', walletAddress: '0x98723636546346945680234234265345643289036', amount: 104.12, currency: 'BTC'},
    {sentRec: 'sent', walletAddress: '0x9872363654634623523423426534536432890609', amount: 52.12, currency: 'ETH'},
    {sentRec: 'sent', walletAddress: '0x9872363654634623523423426534536432890367', amount: 234.12, currency: 'ETH'},
    {sentRec: 'rec', walletAddress: '0x98723636546346235232342642653453643289036', amount: 42.12, currency: 'ETH'},
    {sentRec: 'rec', walletAddress: '0x98723636546346945680234234265345643289036', amount: 104.12, currency: 'BTC'},
    {sentRec: 'sent', walletAddress: '0x9872363654634623523423426534536432890609', amount: 52.12, currency: 'ETH'},
    {sentRec: 'sent', walletAddress: '0x9872363654634623523423426534536432890367', amount: 234.12, currency: 'ETH'},
    {sentRec: 'rec', walletAddress: '0x98723636546346235232342642653453643289036', amount: 42.12, currency: 'ETH'},
    {sentRec: 'rec', walletAddress: '0x98723636546346945680234234265345643289036', amount: 104.12, currency: 'BTC'},
    {sentRec: 'sent', walletAddress: '0x9872363654634623523423426534536432890609', amount: 52.12, currency: 'ETH'} 

]
export default class TransactionHistory extends React.Component {
  state= {
    walletAddress: '0x9872363654634623523423426534536432890367'
  }

renderTransactionHistory = (records) => {
        return records.map((item, index) => {  
            if(item.sentRec === 'sent') {
                sendRecImage = require('../assets/sent.png')
            }
            else {
                sendRecImage = require('../assets/received.png')
            }
            if(item.currency === 'ETH') {
                currencyImage = require('../assets/ethereum.png')
                currencyIconStyle = styles.ethereumIcon
            }
            else {
                currencyImage = require('../assets/bitcoin.png')
                currencyIconStyle = styles.bitcoinIcon
            }
            return (
                <View style={styles.transactionRecord}>
                    <Image style={styles.sentRec} source={sendRecImage}/>
                    <Text style={styles.walletAddress}>{item.walletAddress}</Text>
                    <View style={styles.amountRecord}>
                        <Image style={currencyIconStyle} source={currencyImage}/>
                        <Text style={styles.amount}>{item.amount}</Text>
                        <Text style={styles.currencyName}>{item.currency}</Text>
                    </View>
                </View>
            )
        })
}
    render() {
        return (
            <View style={styles.mainContainer}>
                <Header title={"Transaction History"}/>
                <View style={styles.accountContainer}>
                    <View style={styles.balancesHeader}>
                        <Text style={styles.sendRecHeaderText}>Send/Rec</Text>
                        <Text style={styles.addressHeaderText}>Address</Text>
                        <Text style={styles.amountHeaderText}>Amount</Text>
                    </View>
                    <ScrollView contentContainerStyle={styles.recordsContainer}>
                        {this.renderTransactionHistory(records)}
                    </ScrollView>
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
        width: SCREEN_WIDTH,
    },
    balancesHeader: {
        alignSelf: 'stretch',
        height: SCREEN_HEIGHT*0.05,
        backgroundColor: '#C4C4C4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    sendRecHeaderText: {
        fontSize: 20,
        color: '#555151',
        marginLeft: 5
    },
    addressHeaderText: {
        fontSize: 20,
        color: '#555151',
        marginLeft: -40
    },
    amountHeaderText: {
        fontSize: 20,
        color: '#555151',
        marginRight: 35
    },
    recordsContainer: {
        alignSelf: 'stretch'
    },
    transactionRecord: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        borderBottomColor: '#B7B7B7',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15
    },
    sentRec: {
        height: 30,
        width: 30,
        marginLeft: 5
    },
    walletAddress: {
        fontSize: 15,
        color: '#262F4C',
        maxWidth: SCREEN_WIDTH*0.4,
        marginLeft: 40,
    },
    amountRecord: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -2
    },
    ethereumIcon: {
        height: 25,
        width: 15,
        marginRight: 3,
        marginLeft: 5
    },
    bitcoinIcon: {
        height: 15,
        width: 15,
        marginRight: 3,
        marginLeft: 5
    },
    amount: {
        fontSize: 22,
        color: '#262F4C'
    },
    currencyName: {
        fontSize: 15,
        color: '#262F4C',
    }
})