import React from 'react';
import { StyleSheet, View, TextInput, } from 'react-native';
// import Colors from '../constants/color';

const Input = props => {
    return (
         <TextInput {...props}
      style={styles.inputField}
      
       />
      )
}
const styles = StyleSheet.create({
    inputField:{
      margin:5,
      width:'80%',
    //   borderColor:Colors.dark_primary_color,
    //   color:Colors.primary_text_color,
      borderWidth:1,
      textAlign:'left',
      borderRadius:20,
      fontSize:20,
      },
})
export default Input;