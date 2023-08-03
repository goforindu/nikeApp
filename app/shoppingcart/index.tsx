import CartListItem from '@/components/CartListItem';
import {View,Text, FlatList,ScrollView} from 'react-native';
import cartList from '../../assets/data/cart';


const ShoppingCart=()=>{
    return (
        <ScrollView>
            <FlatList data={cartList} renderItem={({item})=><CartListItem cartItem={item}/>}/>
        </ScrollView>
    )
}

export default ShoppingCart;