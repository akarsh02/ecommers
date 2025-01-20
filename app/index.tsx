import React from 'react'
import { FlatList, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import products from '../assets/products.json'
import ProductListItem from '../components/ProductListItem'
import { Button, ButtonText } from '@/components/ui/button'



const HomeScreen = () => {
 return (
  <>
   {/* <FlatList data={products} renderItem={({ item }) => <ProductListItem product={item} />} /> */}
   <Button variant='solid'>
    <ButtonText>Click me</ButtonText>
   </Button>
  </>
 )
}

export default HomeScreen
