/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
import {createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation';
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import HomeScreen from './screens/HomeScreen'

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen:{
    screen: HomeScreen
  },
  SettingsScreen:{
    screen: SettingsScreen
  }
})

const AppStackNavigator = createStackNavigator({
  AppTabNavigator:{
    screen: AppTabNavigator,
    navigationOptions: ({navigation}) => ({
      title: "Your App",
      /*headerLeft:(
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10}}>
            <Icon name="md-menu" size={24} />
          </View>
        </TouchableOpacity>
      )*/
    })
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator
})

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
})

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
})
