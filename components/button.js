import React from 'react';
import { StyleSheet,Button } from 'react-native';
// import Colors from '../constants/color';

const PrimaryButton = props => {
    return (
         <Button {...props}
      style={styles.inputField}
      onPress= {()=>props.onBtnPress()}
       />
      )
}
const styles = StyleSheet.create({
    inputField:{
        width:'80%',
      marginBottom:10,
      borderRadius:10,
      textAlign:"center",
    //   backgroundColor:Colors.dark_primary_color,
    //   color:Colors.white_color
      },
})
export default PrimaryButton;