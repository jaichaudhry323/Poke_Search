// Adding Gif Using Url

import React from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';

import {Button} from 'native-base';

export default class PokeLoader extends React.Component {

    render()
    {
        return(
            <View style={styles.container}>
                <Image source={{uri:"https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif"}} 
                       style={styles.img}/>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        marginTop:Platform.OS==="android"?10:0,
    },
    img:{
        height:400,
        width:400,
        justifyContent:"center",
        alignItems:"center"
    }
})