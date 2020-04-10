/*
 This is an app created by a literal god
 */
import React, { Component, useState } from 'react';
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
import { 
    AppLoading,
    AuthSession,
    Font,
} from 'expo';
import * as Font From 'expo-font';
import { Asset } from 'expo-asset';
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
import { LinearGradient } from 'expo-linear-gradient';
import { Animated } from 'react-native-reanimated';
import { 
    TapGestureHandler, 
    State,
} from 'react-native-gesture-handler';
const polaroidPic = '../assets/images/polariod.png';
const { 
    Value, 
    clock, 
    event, 
    block, 
    cond, 
    eq, 
    set 
} = Animated;
const fetchFonts = () => {
    return Font.loadAsync({
    'Ubuntu-L': require('./assets/fonts/Ubuntu-L.ttf'),
    'Ubuntu-R': require('./assets/fonts/Ubuntu-R.ttf'),
    'Ubuntu-B': require('./assets/fonts/Ubuntu-B.ttf')
    });
};

class EmaginiStartScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                    <LinearGradient colors={['#FFFFFF', '#8cacc9c7']} style={styles.gradient}>
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

                        <View style={styles.polariodContainer}>
                            <Image style={styles.polariod} source={require(polaroidPic)} ></Image>
                            <Image style={styles.polariod2} source={require(polaroidPic)} ></Image>
                            <Image style={styles.polariod3} source={require(polaroidPic)} ></Image>
                            <Image style={styles.polariod4} source={require(polaroidPic)} ></Image>
                            <Image style={styles.polariod5} source={require(polaroidPic)} ></Image>  
                        </View>
                        <View style={styles.lineBelowPols}/>


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
        )
    }
}

export default EmaginiStartScreen;

const styles = StyleSheet.create({
    container: {
    },
    gradient: { 
        height: '100%',
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
        fontFamily: 'Ubuntu-R',
    },
    lineBelowPols: {
        borderBottomColor: 'darkgrey',
        borderBottomWidth: 2,
        padding: 10,
        width: '80%',
        alignSelf: 'center',
    },
    polariodContainer: {
        flexDirection: 'row',
        flex: .3,
        justifyContent: 'center',
        marginBottom: -30,
    },
    polariod: {
        flex: .1,
        alignSelf: 'center',
        position: 'absolute',
        transform: [{ rotate: '-30deg'},
                { translateX: -20 }],
        borderWidth: 1,
        borderColor: "white",
    },
    polariod2: {
        flex: .1,

        alignSelf: 'center',
        position: 'absolute',
        transform: [{ rotate: '-15deg'},
                { translateX: -10 }],
        borderWidth: 1,
        borderColor: "white",
    },
    polariod3: {
        flex: .1,
        alignSelf: 'center',
        position: 'absolute',
        transform: [{ rotate: '0deg'},
                { translateX: 0 }],
        borderWidth: 1,
        borderColor: "white",
    },
    polariod4: {
        flex: .1,
        alignSelf: 'center',
        position: 'absolute',
        transform: [{ rotate: '15deg'},
                { translateX: 10 }],
        borderWidth: 1,
        borderColor: "white",
    },
    polariod5: {
        flex: .1,
        alignSelf: 'center',
        position: 'absolute',
        transform:[{ rotate: '30deg'},
                { translateX: 20 }],
        borderWidth: 1,
        borderColor: "white",
    },
});  

