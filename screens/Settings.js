import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import Header from './Header';
import Footer from './Footer';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class Settings extends React.Component {
  state= {
    
  }
   
    render() {
        return (
            <View style={styles.mainContainer}>
                <Header title={"Settings"}/>
                <View style={styles.settingsContainer}>
                    <TouchableOpacity style={styles.settingsOptions} onPress={() => this.props.navigation.navigate('ChangePassword')}>
                        <Text style={styles.settingsFont}>Change Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsOptions} onPress={() => this.props.navigation.navigate('ChangeEmailAddress')}>
                        <Text style={styles.settingsFont}>Change Email Address</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsOptions} onPress={() => this.props.navigation.navigate('Contact')}>
                        <Text style={styles.settingsFont}>Contact</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoutButton} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.logoutButtonFont}>Logout</Text>
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
    settingsOptions: {
        alignSelf: 'stretch',
        textAlign: 'center',
        borderBottomColor: '#B7B7B7',
        borderBottomWidth: 1,
        padding: 20
    },
    settingsFont: {
        textAlign: 'center',
        color: '#262F4C',
        fontSize: 20
    },
    logoutButton: {
        backgroundColor: '#717473',
        borderRadius: 5,
        width: 70,
        height: 35,
        marginTop: 50,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoutButtonFont: {
        color: '#FFF'
    }
})