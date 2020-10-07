import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet,View, Button,Image,FlatList,TouchableOpacity} from 'react-native';

const CourseListScreen3rdS=(props)=>{
    const courses =[
        {name : "SWE 4303",key :"1"},
        {name : "CSE 4307", key :"2"},
        {name : "Math 4357", key :"3"},
        {name : "SWE 4315", key :"4"},

    ];
   
    return (
        <View style ={styles.viewStyle}>    
        <Text style={styles.textStyle}> Third Semester </Text>

        <FlatList
                data={courses}
                renderItem={function({item}){
                    return(<Text style={styles.textStyle}><Text style={{fontWeight: "bold"}}> {item.key} . {item.name}</Text></Text>);
                }}
            />                                           
         
        </View>
         )
};

const styles=StyleSheet.create(
    {
        textStyle:{
            fontSize:20,
            color : '#052253',
        },
        viewStyle :{
            borderColor :'black',
            borderWidth :3,
            backgroundColor: "#CCF8FC",
            margin : 5,
            padding :8,
            paddingVertical: 12,
            paddingHorizontal: 15,
            paddingBottom :26,

        },
         
    }    
);

export default CourseListScreen3rdS;