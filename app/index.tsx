import React from 'react'
import { FlatList, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import products from '../assets/products.json'
import ProductListItem from '../components/ProductListItem'



const HomeScreen = () => {
 return (
  <>
   <FlatList data={products} renderItem={({ item }) => <ProductListItem product={item} />} />
  </>
 )
}

export default HomeScreen
