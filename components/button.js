import React from 'react';
import Colors from '../constants/colors';
import { View,StyleSheet,Button,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import Colors from '../constants/color';

const PrimaryButton = props => {
    return (
      // <View style={[styles.btn,props.style]}>
      // <Button {...props} 
      // color={props.color}
      // touchSoundDisabled={true}
      // onPress= {()=>props.onBtnPress()}
      //  />
      // </View>
      <View style={styles.container}>
        <TouchableOpacity 
        style={styles.btn}
        onPress={()=>props.onBtnPress()}
        >
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    )
}
const styles = StyleSheet.create({  
  container:{
    flex:1,
    flexDirection:'row'
  } ,                                                                                                                                                                                                                                                                      
    btn:{
      // marginBottom:10,
      borderRadius:20,
      width:'100%',
      padding:20,
      // textAlign:"center",
      backgroundColor:Colors.peach,
    //   
      },
      btnText:{
        color:'white',
        fontSize:15,
      }
})
export default PrimaryButton;