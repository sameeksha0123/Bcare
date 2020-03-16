import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View ,Button ,Alert} from 'react-native';
import Colors from '../../constants/color';
import PrimaryButton from '../../components/button';
import Input from '../../components/inputField';
import firebase  from '../../Firebase'; 
import AsyncStorage from '@react-native-community/async-storage';
import { db ,auth} from '../../Firebase'
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-community/google-signin';

const LoginPage = (props) =>{
 
    auth.onAuthStateChanged(user=>{
      if(user){
        console.log("user ---->",user)
      }
      else{
        console.log("user is logged out")
      }
    })
    const [password, setPassword] = useState();
    const [email, setEmail] = useState('');
    const [userDetail,setUserDetail] = useState([])
    
    // GoogleSignin.configure({
    //   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    //   webClientId: "121537656271-v71ma344dh17ekokp9tu1vdce1u134c5.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
    //   // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    //   // hostedDomain: '', // specifies a hosted domain restriction
    //   // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    //   // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    //   // accountName: '', // [Android] specifies an account name on the device that should be used
    //   // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    // });
    const getUserId = async ()=>{
      console.log("asyncStore...........DidMount")
      
      try {
        const username = await AsyncStorage.getItem('@user_name') || 'none';
        console.log("username in login page",username)
        const object = await AsyncStorage.getAllKeys((err,keys)=>{
          AsyncStorage.multiGet(keys, (err, stores) => {
            stores.map((result, i, store) => {
              // get at each store's key/value so you can work with it
              let key = store[i][0];
              let value = store[i][1];
              console.log("--",key,':',value)
            });
          });
        })
        var i;
        console.log("All key..........",object)
        console.log('useDetail:', userDetail.map(i))
      } catch (error) {
        // Error retrieving data
        console.log(error.message);
      }
      return username;
    
      }
      useEffect(()=>{getUserId()},[])
    
    const pwdHandler = (e)=>{
        setPassword(e)
      }
     
      const emailHandler = (e)=>{
        setEmail(e)
      }
      const showLogged= ()=>{
        console.log('thiiiis', this)
        auth.createUserWithEmailAndPassword(email,password)
        .then(cred=> console.log("credentials", cred.user))
        .catch(err => console.log('error', err))
        // storeData(email,password)
        // setUserList(userList.push({
        //   userEmail: email,
        //   userPassword: password
        // }))
        db.ref('/items').push({
          userName: name,
          userPassword: password
        }).then(data=>{
          console.log("data", data)
        }).catch(error=>console.log("error",error));
        
        AsyncStorage.getAllKeys((err,keys)=>{
          AsyncStorage.multiGet(keys, (err, stores) => {
            stores.map((result, i, store) => {
              // get at each store's key/value so you can work with it
              let key = store[i][0];
              let value = store[i][1];
              console.log("--",key,':',value)
              if(key=== "@user_email" && value === email ||
              key === "@user_password" && value === password){
                props.navigation.navigate('Home')
              }
              else{
                Alert.alert('LOGIN AGAIN',"password or email not matched")
              }
            });
          });
        })
        setEmail('')
        setPassword('')

        // userRef.on('value', (snapshot)=>{
        //   console.log(snapshot.val())
        // })
        // props.navigation.navigate('Home')
      
    }
    return (
        <View style={styles.screen}>
   
   <Input 
      placeholder="Email address"
      onChangeText={emailHandler} 
      value={email}
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

<PrimaryButton title="LOG IN" 
      onBtnPress={()=>showLogged()}/>
     
     <Text  style={styles.linkText}
     onPress={()=>navigation.navigate('ResetPassword')}>
       Forget Password?</Text>
 
       {/* <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    // onPress={this._signIn}
    // disabled={this.state.isSigninInProgress}
     /> */}

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
