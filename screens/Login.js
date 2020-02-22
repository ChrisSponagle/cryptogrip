import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class Login extends React.Component {
  state= {
    username: '',
    password: ''
  }

   
    render() {
        return (
          <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../assets/logo.png')}/>
                </View>
                <TextInput 
                    style={styles.input}
                    placeholderTextColor="rgba(255, 255, 255, 0.6)"
                    autoCorrect={false}
                    value={this.state.username} 
                    placeholder="Username"
                    onChangeText={ (username) => this.setState({ username }) }
                />
                <TextInput 
                    style={styles.input}
                    placeholderTextColor="rgba(255, 255, 255, 0.6)"
                    autoCorrect={false}
                    value={this.state.password} 
                    placeholder="Password"
                    onChangeText={ (password) => this.setState({ password }) }
                />
                <TouchableOpacity style={styles.transparentButton} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                    <Text style={styles.clickableWhiteFont}>Forgot Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.greenButton} onPress={() => this.props.navigation.navigate('VerifyEmail')}>
                    <Text style={styles.greenButtonFont}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.clearButton} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.greenButtonFont}>Signup</Text>
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
      justifyContent: 'center',
      marginBottom: SCREEN_HEIGHT*0.1
    },
    headerFont: {
      fontSize: 25,
      color: '#FFF',
    },
    input: {
        fontSize: 20,
        width: SCREEN_WIDTH * 0.8,
        height: 50,
        padding: 10,
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
    clearButton: {
        width: SCREEN_WIDTH *0.8,
        height: 50,
        padding: 5,
        borderRadius: 5,
        marginTop: 15,
        borderColor: '#FFF',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    transparentButton: {
        alignSelf: 'flex-end',
        marginRight: SCREEN_WIDTH*0.1,
        marginTop: 20
    },
    clickableWhiteFont: {
        color: '#FFF',
        fontSize: 15,
    }
    
})