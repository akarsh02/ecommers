import React from 'react'
import { FlatList, Text, useWindowDimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import products from '../assets/products.json'
import ProductListItem from '../components/ProductListItem'
import { Button, ButtonText } from '@/components/ui/button'
import { useBreakpointValue } from '@/components/ui/utils/use-break-point-value'



const HomeScreen = () => {
 const { width } = useWindowDimensions()
 // const numColumns = width > 700 ? 3 : 2;
 const numColumns = useBreakpointValue({
  default: 3,
  sm: 3,
  xl: 4
 })
 return (
  <>
   <FlatList data={products} className=' max-w-[960px] mx-auto' numColumns={numColumns} key={numColumns} columnWrapperClassName='gap-2' contentContainerClassName='gap-2' renderItem={({ item }) => <ProductListItem product={item} />} />
  </>
 )
}

export default HomeScreen
