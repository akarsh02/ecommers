import React from 'react'
import { Stack, Tabs } from 'expo-router'
import "@/global.css";
import { Link } from 'expo-router';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Icon } from '@/components/ui/icon';
import { ShoppingCart } from 'lucide-react-native';
import useCart from '@/store/cartStroe';
import { Text } from '@/components/ui/text';


const queryClient = new QueryClient()

const RootLayout = () => {
 const cartItems = useCart((state:any)=>state.items.length)
 return (
  <QueryClientProvider client={queryClient}>
   <GluestackUIProvider>
   <Stack screenOptions={{headerRight:()=>(<Link className='flex p-5' href={'/cart'}><Icon as={ShoppingCart} />
   <Text className='px-2'>{cartItems}</Text>
   </Link>)}}>
    <Stack.Screen name="index" options={{ title: "Shop" }} />
   </Stack>
  </GluestackUIProvider>
  </QueryClientProvider>
 )
}

export default RootLayout
