/**
 * This is an app created by a literal god
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={helloStyle.container}>
        <Text style={helloStyle.instructions}>Hello, world!</Text>
      </View>
    );
  }
}

const helloStyle = StyleSheet.create({
  container: { 
              flex: 1, 
              justifyContent: "center", 
              alignItems: "center", 
              backgroundColor: '#32a852' 
  },
  instructions: {
              textAlign: 'center',
		          color: '#333333',
		          marginBottom: 5
  }
});