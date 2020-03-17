import React from 'react';
import { StyleSheet,Button } from 'react-native';
// import Colors from '../constants/color';

const PrimaryButton = props => {
    return (
         <Button {...props}
      style={[styles.button_primary,props.style,]}
      onPress= {()=>props.onBtnPress()}
       />
      )
}
const styles = StyleSheet.create({
    button_primary:{
      marginBottom:10,
      borderRadius:10,
      width:'100%'
      // textAlign:"center",
    //   backgroundColor:Colors.dark_primary_color,
    //   color:Colors.white_color
      },
})
export default PrimaryButton;