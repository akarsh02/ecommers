import { useLocalSearchParams, useSearchParams } from 'expo-router/build/hooks'
import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import products from '../../assets/products.json'
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated'
import { Card } from '@/components/ui/card'
import { Image } from '@/components/ui/image'
import { Heading } from '@/components/ui/heading'
import { Button, ButtonText } from '@/components/ui/button'
import { Box } from '@/components/ui/box'
import { VStack } from '@/components/ui/vstack'
import { Stack } from 'expo-router'
import { useQuery } from '@tanstack/react-query'
import { fetchProductByd } from '@/api/products'


const ProductDetails = () => {
 const { id } = useLocalSearchParams()

 const {data,isLoading,error} =useQuery({queryKey:['products',id],queryFn:()=>fetchProductByd(Number(id))})

 // const product = data?.find((p: any) => p.id === id)
 // console.log(product)
 if (isLoading) {
  return (
   <View className=' items-center justify-center flex '>
  <ActivityIndicator/>
  </View>
  )
 }
 return (
  <>
   <Card className="p-5 mx-auto my-2 rounded-lg max-w-[960px] w-full flex-1">
    <Stack.Screen name="product/[id]" options={{ title: data?.name }} />
    <Image 
     source={{
      uri: data?.image,
     }}
     className="mb-6 h-[240px] w-full rounded-md
    "
     alt="image"
     resizeMode="contain"
    />
    <Text className="text-sm font-normal mb-2 text-typography-700">
     {data.name}
    </Text>
    <VStack className="mb-6">
     <Heading size="md" className="mb-4">
      {data.price}
     </Heading>
     <Text size="sm">
      {data.description}
     </Text>
    </VStack>
    <Box className="flex-col sm:flex-row">
     <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
      <ButtonText size="sm">Add to cart</ButtonText>
     </Button>
     {/* <Button
     variant="outline"
     className="px-4 py-2 border-outline-300 sm:flex-1"
    >
     <ButtonText size="sm" className="text-typography-600">
      Wishlist
     </ButtonText>
    </Button> */}
    </Box>
   </Card>
  </>
 )
}

export default ProductDetails
