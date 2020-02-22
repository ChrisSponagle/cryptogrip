import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class PasswordChanged extends React.Component {
  state= {
    code: '',
    passphrase: ''
  }

   
    render() {
        return (
          <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../assets/logo.png')}/>
                    <Text style={styles.headerFont}>Password Changed</Text>
                </View>
                <TouchableOpacity style={styles.greenButton} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.greenButtonFont}>Go to Login Page</Text>
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
      marginTop: 120,
    },
    greenButton: {
        width: SCREEN_WIDTH *0.8,
        height: 50,
        padding: 5,
        borderRadius: 5,
        marginTop: 120,
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