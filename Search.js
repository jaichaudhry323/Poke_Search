// 

import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Button,Header,Item,Icon,Input} from 'native-base';
import axios from 'axios';
import PokeLoader from './PokeLoader.js'
import SearchBody from './SearchBody.js'

export default class Search extends React.Component {

    state={
        pokeSearch:"",
        onCall: true,       // try changing this to false , then to true to see what this does
        data:{}
    
    }
    searchPoke=()=>{
        this.setState({onCall:true});
        var self=this;
        axios.get("http://pokeapi.co/api/v2/pokemon/"+this.state.pokeSearch)   // we cannot use 'this' inside axios so we create var self 
        .then(function(response){
            console.log(response.data);
            self.setState({data:response.data,onCall:0});

        })
        .catch(function(err){
            console.log(err);
            alert("Invalid Search , Please try a numeric Search")
        })
       
    }
    // making a render function to take us on different page
    renderBody=()=>{
        if(this.state.onCall){
            return(
                <PokeLoader/>
            )
        }
            else{
                return(
                    <SearchBody data={this.state.data}/>   //Pass the data we get from search to 'SearchBody' 
                )
            }
    }

    // ----TRY--ADDING--AND-REMOVING--THE--COMPONENTS--TO--BECOME--MORE--FAMILIAR--WITH--THEM
    render()
    {
        return(
            <View style={{flex:1}}>
                <Header 
                searchBar 
                rounded
                >
                    <Item>
                        <Icon name="search" /*Here name matters , try android-search or ios-search */ onPress={this.searchPoke}/>
                        <Input 
                    value={this.state.pokeSearch}
                    placeholder="Search Pokemon"
                    onChangeText={(pokeSearch)=>{this.setState({pokeSearch})}}
                    />
                    </Item>
                    
                </Header>
                {this.renderBody() /*Calling this function */}  
            </View>
        )
        
    }
}

const styles =StyleSheet.create({
    container:{
        flex:5,
        marginTop:Platform.OS==="android"?10:0,
        backgroundColor:"lightyellow",
        alignItems:"center",
        justifyContent:"center"
    }
})