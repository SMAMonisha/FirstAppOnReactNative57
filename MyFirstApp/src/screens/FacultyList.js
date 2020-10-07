import React from 'react';
import {Text, StyleSheet, View,FlatList,Image} from 'react-native';

const FacultyList=()=>{
    const uni =[
        {name : "Mohayeminul Islam",key :"1"},
        {name : "Sadia Sharmin", key :"2"},
        {name : "Tajkia Rahman Toma", key :"3"},
        {name : "Tasnim Ahmed", key :"4"},
        {name : "Faisal Hossain", key :"5"},

    ];
   
    return (
        <View style={styles.viewStyle}>
            <FlatList
                data={uni}
                renderItem={function({item}){
                    return(<Text style={styles.textStyle}> {item.key}. {item.name} </Text>);
                }}

            />
           
        </View>
    )
};

const styles=StyleSheet.create(
    {
        textStyle:{
            fontSize:24,
            color : '#052253',
            
        },

        viewStyle :{
            borderColor :'black',
            borderWidth :3,
            backgroundColor: "#CCF8FC",
            margin : 5,
            padding :8,
            paddingVertical: 15,
            paddingHorizontal: 15,
            paddingBottom :26,

        },
       
    }    
);

export default FacultyList;