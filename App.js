import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoListScreen from './TodoListScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AddTodoScreen from './AddTodoItemScreen';
const Mytabs= createStackNavigator();
export default function tabs(){
  
  return(
  
<NavigationContainer>
<Mytabs.Navigator>
<Mytabs.Screen name='Home' component={TodoListScreen}/>
<Mytabs.Screen name = 'AddTodoScreen' component={AddTodoScreen}/>
</Mytabs.Navigator>
</NavigationContainer>
  );
}