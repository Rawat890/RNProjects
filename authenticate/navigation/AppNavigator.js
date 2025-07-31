import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';
import { SignUp } from '../screens/SignUp';
import { Welcome } from '../screens/Welcome';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Screen name='Home' options={{headerShown:false}} component={Home}/> options={{headerShown:false}} component={Home}
    <Stack.Screen name='Welcome' options={{headerShown:false}} component={Welcome}/>
    <Stack.Screen name='Login' options={{headerShown:false}} component={Login}/>
    <Stack.Screen name='SignUp' options={{headerShown:false}} component={SignUp}/>
    </NavigationContainer>
  )
}
