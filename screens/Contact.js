import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import Header from './Header';
import Footer from './Footer';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class Contact extends React.Component {
  state= {
    
  }
   
    render() {
        return (
            <View style={styles.mainContainer}>
                <Header title={"Contact"}/>
                <View style={styles.settingsContainer}>
                    <View style={{marginTop: 120}}>
                        <Text style={styles.contactFont}>If you should have questions</Text>
                        <Text style={styles.contactFont}>or are experiencing any</Text>
                        <Text style={styles.contactFont}>errors with my app, feel free</Text>
                        <Text style={styles.contactFont}>to contact me at</Text>
                    </View>
                    <View style={{marginTop: 30}}>
                        <Text style={styles.contactFont}>chrissponagle@gmail.com</Text>
                    </View>
                    <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate('Settings')}>
                        <Text style={styles.backButtonFont}>Back</Text>
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
    contactFont: {
        fontSize: 25,
        color: '#262F4C',
        textAlign: 'center'
    },
    backButton: {
        backgroundColor: '#68D79B',
        borderRadius: 5,
        width: 80,
        height: 40,
        marginTop: 50,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButtonFont: {
        color: '#FFF'
    }
})