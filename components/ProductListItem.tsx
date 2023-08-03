import {Image, View, Text, StyleSheet,Pressable} from 'react-native';
import {Product} from '../src/types';
import { useDispatch } from 'react-redux';
import { useRouter } from 'expo-router';
import { productsSlice } from '@/src/store/productsSlice';
type ProductListItemType={
    product:Product;
    index:number;
}

const ProductListItem=({product,index}:ProductListItemType)=>{
    console.log(product.name);
    const dispatch= useDispatch();
    const router=useRouter();
    return (
        // <Link href={`/product/${product.id}`} asChild>
      
        <Pressable onPress={()=>{dispatch(productsSlice.actions.setSelectedProduct(product.id)); router.push(`/product/${product.id}`)}} style={styles.itemContainer}>
            <Image source={{uri:`${product.image}`}} style={styles.image}/>
        </Pressable>
        
    //     {/* </Link> */}
    )
}

const styles=StyleSheet.create({
    image:{
       width:'100%',
      aspectRatio:1
    },
    itemContainer:{
        width:'50%'
    }
})

export default ProductListItem;