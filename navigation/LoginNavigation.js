import {createAppContainer} from 'react-navigation';
// import HomeScreen from '../containers/HomeScreen/HomeScreen';
import RegisterPage from '../containers/Register/RegisterPage';
import LoginPage from '../containers/Login/LoginPage';
import { createStackNavigator,createSwitchNavigator } from '@react-navigation/stack';
const Loginav = createStackNavigator({
    
    Register : RegisterPage,
    Login: LoginPage,
    
})
const SwitchNavigator = createSwitchNavigator(
    {
        Register: RegisterPage,
        Home: Loginav
    },
    {
      initialRouteName: 'Register',
    }
  );
export default createAppContainer(SwitchNavigator);