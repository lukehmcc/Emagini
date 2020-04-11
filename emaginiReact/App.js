/*
 This is an app created by a literal god
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
import { 
    AppLoading,
    AuthSession,
} from 'expo';
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
import * as Font from 'expo-font';
import EmaginiStartScreen from './app/index';


const polaroidPic = './assets/images/polariod.png'


export default class Emagini extends React.Component {
    
    async componentDidMount() {
      await Font.loadAsync({
        regular: require('./assets/fonts/Ubuntu-R.ttf'),
        bold: require('./assets/fonts/Ubuntu-B.ttf'),
        light: require('./assets/fonts/Ubuntu-L.ttf'),
      })
    }

    constructor() {
        super()
        this.state={
            isReady:false
        }
    }

    render(){
        return <EmaginiStartScreen/>;
    }
}
