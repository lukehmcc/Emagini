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
    Animated,
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
import EmaginiStartScreen from './app/index'


const polaroidPic = './assets/polariod.png'

function cacheImages(images) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

export default class Emagini extends React.Component {

    constructor() {
        super()
        this.state={
            isReady:false
        }
    }

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
          require('./assets/images/polariod.png'),
        ]);
        
        await Promise.all([...imageAssets]);
    }

    render(){
        if (!this.state.isReady) {
            return (
              <AppLoading
                startAsync={this._loadAssetsAsync}
                onFinish={() => this.setState({ isReady: true })}
                onError={console.warn}
              />
            );
        }
        return <EmaginiStartScreen/>;
    }
}
