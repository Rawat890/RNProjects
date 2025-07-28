import { LinearGradient } from 'expo-linear-gradient';
import { Image, StatusBar, StyleSheet, View } from "react-native";
import Animated, { FadeInDown } from 'react-native-reanimated';

import { useRouter } from 'expo-router';
import { scale } from 'react-native-size-matters';
import CustomButton from '../src/components/CustomButton';
import { welcome } from "../src/constants/Images";
import { NavigationRoutes } from '../src/constants/NavigationRoutes';
import { theme } from '../src/constants/theme';
import { heightPercent, widthPercent } from "../src/utilities/commonFunctions";

export default function WelcomeScreen() {

  const router = useRouter();

  const navigateToHome = ()=>{
    router.push(NavigationRoutes.HOME)
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <Image
      source={welcome}
      style={styles.bgImage}
      />
 
     {/*linear gradient*/}
      <Animated.View entering={FadeInDown.duration(600)} style={{flex:1}}>
        <LinearGradient
        colors={['rgba(2555,255,255,0)','rgba(2555,255,255,0.5)', 'white', 'white']}
        style={styles.gradient}
        start={{x:0.5, y:0}}
        end={{x:0.5, y:0.8}}
        />

      {/*content*/}
      <View style={styles.contentContainer}>
        <Animated.Text entering={FadeInDown.delay(400).springify()} style={styles.title}>
          Pixels
        </Animated.Text>
        <Animated.Text entering={FadeInDown.delay(500).springify()} style={styles.punchLine}>
          Every Pixel tells a story
        </Animated.Text>
        
        <CustomButton title='Start Explore' titleColor='white' onPress={navigateToHome}/>
      </View>
      </Animated.View>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
   flex:1,
  },
  bgImage:{
    resizeMode:'cover',
    width:widthPercent(100),
    height:heightPercent(100),
    position:'absolute'
  },
  gradient:{
    width:widthPercent(100),
    height:heightPercent(35),
    bottom:0,
    position:'absolute'
  },
  contentContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-end',
    gap: scale(10),
  },
  title: {
    fontSize: heightPercent(5),
    color: theme.colors.neutral(0.9),
    fontWeight: theme.fontWeights.bold
  },
  punchLine: {
    fontSize: heightPercent(2.3),
    fontWeight: theme.fontWeights.medium,
    marginBottom:scale(10),
  }
})
