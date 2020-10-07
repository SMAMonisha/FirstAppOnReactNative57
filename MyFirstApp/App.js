import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SemesterListScreen from './src/screens/SemesterListScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FacultyList from './src/screens/FacultyList';
import CourseListScreen1stS from './src/screens/CourseListScreen1stS';
import CourseListScreen2ndS from './src/screens/CourseListScreen2ndS';
import CourseListScreen3rdS from './src/screens/CourseListScreen3rdS';


const stack = createStackNavigator()

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen}/>
        <stack.Screen name="Semester" component={SemesterListScreen}/>
        <stack.Screen name="Profile" component={ProfileScreen}/>
        <stack.Screen name="Faculty Name" component={FacultyList}/>
        <stack.Screen name="Course List 1st" component={CourseListScreen1stS}/>
        <stack.Screen name="Course List 2nd" component={CourseListScreen2ndS}/>
        <stack.Screen name="Course List 3rd" component={CourseListScreen3rdS}/>

      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;