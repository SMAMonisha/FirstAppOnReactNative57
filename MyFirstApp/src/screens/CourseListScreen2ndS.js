import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet,View, Button,Image,FlatList,TouchableOpacity} from 'react-native';

const CourseListScreen2ndS=(props)=>{
    const courses =[
        {name : "SWE 4205",key :"1"},
        {name : "CSE 4207", key :"2"},
        {name : "Math 4245", key :"3"},
        {name : "SWE 4217", key :"4"},

    ];
   
    return (
        <View style ={styles.viewStyle}>    
        <Text style={styles.textStyle}><Text style={{fontWeight: "bold"}}> Second Semester </Text></Text>

        <FlatList
                data={courses}
                renderItem={function({item}){
                    return(<Text style={styles.textStyle}> {item.key} . {item.name}</Text>);
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

export default CourseListScreen2ndS;