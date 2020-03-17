import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View ,Button ,TouchableOpacity} from 'react-native';
import Colors from '../../constants/colors';
import AsyncStorage from '@react-native-community/async-storage';

const SignAs = (props)=>{
    const [signInAs, setSignnedInAs] = useState('')
     const ParentSignIn = () =>{
         setSignnedInAs("Parental")

         props.navigation.navigate('Login')
     }

     const BussinessSignIn = () =>{
        setSignnedInAs("Bussiness")

        props.navigation.navigate('Login')
    }

    return(
        <View style={styles.container}>
            <Text style={[styles.text,styles.textHeader]}>SignIn As </Text>
            <View style={styles.SignInblocks}>
                <TouchableOpacity  activeOpacity={0.3} style={styles.SignAs} 
                onPress={()=>{ParentSignIn()}}
                ><Text style={styles.text}>Parent</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.3} style={styles.SignAs} 
                onPress={()=>{BussinessSignIn()}}>
                    <Text style={styles.text}>Business</Text></TouchableOpacity>
            </View>
        </View>

    )
}
export default SignAs;

const styles=StyleSheet.create({
container:{
    flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:Colors.blue,


},
text:{
    color:'black',
    fontSize:20,
    fontFamily:'IndieFlower',
    
},
textHeader:{
    marginBottom:15,
    fontSize:24,
    fontStyle:'normal'
},
SignInblocks:{
    flexDirection:'row',
    flexWrap:'wrap',
   justifyContent:'space-around',
},
SignAs:{
    justifyContent:'center',
alignItems:'center',
    marginRight:10,
    padding:5,
    width:150,
    height:150,
    borderWidth:5,
    borderRadius:10,
    borderColor:'black',
    color:'black',
    backgroundColor:Colors.blue_dark
}
})