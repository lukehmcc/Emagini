/**
 * This is an app created by a literal god
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import { AuthSession } from 'expo';

const river = {uri:"https://emaginiphotos.s3.filebase.com/river.jpg"}
const mountains = {uri:"https://emaginiphotos.s3.filebase.com/mountains.jpg"}

export default class emagini extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={mountains} style={styles.mountains}>
                    <View style={styles.firstBox}>
                        <Text style={styles.title}> Welcome user to Emagini bad jfajfdjafljlfjkdsafdsahffdafhdkjsafdvghjhghjkhgfghjhgfghjhgfghjgfghjgfghjgfghgfghgfghgfghgfhkhjhjhjkijhjkihgihihgihgjkihgkhgihgjfghgfguyfdfghgf </Text>
                    </View>
                </ImageBackground>
                <ImageBackground source={river} style={styles.river}>
                    <View style={styles.secondBox}>
                        <Text>ello Governer</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    firstBox: {
        height: '30%',
        flexDirection: "row-reverse" 
    },
    title: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
    },
    mountains:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    river: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    secondBox:{
        height: "80%"
    },
    
});  
