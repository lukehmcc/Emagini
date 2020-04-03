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
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';

const river = {uri:"https://emaginiphotos.s3.filebase.com/river.jpg"}
const mountains = {uri:"https://emaginiphotos.s3.filebase.com/mountains.jpg"}

export default class emagini extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={mountains} style={styles.mountains}>
                    <Text style={styles.title}> Welcome User </Text>
                    <Text style={styles.title2}> To Emagini </Text>
                </ImageBackground>
                <View style={styles.line}>
                    <Svg height="50%" width="50%" viewBox="0 0 100 100">
                    </Svg>
                </View>
                <ImageBackground source={river} style={styles.river}>
                    <Text>ello Governer</Text>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: 'flex-end', 
    },
    title2: {
        color: 'lightgrey',
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: 'flex-end',

    },

    mountains:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: 'white',
        opacity: 5,
    },
    river: {
        flex: 3,
        resizeMode: "cover",
        justifyContent: "center",
    },
    line:{
        backgroundColor: 'grey',
        flex: .02,
    }
    
});  
