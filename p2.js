// BASIC FRONT SAMPLE PAGE , GETTING STARTED

import React from 'react';
import {Platform,StyleSheet,Text,View,ImageBackground,Image} from 'react-native';
import {Button} from 'native-base';

var myBackground=require('../assets/landing.jpg')

export default class App extends React.Component {

    render()
    {
        return(
            <View style={styles.container}>
               <ImageBackground source={myBackground} style={{width:'100%',height:'100%'}}>
                    <View style={styles.viewStyle}>
                    <Text style={styles.titleStyle}>WELCOME TO POKESEARCH</Text>
                    
                    <Button block={true}  style={styles.buttonStyle} onPress={()=>{}}>
                        <Text style={styles.buttonText}>Start Searching</Text>
                    </Button>
                    </View>
               </ImageBackground>
        
            </View>
        );
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        marginTop:Platform.OS==="android"?10:0,
    },
    viewStyle:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        flexDirection:"column",
    },
    titlestyle:{
        fontSize:30,
        color:"blue",
        alignItems:"center"
    },
    buttonStyle:{
        margin:10,     // button has a margin of 10
        backgroundColor:"blue"
    },
    buttonText:{
        color:"white"
    }
})