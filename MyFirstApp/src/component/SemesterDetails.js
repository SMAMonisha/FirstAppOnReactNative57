import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet,View, Button,Image,TouchableOpacity} from 'react-native';

const SemesterDetails=(props)=>{
    console.log(props)
    // let semesterCourse=undefined
     if(props.title=="1st")
     {
        //  semesterCourse="Profile"
     }
     else if(props.title=="2nd")
     {
         
     }
     else if(props.title=="3rd")
     {
         
     }
    console.log(props)
    return (
        <View style ={styles.viewStyle}>    
             <TouchableOpacity
                style={styles.button}
            
                onPress= {function(){
                props.navigation.navigate("List")
              
            }}>
                <Text style={styles.textStyle}>Semester {props.title} </Text>
            
            </TouchableOpacity>
   
                       
           
         
        </View>
         )
};

const styles=StyleSheet.create(
    {
        textStyle:{
            fontSize:20,
            color : 'blue',
        },
        viewStyle :{
            borderColor :'blue',
            borderWidth :5,
            margin : 5,

        },
        button: {
            alignItems: "center",
            // backgroundColor: "blue",
            // padding: 10,
            // borderRadius: 10,
            // paddingVertical: 10,
            // paddingHorizontal: 12
          },
    
    }    
);

export default SemesterDetails;