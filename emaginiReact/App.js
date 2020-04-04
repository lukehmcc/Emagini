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
  Button,
} from 'react-native';
import { AuthSession } from 'expo';
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';
  import LinearGradient from 'react-native-linear-gradient';


const river = {uri:"https://emaginiphotos.s3.filebase.com/river.jpg"}
const mountains = {uri:"https://emaginiphotos.s3.filebase.com/mountains.jpg"}

export default class emagini extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>
                        Sign in with Facebook
                    </Text>
                </LinearGradient>
                <LinearGradient colors={['#FFFFFF', '#8cacc9ff']} style={styles.linearGradient}>
                    <View style={styles.spacer}></View>
                    <Text style={styles.title}> Welcome User </Text>
                    <View style={styles.sameLine}>
                        <Text style={styles.title2}> To </Text>   
                        <View style={styles.emaginiBox}>
                            <Text style={styles.title3}>
                                Emagini
                            </Text> 
                        </View>
                    </View>
                    <View>
                        <Text style={styles.words}>
                            A photo backup Service that respects your privacy…
                        </Text>
                        <Text style={styles.words}>
                        A novel idea right?
                        </Text>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
 
    },
    spacer: { 
        padding: 20,
    },
    title: {
        color: "#363636",
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: 'center', 
        
    },
    title2: {
        color: '#363636',
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: 'flex-end',
        paddingRight: -20,
    },
    title3: {
        color: 'white',
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: 'center',
    },
    sameLine: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    linearGradient:{
        height:'100%',
    },
    emaginiBox: {
        backgroundColor: '#8cacc9',
        width: '46%',
        height: '100%',
        borderRadius: 20,
    },
    words: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#2e2e2e',
        padding: 10,
    }

});  
