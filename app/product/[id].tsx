import { productsSlice } from '@/src/store/productsSlice';
import { Text, View,StyleSheet, Image, FlatList,Pressable, useWindowDimensions, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { useLocalSearchParams,useRouter } from 'expo-router';

export default function ProductDetailScreen() {
  const products=useSelector((state)=>state.products.products);
  const {width}=useWindowDimensions();
    const {id}=useLocalSearchParams();
    const result=products.filter((product)=>product.id.toString()===id);
    console.log(result);
   const router=useRouter();

    const addToCart=()=>{
      console.log("added to cart");
      router.push('/shoppingcart/');
    }
    
return (
    <ScrollView style={styles.container}>
     <FlatList data={result[0].images}  renderItem={({item})=> <Image source={{uri:item}} style={{width:width,aspectRatio:1,maxHeight:300}}/>}
     horizontal
     showsHorizontalScrollIndicator={false}
     pagingEnabled
     />
     <View>
     <Text style={styles.title}>{result[0].name}</Text>
     <Text style={styles.priceValue}>${result[0].price}</Text>
     <Text style={styles.desc}>{result[0].description}</Text>
     <Pressable style={styles.button} onPress={addToCart}><Text style={styles.buttonText}>Add To Cart</Text></Pressable>
     </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10
  },
  title:{
    fontSize:32,
    fontWeight:500,
    marginVertical:10
  },
  priceValue:{
    fontSize:18,
    fontWeight:500,
    marginVertical:10
  },
  desc:{
    fontSize:18,
    fontWeight:300,
    marginVertical:10,
    marginBottom:65
  },
  button:{
    backgroundColor:'#000000',
    padding:15,
    width:'80%',
    position:'absolute',
    bottom:5,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20

  },
  buttonText:{
    color:'#ffffff',
    fontSize:18,
    fontWeight:'bold'
  }
 
});
