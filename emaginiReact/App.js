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
import styled from 'styled-components';

export default class emagini extends Component {
  render() {
    return (
      <Container>
        <Title>Welcome user</Title>
        <Title2>to Emagini</Title2>
      </Container>
      
    );
  }
}
const Container = styled.View`
	background-color: #32a848;
  position: relative;
  height: 50%;
`;
const Container2 = styled.View`
  background-color: #FFFFFF;
  position: relative;
  height: 50%;
`;
const Title = styled.Text`
  padding-top: 50px;
	font-size: 50px;
	font-weight: 500;
  color: lightgrey;
  text-align: right;
  padding: 20px;
  padding-bottom: 5px;
`;
const Title2 = styled.Text`
	font-size: 50px;
	font-weight: 500;
  color: grey;
  text-align: right;
  padding: 20px;
  padding-top: 0px;
`;