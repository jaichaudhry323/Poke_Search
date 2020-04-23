// Using ScrollView , enables touch and drag in phone
// Using Dimensions to get height and width of window

import React from 'react';
import {StyleSheet,Text,View,ScrollView,Image,ImageBackground,Dimensions} from 'react-native';
import {ListItem,List} from 'native-base';

var height=Dimensions.get('window').height;
var width = Dimensions.get('window').width;

export default class SearchBody extends React.Component {

    render()
    {
        var pokemon=this.props.data;
        if(!pokemon){
            return <View/>
        }
        return(
        <ImageBackground style={styles.backgroundImage} source={{uri:"https://pokemongohub.net/wp-content/uploads/2019/12/jvy42zwoit741.jpg"}}>
            <ScrollView style={styles.container}>

                {/* <Text>This is search Data</Text> */}

                <Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()} {/*Braces are necessary to extract data from pokemon object */}</Text>

                <View style={styles.viewStyle}>
                <Image source={{uri:pokemon.sprites.front_default}}
                style={styles.img}/>
                </View>

                {/* NOW ADDING DATA */}

                <View style={styles.info}>
                    <ListItem itemDivider /* Prop for this list item , builtin */>
                        <Text style={{fontWeight:"bold"}}>Size</Text> 
                    </ListItem>
                    
                    <ListItem  >
                        <Text>Weight      {pokemon.weight} kg</Text> 
                    </ListItem> 
                    
                    <ListItem  >
                        <Text>Height      {pokemon.height} ft</Text> 
                    </ListItem>

                    <ListItem  >
                        <Text style={{fontWeight:"bold"}}>Species</Text> 
                    </ListItem>

                    <ListItem  >
                        <Text>{pokemon.species.name}</Text> 
                    </ListItem>

                    <ListItem itemDivider /* Prop for this list item , builtin */ >
                        <Text style={{fontWeight:"bold"}}>Abilities</Text> 
                    </ListItem>

                    <List 
                        dataArray={pokemon.abilities}
                        renderRow={(item)=>
                            <ListItem>
                                <Text>{item.ability.name}</Text>
                            </ListItem>
                        }/>

                </View>

            </ScrollView>
        </ImageBackground>
        )
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        marginTop:Platform.OS==="android"?10:0,
        
    },
    header:{
        fontSize:30,
        color:'red',
        textAlign:"center",
    },
    viewStyle:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    img:{
        height:200,
        width:200,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    info:{
        flex:1,
        backgroundColor:"white",
        opacity:0.8
    },
    backgroundImage:{
        // height:"100%",
        // width:"100%",
        height:height,
        width:width,
        resizeMode:"cover"
    }
})