import { MasonryFlashList } from '@shopify/flash-list'
import { StyleSheet, View } from 'react-native'
import ImageCard from '../../components/ImageCard'
import { getColumnCount, widthPercent } from '../../utilities/commonFunctions'

const ImageGrid = ({images}) => {

  const columns = getColumnCount();

  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={images}
        numColumns={columns}
        renderItem={({ item, index }) =>
          <ImageCard item={item} index={index} columns={columns} />
        }
        estimatedItemSize={200}
        overrideItemLayout={() => ({
          length: 200,
          offset: 200,
          index: 0
        })} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    minHeight:3,
    width:widthPercent(100),
  }
})


export default ImageGrid;
