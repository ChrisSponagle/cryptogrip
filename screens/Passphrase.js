import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class Passphrase extends React.Component {
  state= {
    code: '',
    passphrase: ''
  }

   
    render() {
        return (
          <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../assets/logo.png')}/>
                    <Text style={styles.headerFont}>Please save this passphrase somewhere safe. It will be necessary for future logins.</Text>
                </View>
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
                <TouchableOpacity style={styles.greenButton} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.greenButtonFont}>OK</Text>
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
      fontSize: 15,
      color: '#FFF',
      marginTop: 30,
      textAlign: 'center'
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