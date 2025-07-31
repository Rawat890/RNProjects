import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { heightPercent, widthPercent } from '../constants/commonFunctions'
import { Images } from '../constants/Images'
import { theme } from '../constants/theme'

export default function Welcome() {
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor:theme.colors.welcome}}> 
    <View className="flex-1 flex justify-around my-4">
      <Text className="text-white text-center font-bold text-4xl my-3">
      Let&apos;s Get Started
      </Text>
      <View className="flex-row justify-center">
        <Image source={Images.welcome} style={styles.image}/>
      </View>

      <View className="space-y-4">
        <TouchableOpacity className="py-4  bg-yellow-400 mx-7 rounded-xl">
          <Text className="font-bold text-center text-gray-700 text-2xl">Register</Text>
        </TouchableOpacity>
        <View className="flex-row justify-center">
          <Text className="text-center text-xl my-1">Already have an account?</Text>
          <TouchableOpacity>
            <Text className="text-center text-xl my-1 text-yellow-400">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image:{
    width:widthPercent(100),
    height:heightPercent(80),
    resizeMode:'contain'
  }
})