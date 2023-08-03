import { View, Text, StyleSheet,FlatList } from 'react-native';
import ProductListItem from '../../components/ProductListItem';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'expo-router';

export default function HomeScreen() {

  const products=useSelector(state=>state.products.products);
  return (
    
    <View style={styles.container}>
       <FlatList data={products} renderItem={({item,index})=><ProductListItem product={item} index={index}/>}
      numColumns={2}
      /> 
      
    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ffffff"
  
  }

});
