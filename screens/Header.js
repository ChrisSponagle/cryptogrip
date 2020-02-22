import React from "react";
import {StyleSheet, TouchableOpacity, View, Text, Linking} from "react-native";


export default class Header extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerFont}>{this.props.title}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: { 
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#363E6C',
      },
    headerFont: {
        fontSize: 25,
        color: '#FFF',
        marginTop: 30,
        padding: 10
    },
})