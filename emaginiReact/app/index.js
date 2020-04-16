/*
 This is an app created by a literal god
 */
import React, { Component, useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { 
    AppLoading,
    AuthSession,
} from 'expo';
import * as Font from 'expo-font';
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
import Animated, { Easing } from 'react-native-reanimated';
import { 
    TapGestureHandler, 
    State,
} from 'react-native-gesture-handler';
const { 
Value, 
timing, 
} = Animated; 
const polaroidPic = '../assets/images/polariods.png';

class EmaginiStartScreen extends Component {

    // This is for later
    // constructor(props) {
    //     super(props);
    //     this._rotX = new Value(0);
    //     this._config = {
    //         duration: 5000,
    //         toValue: 1,
    //         easing: Easing.inOut(Easing.ease),
    //     };
    //     this._anim = timing(this._rotX, this._config);
    // }
    
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
                        
                        <Image style={styles.polariod} source={require(polaroidPic)} ></Image> 
                        <View style={styles.lineBelowPols}/>


                        <View style={styles.wordsAndLinesContainer}>
                            <Text style={styles.words}>
                                A photo backup Service that <Text style={styles.wordsBold}> respects </Text> your privacy…
                            </Text>
                            <Text style={styles.words2}>
                                A <Text style={styles.wordsBold}> novel idea </Text> right?
                            </Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.getStartedButton}>
                                <Text style={styles.buttonText1}>Let's get started!</Text>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Text style={styles.buttonText2}>Hey! I already have an account!</Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
            </View>
        )
    }
}

export default EmaginiStartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: { 
        flex: 1,
    },
    spacer: { 
        padding: 20,
    },
    title: {
        color: "#363636",
        fontSize: 45,
        alignSelf: 'center', 
        fontFamily: 'bold',
        height: '10%',
    },
    title2: {
        color: '#363636',
        fontSize: 45,
        alignSelf: 'flex-end',
        paddingRight: -20,
        fontFamily: 'bold',
    },
    title3: {
        color: 'white',
        fontSize: 45,
        alignSelf: 'center',
        fontFamily: 'bold',
    },
    sameLine: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    emaginiBox: {
        backgroundColor: '#8cacc9',
        width: '50%',
        height: '100%',
        borderRadius: 20,
    },
    wordsAndLinesContainer: {
        
    },
    words: {
        fontSize: 25,
        color: '#2e2e2e',
        padding: 10,
        fontFamily: 'regular',
        width: '100%',
        textAlign: 'center',
    },
    words2: {
        alignSelf: 'center',
        fontSize: 25,
        color: '#2e2e2e',
        padding: 10,
        fontFamily: 'regular',
        justifyContent: 'center',
        width: '80%',
        textAlign: 'center',
    },
    wordsBold: {
        fontFamily: 'bold',
        fontSize: 25,
    },
    lineBelowPols: {
        borderBottomColor: 'grey',
        borderBottomWidth: 3,
        width: '80%',
        alignSelf: 'center',
        marginTop: -3,
    },
    polariod: {
        marginTop: -20,
        flex: .5,
        width: null,
        height: null,
        resizeMode: 'contain',
        borderColor: 'black',
    },
    buttonContainer: {
        flex: .6,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonText1: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#fdfdfd',
        padding: 10,
        fontFamily: 'bold',
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center',
        flex: .8, // For some reason this controlls the vertical location of the text in the button
    },
    buttonText2: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#2e2e2e',
        fontFamily: 'regular',
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center',
        flex: .4, // For some reason this controlls the vertical location of the buttons??
    },
    getStartedButton: {
        backgroundColor: '#8cacc9',
        width: '50%',
        height: '20%',
        borderRadius: 20,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});  