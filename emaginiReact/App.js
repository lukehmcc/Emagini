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
	flex: 1;
	background-color: #32a848;
	justify-content: flex-start;
  align-items: flex-end;
  padding: 20px;
  padding-top: 50px;
`;

const Title = styled.Text`
	font-size: 50px;
	font-weight: 500;
	color: lightgrey;
`;
const Title2 = styled.Text`
	font-size: 50px;
	font-weight: 500;
  color: grey;
  
`;