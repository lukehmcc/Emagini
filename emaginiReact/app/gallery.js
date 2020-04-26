/*
 This is an app created by a literal god
 */
import React, { Component } from "react";
import * as Permissions from 'expo-permissions';
import {View, Text, StyleSheet, TouchableOpacity, Constant, Dimensions, Image, FlatList } from "react-native";

//defines some stuff

//Does the picking
export default class EmaginiPhotoGallery extends Component {
    state = {
        data:[
            require('../assets/images/mountains.jpg'),
            require('../assets/images/river.jpg')
    
        ]
      }
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         hasCameraPermission: null
    //     }
    // }
    // Yeah this isn't working for now I'll get back to this
    // async componentDidMount() {
    //     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //     this.setState({ hasCameraPermission: status === "granted" });
    //     let media = await MediaLibrary.getAssetsAsync({
    //         mediaType: ['photo', 'video'],
    //     })
    // }
    //I dont know how to write js so I'm gonaa leave this in order to copy the 
    //syntax for later things 
    // _getPhotoLibrary = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         allowsEditing: true,
    //         aspect: [4, 3]
    //     });
    //     if (!result.cancelled) {
    //         this.setState({ image: result.uri });
    //     }
    // }
    renderItem(item){
        return(
            <Image source={item} style={styles.photoStyle} />
        )
    }
    render() {
        
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={(item, index) => "" + index}
                />
            </View>
        );
    }
 }

const styles = StyleSheet.create({
    photoStyle: {
        height: '20%',
        width: '30%',
        margin: 20,
    },
});
