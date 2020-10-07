import React from 'react';
import {Text, StyleSheet, View,FlatList,Image,TouchableOpacity} from 'react-native';

const SemesterListScreen=(props)=>{
 
    return (
        <View style={styles.viewStyle}>
             <TouchableOpacity
                style={styles.button}
            
                onPress= {function(){
                props.navigation.navigate("Course List 1st")

              
            }}>
                <Text style={styles.ButtonText}><Text style={{fontWeight: "bold"}}>Semester 1st</Text></Text>
            
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            
            onPress= {function(){
                props.navigation.navigate("Course List 2nd")
              
            }}>
            <Text style={styles.ButtonText}><Text style={{fontWeight: "bold"}}>Semester 2nd</Text></Text>
            
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            
            onPress= {function(){
                props.navigation.navigate("Course List 3rd")
              
            }}>
            <Text style={styles.ButtonText}><Text style={{fontWeight: "bold"}}>Semester 3rd</Text></Text>
            
            </TouchableOpacity>
           
           

        </View>
    )
};

const styles=StyleSheet.create(
    {
        textStyle:{
            fontSize:30,
            color : 'blue',
            
        },

        viewStyle:{
            backgroundColor: "white",
            borderWidth : 5,
            padding :20,
        },
        button: {
            alignItems: "center",
             backgroundColor: "#A3EFF9",
             borderWidth :2,
             borderRadius: 5,
             paddingVertical: 15,
             paddingHorizontal: 12,
             padding: 10,
          },
          ButtonText: {
            // color: "#fff",
            // backgroundColor: "#39E0EC",
            // borderRadius :5,
            // borderColor : "#49E6E7",
          fontSize :18,
        }
    }    
);

export default SemesterListScreen;