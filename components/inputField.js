import React from 'react';
import { StyleSheet, View, TextInput, } from 'react-native';
// import Colors from '../constants/color';

const Input = props => {
    return (
         <TextInput {...props}
      style={[styles.inputField,props.style]}
      
       />
      )
}
const styles = StyleSheet.create({
    inputField:{
      marginBottom:10,
      width:'80%',
    //   borderColor:Colors.dark_primary_color,
    //   color:Colors.primary_text_color,
      borderWidth:2,
      textAlign:'left',
      borderRadius:30,
      fontSize:20,
      },
})
export default Input;