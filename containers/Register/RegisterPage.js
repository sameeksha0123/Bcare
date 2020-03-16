import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/color';
import PrimaryButton from '../../components/button';
import Input from '../../components/inputField';
import AsyncStorage from '@react-native-community/async-storage';
import { db, auth } from '../../Firebase'
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-community/google-signin';

const LoginPage = ({navigation}) =>{
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const [name, setName] = useState('');
    const [isLogged,setlog]=useState(false)
    console.log('props')
  

    

    const storeData = async (name,email,password) => {
      try {
        setlog(true)
        await AsyncStorage.setItem('@user_name', name)
        await AsyncStorage.setItem('@user_email', email)
        await AsyncStorage.setItem('@user_password', password)
        await AsyncStorage.setItem('isLogged',isLogged)
      } catch (e) {
       console.log("Error .........")
      }
    }
    const pwdHandler = (e)=>{
        setPassword(e)
      }
      const emailHandler = (e)=>{
        setEmail(e)
      }
      const userNameHandler = (e)=>{
        setName(e)
      }
      const showLogged= ()=>{
        console.log('setting data---------------', name,email,password)
        storeData(name,email,password)
        console.log("storeData runned")
        // AsyncStorage.setItem('@user_name', name)
        // AsyncStorage.setItem('@user_email', email)
        // AsyncStorage.setItem('@user_password', password)
        // setUserList(userList.push({
        //   userEmail: email,
        //   userPassword: password
        // }))
        //pushing data in realtime database
        db.ref('/items').push({
          userName: name,
          userEmail: email,
          userPassword: password
        }).then(data=>{
          console.log("data", data)
        }).catch(error=>console.log("error",error));

        auth.createUserWithEmailAndPassword(email,password)
        .then(cred=> console.log("credentials", cred))
        .catch(err => console.log('error', err))
        setName('')
        setEmail('')
        setPassword('')

        // userRef.on('value', (snapshot)=>{
        //   console.log(snapshot.val())
        // })
        navigation.navigate('Home')
      
    }
    return (
        <View style={styles.screen}>
   
   <Input 
      placeholder="User Name"
      onChangeText={userNameHandler} 
      value={name}
      autoFocus
      required
      blurOnSubmit
      textContentType='name'
      />
    <Input 
      placeholder="Email address"
      onChangeText={emailHandler} 
      value={email}
      required
      blurOnSubmit
      textContentType='emailAddress'
      keyboardType='email-address'/>

<Input 
      placeholder="password"
      onChangeText={pwdHandler} 
      value={password}
      blurOnSubmit
      secureTextEntry = {true}
      textContentType='password'/>

<PrimaryButton title="REGISTER" 
      onBtnPress={()=>showLogged()}/>
     
     {/* <Text  style={styles.linkText}
     onPress={()=>navigation.navigate('ResetPassword')}>
       Forget Password?</Text> */}
       <Text  style={styles.linkText}
     onPress={()=>navigation.navigate('Login')}>
       switch to log in</Text>
{/* <View style={styles.otherLogin}> */}
 {/* <PrimaryButton title="GMAIL"  
      style={styles.gButton}
      onBtnPress={()=>navigation.navigate('TestScreen')}/> */}

{/* <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    // onPress={this._signIn}
    // disabled={this.state.isSigninInProgress} 
    /> */}

{/*<PrimaryButton title="see console" 
      style={styles.fButton}
      onBtnPress={()=>()=>navigation.navigate('HomeScreen')}/> */}
{/* </View> */}
</View>
    )
}
const styles = StyleSheet.create({
    screen:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      
    },linkText:{
      fontSize:16,
      color:Colors.dark_primary_color,
      fontStyle:'italic',
    }
     
    });

    export default LoginPage;
