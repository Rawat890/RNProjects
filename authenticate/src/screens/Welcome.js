import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../constants/theme'

export default function Welcome() {
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor:theme.colors.welcome}}> 
    <View className="flex-1 flex justify-around my-4">
      <Text className="text-white text-center font-bold text-4xl">
      Let&apos;s Get Started
      </Text>
    </View>
    </SafeAreaView>
  )
}