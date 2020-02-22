import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class Register extends React.Component {
  state= {
    username: '',
    email: '',
    password: '',
    retypePassword: ''
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
                    value={this.state.email} 
                    placeholder="Email"
                    onChangeText={ (email) => this.setState({ email }) }
                />
                <TextInput 
                    style={styles.input}
                    placeholderTextColor="rgba(255, 255, 255, 0.6)"
                    autoCorrect={false}
                    value={this.state.password} 
                    placeholder="Password"
                    onChangeText={ (password) => this.setState({ password }) }
                />
                <TextInput 
                    style={styles.input}
                    placeholderTextColor="rgba(255, 255, 255, 0.6)"
                    autoCorrect={false}
                    value={this.state.retypePassword} 
                    placeholder="Re-type Password"
                    onChangeText={ (retypePassword) => this.setState({ retypePassword }) }
                />
                <TouchableOpacity style={styles.greenButton} onPress={() => this.props.navigation.navigate('RegisterVerify')}>
                    <Text style={styles.greenButtonFont}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.clearButton} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.greenButtonFont}>Back</Text>
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
      marginBottom: 16.5
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