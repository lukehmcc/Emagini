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
} from 'react-native';

export default class emagini extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.thiccText}>Hello, you have reached an automated voice messaging system, please dial 9 for more options...</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.thinText}>Good morning</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { 
              flex: 1, 
              justifyContent: "center", 
              alignItems: "center", 
              backgroundColor: '#FFFFFF'
  },
  header:{
              textAlign: 'center'
  },
  thiccText: {
              textAlign: 'center',
    		      color: '#333333',
		          marginBottom: 5
  },
  body: { 
              backgroundColor: '#00c0f0',
              width: '100%'
  },
  thinText: {
              textAlign: 'center'
  },
});
