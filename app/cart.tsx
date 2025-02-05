import React from 'react'
import { Text,FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import useCart from '@/store/cartStroe'
import { Box } from '@/components/ui/box'
import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import {Button, ButtonText } from '@/components/ui/button'
import { Redirect } from 'expo-router'

const CartScreen = () => {
 const cartItem = useCart((state:any)=>state.items)
 const resetCart = useCart((state:any)=>state.resetCart)



 const onCheckout =() =>{
   resetCart()
 }

 if (cartItem.length === 0){
   return <Redirect href={'/'}/>
 }

 return (
  <>
   <Text>Cart </Text>
   <FlatList data={cartItem} contentContainerClassName='gap-2 max-w-[960px] w-full ' renderItem={({ item }) =>(
    <HStack className='bg-white p-3'>
     <VStack>
     <Text> {item.product.name} </Text>
     <Text> {item.product.price} </Text>
     </VStack>
      <Text>
      {item.quantity}
      </Text>
   
    </HStack>
   )} 
    ListFooterComponent={()=>(
     <Button onPress={onCheckout}>
      <ButtonText>Checkout</ButtonText>
     </Button>
    )}
   />

  </>
 )
}

export default CartScreen
