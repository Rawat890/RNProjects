import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Routes } from '../constants/routes';
import { getDimension } from '../utilities/commonFunctions';
import { styles } from '../utilities/theme';

const [screenWidth,screenHeight]=getDimension(); 

function MovieList({title, data}) {

  let movieName ='Ant Man';

  const navigation = useNavigation();

  const navigateToMovie =()=>{
    navigation.navigate(Routes.MOVIE, item)
  }
  return (
    <View className = "mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
      <Text className="text-white text-xl">{title}</Text>
      <TouchableOpacity>
        <Text style={styles.text} className="text=lg">
          See All
        </Text>
      </TouchableOpacity>

      {/* Movies Row  */}
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:scale(15)}}
      >
        {data.map((item, index)=>{
          return (
            <TouchableWithoutFeedback
            key={index}
            onPress={()=>{navigateToMovie}}
            >
              <Image
              source={}
              className="rounded-3xl"
              style={{
                width:screenWidth*0.33,
                height:screenHeight*0.22
              }}
              />
              <Text className="text-neutral-300 ml-1">
                {
                movieName.length >14 ?movieName.slice(0,14) + '...' : movieName
                }
                </Text>
            </TouchableWithoutFeedback>
          )
        })}
      </ScrollView>
      </View>
    </View>
  )
}

export default MovieList;