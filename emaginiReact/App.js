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
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import Navegator from './routes/homeStack';
import { PermissionsAndroid } from 'react-native';

const polaroidPic = './assets/images/polariod.png'

export default class Emagini extends React.Component {
    constructor(props){
        super(props);
        this.state = { loading: true };
    }
    async requestPhotosPermission() {
        try {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              this.getPhotos();
            } else {
              console.log("Photos permission denied")
            }
        } catch (err) {
          console.warn(err)
        }
    }
    async componentDidMount() {
      await Font.loadAsync({
        regular: require('./assets/fonts/Ubuntu-R.ttf'),
        bold: require('./assets/fonts/Ubuntu-B.ttf'),
        light: require('./assets/fonts/Ubuntu-L.ttf'),
      });
      this.setState({ loading: false });
    }

    render(){
        if (this.state.loading){
            return <AppLoading />;
        }
        return ( 
            <Navegator />
        );
    }
}
