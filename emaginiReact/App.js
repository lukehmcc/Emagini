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
                    <View style={styles.spacer}></View>
                    <Text style={styles.title}> Welcome User </Text>
                    <Text style={styles.title2}> To <Text style={styles.title3}> Emagini </Text> </Text>
                    <View style={styles.triangleCorner}></View>
                    <View style={styles.textbox}>
                        <View style={styles.textbox2}>
                           <Text style={styles.mainText1}>
                               Emagini is the photo sharing app that respects your security 
                           </Text>
                           
                        </View>
                    </View>
                </ImageBackground>
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
        alignSelf: 'flex-end', 
        
    },
    title2: {
        color: '#363636',
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: 'flex-end',
        paddingRight: 20,        
    },
    title3: {
        color: 'white',
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: 'flex-end',
        paddingRight: 10,   
    },
    mainText1: { 
        fontSize: 20,
        color: '#FFFFFF',
        padding: 10,
    },
    mountains:{
        height:'100%',
    },

    triangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 600,
        borderBottomWidth: 90,
        borderLeftWidth: 0,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderBottomColor: '#40404080',
        alignSelf: 'flex-end',
        marginTop: -40,
    },    
    textbox: {
        backgroundColor: '#40404080',
        width: '100%',
        height: '100%',
    },
    textbox2: {
        backgroundColor: '#40404050',
        width: '90%',
        height: '65%',
        alignSelf: 'center',
        marginTop: 20,
    },
});  
