import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Images } from '../constants/images';
import { Routes } from '../constants/routes';
import { getDimension } from '../utilities/commonFunctions';
import { styling } from '../utilities/theme';

const [screenWidth,screenHeight]=getDimension(); 

function MovieList({title, data}) {

  let movieName ='Ant Man';
  console.log("Image:", Images.naruto);

  const navigation = useNavigation();

  const navigateToMovie =(item)=>{
    navigation.navigate(Routes.MOVIE, item)
  }
  return (
    <View className = "mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
      <Text className="text-white text-xl">{title}</Text>
      <TouchableOpacity>
        <Text style={styling.text} className="text=lg">
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
            onPress={()=>navigateToMovie(item)}
            >
              <View>
              <Image
              source={Images.train}
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
                </View>
            </TouchableWithoutFeedback>
          )
        })}
      </ScrollView>
      </View>
    </View>
  )
}

export default MovieList;