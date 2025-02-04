import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, useWindowDimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import products from '../assets/products.json'
import ProductListItem from '../components/ProductListItem'
import { Button, ButtonText } from '@/components/ui/button'
import { useBreakpointValue } from '@/components/ui/utils/use-break-point-value'
import { listProducts } from '@/api/products'
import { useQuery } from '@tanstack/react-query'



const HomeScreen = () => {

  // using tanstack we can do in better way we are sending a query to server
  const {data,isLoading,error}= useQuery({queryKey:['products'],queryFn:listProducts});

/* this is the basic way to fetch the data */
  //  const [data,setData]= useState()

//  useEffect(()=>{
//   listProducts().then((res)=>setData(res))
//  },[])

if(isLoading){
  <ActivityIndicator/>
}
if(error){
  return <Text>Error fetching products</Text>
}

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
