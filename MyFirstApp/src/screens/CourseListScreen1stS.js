import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet,View, Button,Image,FlatList,TouchableOpacity} from 'react-native';

const CourseListScreen1stS=(props)=>{
    const courses =[
        {name : "SWE 4103",key :"1"},
        {name : "CSE 4101", key :"2"},
        {name : "Math 4155", key :"3"},
        {name : "HUM 4166", key :"4"},

    ];
   
    return (
        <View style ={styles.viewStyle}>    
        <Text style={styles.textStyle}><Text style={{fontWeight: "bold"}}> First Semester </Text></Text>

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

export default CourseListScreen1stS;