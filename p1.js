// USING native-base

import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { Platform } from '@unimodules/core';
import {Button} from 'native-base';

export default class App extends React.Component {

    render()
    {
        return(
            <View style={styles.container}>
                <Text>Open up</Text>
                <Button><Text>Hello World</Text></Button>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        marginTop:Platform.OS==="android"?10:0,
        backgroundColor:"lightyellow",
        alignItems:"center",
        justifyContent:"center"
    }
})