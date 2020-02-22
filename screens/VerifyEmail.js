import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class VerifyEmail extends React.Component {
  state= {
    code: '',
    passphrase: ''
  }

   
    render() {
        return (
          <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../assets/logo.png')}/>
                    <Text style={styles.headerFont}>Verify Email</Text>
                </View>
                <TextInput 
                    style={styles.input}
                    placeholder={"Enter Code"}
                    placeholderTextColor="rgba(255, 255, 255, 0.6)"
                    autoCorrect={false}
                    value={this.state.code} 
                    placeholder="Code"
                    onChangeText={ (code) => this.setState({ code }) }
                />
                <TextInput 
                    style={styles.inputLarge}
                    placeholder={"Passphrase"}
                    placeholderTextColor="rgba(255, 255, 255, 0.6)"
                    autoCorrect={false}
                    value={this.state.passphrase} 
                    placeholder="Passphrase"
                    multiline={true}
                    onChangeText={ (passphrase) => this.setState({ passphrase }) }
                />
                <TouchableOpacity style={styles.greenButton} onPress={() => this.props.navigation.navigate('MyAccount')}>
                    <Text style={styles.greenButtonFont}>Verify</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.transparentButton}>
                    <Text style={styles.clickableWhiteFont}>Resend Code</Text>
                </TouchableOpacity>
          </View>
        );
      }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#363E6C',
      alignItems: 'center',
    },
    header: { 
      marginTop: SCREEN_HEIGHT*0.1,
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerFont: {
      fontSize: 25,
      color: '#FFF',
      marginTop: 30,
    },
    input: {
        fontSize: 20,
        width: SCREEN_WIDTH * 0.8,
        height: 50,
        padding: 5,
        borderRadius: 5,
        fontWeight: '300',
        color: 'rgba(255, 255, 255, 1)',
        backgroundColor: '#262F4C',
        borderColor: '#323A51',
        alignItems: 'center',
        marginTop: 20
    }, 
    inputLarge: {
        fontSize: 20,
        width: SCREEN_WIDTH * 0.8,
        height: 200,
        padding: 5,
        borderRadius: 5,
        fontWeight: '300',
        color: 'rgba(255, 255, 255, 1)',
        backgroundColor: '#262F4C',
        borderColor: '#323A51',
        alignItems: 'center',
        marginTop: 20
    }, 
    greenButton: {
        width: SCREEN_WIDTH *0.8,
        height: 50,
        padding: 5,
        borderRadius: 5,
        marginTop: 30,
        backgroundColor: '#68D79B',
        alignItems: 'center',
        justifyContent: 'center'
    },
    greenButtonFont: {
        color: '#FFF',
        fontSize: 20,
    },
    transparentButton: {
        alignSelf: 'flex-start',
        marginLeft: SCREEN_WIDTH*0.1,
        marginTop: 20
    },
    clickableWhiteFont: {
        color: '#FFF',
        fontSize: 15,
    }
    
})