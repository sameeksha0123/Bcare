import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const avatar = (props) =>{
return(
    <View style={styles.roundContainer}>
        <Image source={require('../assets/images/minions.jpg')}/>
    </View>
)
}
const styles= StyleSheet.create({
roundContainer:{
    zIndex:0,
}
})
export default avatar;