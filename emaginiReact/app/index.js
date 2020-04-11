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
const polaroidPic = '../assets/images/polariod.png';

class EmaginiStartScreen extends Component {

    constructor(props) {
        super(props);
        this._rotX = new Value(0);
        this._config = {
            duration: 5000,
            toValue: 1,
            easing: Easing.inOut(Easing.ease),
        };
        this._anim = timing(this._rotX, this._config);
    }
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
                        {() => {
                                    this._anim.start();
                                }}
                        <Animated.View style={[styles.polariodContainer, { transform: [{ rotateZ: this._rotX }] }]}>
                            <Image style={styles.polariod} source={require(polaroidPic)} ></Image>
                            <Image style={styles.polariod2} source={require(polaroidPic)} ></Image>
                            <Image style={styles.polariod3} source={require(polaroidPic)} ></Image>
                            <Image style={styles.polariod4} source={require(polaroidPic)} ></Image>
                            <Image style={styles.polariod5} source={require(polaroidPic)} ></Image>  
                            <Button
                                onPress={() => {
                                    this._anim.start();
                                }}
                                title="Start"
                            />
                        </Animated.View>
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
        alignSelf: 'center', 
        fontFamily: 'bold',
    },
    title2: {
        color: '#363636',
        fontSize: 40,
        alignSelf: 'flex-end',
        paddingRight: -20,
        fontFamily: 'bold',
    },
    title3: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'center',
        fontFamily: 'bold',
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
        fontFamily: 'regular',
        justifyContent: 'center',
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

