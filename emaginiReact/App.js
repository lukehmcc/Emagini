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
            <MegaContainer>
                <Container>
                    <TitleHead> Welcome user to Emagini </TitleHead>
                </Container>
                <Container2>
                    <Title2> Ello Governer </Title2>
                </Container2>
            </MegaContainer>
        );
    }
}
const MegaContainer = styled.View`
`;
const Container = styled.View`
    background-color: #32a849;
    position: relative;
    height: 30%;
    width: 110%;
    top:-5%;
    left:-5%;
    transform:rotate(5deg);
`;
const Container2 = styled.View`
    background-color: #FFFFFF;
    position: relative;
    height: 50%;
`;
const TitleHead = styled.Text`
    padding-top: 50px;
    font-size: 50px;
    font-weight: 500;
    color: lightgrey;
    text-align: right;
    padding: 20px;
    padding-bottom: 5px;
    
    left: -3%;
    top: 5%;
    transform:rotate(-5deg);
`;
const Title2 = styled.Text`
    font-size: 50px;
    font-weight: 500;
    color: grey;
    text-align: right;
    padding: 20px;
    padding-top: 0px;
`;