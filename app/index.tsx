import React from 'react'
import { FlatList, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import products from '../assets/products.json'
import ProductListItem from '../components/ProductListItem'
import { Button, ButtonText } from '@/components/ui/button'



const HomeScreen = () => {
 return (
  <>
   <FlatList data={products} numColumns={2} columnWrapperClassName='gap-2' contentContainerClassName='gap-2' renderItem={({ item }) => <ProductListItem product={item} />} />
  </>
 )
}

export default HomeScreen
