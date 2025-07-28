import { MasonryFlashList } from '@shopify/flash-list'
import { StyleSheet, View } from 'react-native'
import { ImageCard } from '../../components/ImageCard'

export const ImageGrid = ({images}) => {
  return (
    <View style={styles.container}>
    <MasonryFlashList
    data={images}
    numColumns={2}
    renderItem={({item})=>
     <ImageCard item={item}/>
    }
    estimatedItemSize={200}
    />
    </View>
  )
}

const styles = StyleSheet.create({
})

