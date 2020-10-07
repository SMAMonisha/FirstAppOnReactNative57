import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet,View, Button,Image,TouchableOpacity} from 'react-native';


const ProfileScreen=(props)=>{
    console.log(props)
    return (
        <View style ={styles.viewStyle}>
            
             <Image style={styles.ImageStyle} source = {require("./../../assets/MyPicture.jpg")}/>
             <Text style={styles.textStyle}>Name : Sheikh Moonwara Anjum Monisha </Text>
             <Text style={styles.textStyle}>Student ID : 170042057</Text>
             <Text style={styles.textStyle}>Room No : 106</Text>
             <Text style={styles.textStyle}>Email : moonwaraanjum@iut-dhaka.com</Text>

        </View>
         )
};

const styles=StyleSheet.create(
    {
        textStyle:{
            fontSize : 18,
            color : '#0A2D5E',
            padding :2,
            paddingLeft :5,
            paddingVertical: 6,
            paddingHorizontal: 10,
        },
        ImageStyle:
        {
            width: 160, 
            height: 180,
            alignSelf: 'center',
            margin:5,
            // borderWidth: 2,
            borderColor : "black",
        },
        viewStyle :{
            borderColor :'black',
            borderWidth :3,
            backgroundColor: "white",
            margin : 5,
            padding :8,
            paddingVertical: 12,
            paddingHorizontal: 15,
            paddingBottom :26,

        },
       
    }    
);

export default ProfileScreen;