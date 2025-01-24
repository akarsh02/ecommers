import React, { useEffect, useState } from 'react'
import { FlatList, Text, useWindowDimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import products from '../assets/products.json'
import ProductListItem from '../components/ProductListItem'
import { Button, ButtonText } from '@/components/ui/button'
import { useBreakpointValue } from '@/components/ui/utils/use-break-point-value'
import { listProducts } from '@/api/products'



const HomeScreen = () => {
 const [data,setData]= useState()

 useEffect(()=>{
  listProducts().then((res)=>setData(res))
 },[])

 const numColumns = useBreakpointValue({
  default: 3,
  sm: 3,
  xl: 4
 })
 return (
  <>
   <FlatList data={data} showsHorizontalScrollIndicator={false} className=' max-w-[960px] mx-auto' numColumns={numColumns} key={numColumns} columnWrapperClassName='gap-2' contentContainerClassName='gap-2' renderItem={({ item }) => <ProductListItem product={item} />} />
  </>
 )
}

export default HomeScreen
