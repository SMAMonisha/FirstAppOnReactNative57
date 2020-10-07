import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet,View, Button,Image,TouchableOpacity} from 'react-native';

const HomeScreen=(props)=>{
    console.log(props)
    return (
        <View>
             <Image style={styles.ImageStyle} source = {require("./../../assets/logoIUT.jpg")}/>
             <Text style={styles.textStyle}>Department of CSE </Text>
             <Text style={styles.textStyle}>Program : SWE </Text>
            {/* <Button 
            title= "My Profile"
            onPress = {function (){
                props.navigation.navigate("Profile")
               // console.log("Button Pressed!")
            }
            }
            >
            </Button> */}
            
            <TouchableOpacity
            style={styles.button}
            
            onPress= {function(){
                props.navigation.navigate("Profile")
              
            }}>
            <Text style={styles.ButtonText}>My Profile</Text>
            {/* <Button title= "My Profile"></Button> */}
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            
            onPress= {function(){
                props.navigation.navigate("Semester")
              
            }}>
            <Text style={styles.ButtonText}>Semester Wise Course List</Text>
            
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            
            onPress= {function(){
                props.navigation.navigate("Faculty Name")
              
            }}>
            <Text style={styles.ButtonText}>List of Faculty Member</Text>
            
            </TouchableOpacity>
           
        </View>
         )
};

const styles=StyleSheet.create(
    {
        textStyle:{
            fontSize:22,
            color: '#000001',
            textAlign : "center",
        },
        button: {
            alignItems: "center",
            //backgroundColor: "00ffff",
            padding: 10,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 12
          },
          text: {
            color: "white"
          },
          ButtonText: {
            fontSize: 18,
            color: "#fff",
            backgroundColor: "#39E0EC",
            borderRadius :5,
            borderColor : "#49E6E7",
            paddingVertical: 8,
            paddingHorizontal: 7,
            fontWeight: "bold",
            alignSelf: "center",
            textTransform: "uppercase"
          },

          ImageStyle:
          {
              width: 130, 
              height: 220,
              alignSelf: 'center',
              margin:5,
          },
    }    
);

export default HomeScreen;