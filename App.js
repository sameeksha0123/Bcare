/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RegisterPage from './containers/Register/RegisterPage';
import LoginPage from './containers/Login/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator,createSwitchNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends Component{
  constructor(props) {
        super(props);
      
        this.state = { 
          isLoading: true,
        isLogged:false, }
      }
      

      //=============hooks =============================
      // const getUserId = async() =>{
      //   try{
      //   let username ;
      //   username= await AsyncStorage.getItem('@user_name')|| null
      //   if(username !== null){
      //     console.log("username: ", username)
      //     setlog(!logged)
      //   }}
      //   catch(e){
      //     console.log("user not found")
      //   }
      // }
          // useEffect(()=>{getUserId()},[])
          async componentWillMount(){
            console.log("-----------")
            
          }
      async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        console.log("----------- DidMount")
        try{
          let username ;
          username= await AsyncStorage.getItem('@user_name')|| null
          logged= await AsyncStorage.getItem('isLogged')
          if(username !== null ){
            console.log("username: ", username)
            console.log("logged", logged)
            // alert(`${username} is logged in`)
            // this.setState({isLogged:true})
          }}
          catch(e){
            console.log("user not found")
          }
        if (data !== null) {
          this.setState({ isLoading: false });
          
        }
        const data = await this.performTimeConsumingTask();
  
      }
    render(){
      if (this.state.isLoading) {
            return <SplashScreen />;
          }
      return(
        <NavigationContainer>
       <Stack.Navigator>
         {this.state.isLoading ? 
              <Stack.Screen name="Register" component={RegisterPage} 
              options={{headerShown:false}}/> :
              <Stack.Screen name="Login" component={LoginPage} 
              options={{headerShown:false}}/> 
         }
             
              
             
              <Stack.Screen name="Home" component={HomeScreen} options={{title:'Home'}}/> 
            </Stack.Navigator>
          </NavigationContainer>
     
      )
    }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
  });
export default App;

