import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import Header from './Header';
import Footer from './Footer';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class ChangeEmailAddress extends React.Component {
  state= {
    newEmailAddress: ''
  }
   
    render() {
        return (
            <View style={styles.mainContainer}>
                <Header title={"Change Email Address"}/>
                <View style={styles.settingsContainer}>
                    <Text style={styles.inputHeader}>New Email Address</Text>
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#262F4C"
                        autoCorrect={false}
                        value={this.state.newEmailAddress} 
                        onChangeText={ (newEmailAddress) => this.setState({ newEmailAddress }) }
                    />                    
                    <TouchableOpacity style={styles.confirmButton} onPress={() => this.props.navigation.navigate('ConfirmChangeEmail')}>
                        <Text style={styles.confirmButtonFont}>Send Code</Text>
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
    settingsContainer: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
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