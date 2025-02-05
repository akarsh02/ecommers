import React from 'react'
import { Stack, Tabs } from 'expo-router'
import "@/global.css";
import { Link } from 'expo-router';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Icon } from '@/components/ui/icon';
import { ShoppingCart } from 'lucide-react-native';

const queryClient = new QueryClient()

const RootLayout = () => {
 return (
  <QueryClientProvider client={queryClient}>
   <GluestackUIProvider>
   <Stack screenOptions={{headerRight:()=>(<Link href={'/cart'}><Icon as={ShoppingCart} /></Link>)}}>
    <Stack.Screen name="index" options={{ title: "Shop" }} />
   </Stack>
  </GluestackUIProvider>
  </QueryClientProvider>
 )
}

export default RootLayout
