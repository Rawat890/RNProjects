import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Routes } from '../constants/routes'
import HomeScreen from '../screens/HomeScreen'
import MovieScreen from '../screens/MovieScreen'

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={HomeScreen} name={Routes.HOME} />
        <Stack.Screen component={MovieScreen} name={Routes.MOVIE} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}