import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen options={{headerShown:false}} component={Welcome} name='Welcome'/>
        <Stack.Screen options={{headerShown:false}} component={Home} name='Home'/>
        <Stack.Screen options={{headerShown:false}} component={Login} name='Login'/>
        <Stack.Screen options={{headerShown:false}} component={Register} name='Register'/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}