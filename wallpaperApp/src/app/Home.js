import { FontAwesome6 } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { scale } from 'react-native-size-matters'
import { apiCall } from '../api'
import { InputWithIcon } from '../components/InputWithIcon'
import { close, search } from '../constants/Images'
import { theme } from '../constants/theme'
import { heightPercent, widthPercent } from '../utilities/commonFunctions'
import { Categories } from './appComponents/Categories'
import ImageGrid from './appComponents/ImageGrid'

const Home = () => {

  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 10;
  const [isClosePressed, setIsClosedPressed] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [activeCategory, setActiveCategory] = useState('backgrounds');
  const [images, setImages] = useState([]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = async (params = { page: 1 }, append = false) => {
    let res = await apiCall(params);
    console.log('Response data - ', res.data)
    //You're adding new images to the end of the existing ones.
    if (append) {
      setImages(prev => [...prev, ...res.data.hits]);
    } else {
      setImages(res.data.hits);
    }

  }
  return (
    <View style={[styles.container, { paddingTop }]}>

      <View style={styles.header}>
        <Pressable>
          <Text style={styles.title}>
            Pixels
          </Text>
        </Pressable>
        <Pressable>
          <FontAwesome6 name="bars-staggered" color={theme.colors.neutral(0.7)} size={22} />
        </Pressable>
      </View>
  
        <InputWithIcon placeholder='Search picture here' source1={search} source2={close} onChange={(text) => setSearchText(text)} value={searchText}
          onPressSource2={() => {
            setSearchText('');
            setIsClosedPressed(prev => !prev);
          }}
        />

      <View>
        <Categories handleCategoryChange={handleCategoryChange} activeCategory={activeCategory} />
      </View>

      <ScrollView
        contentContainerStyle={{ gap: scale(15) }}
      >
        <View>
          {
            images.length > 0 && <ImageGrid images={images} />
          }
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: scale(12),
    backgroundColor: theme.colors.white,
  },
  header: {
    marginHorizontal: widthPercent(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: widthPercent(30),
    alignItems: 'center',
  },
  title: {
    fontSize: heightPercent(3),
    color: theme.colors.neutral(0.9),
    fontWeight: theme.fontWeights.medium,
  },
})

export default Home
