import React from 'react';
import {Text, View,Platform,ImageBackground,StyleSheet} from 'react-native';
import Landing from './Landing.js'
import Search from './Search.js'

export default class App extends React.Component{
    state={
        currentScreen:"landing"
    }
    switchScreen=(newscreen)=>{    // switchScreen is a function
        this.setState({currentScreen:newscreen});
    }
    renderScreen=()=>{                    // renderScreen is also a function
        if(this.state.currentScreen==="landing"){
            return(
                <Landing switchScreenFunction={this.switchScreen}/>  // 'switchScreen' passed as a prop (property) so that landing page 'button' can have access to this function
            )
        }
        else if(this.state.currentScreen==="search"){
            return <Search/>
        }
    }
    render(){
        return(
            <View style={styles.container}>
                {this.renderScreen()}
            </View>
        ); 
    }
}


const styles =StyleSheet.create({
    container:{
        flex:1,
        marginTop:Platform.OS==="android"?10:0,
    }
 })