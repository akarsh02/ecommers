import React from 'react'
import { Stack, Tabs } from 'expo-router'
import "@/global.css";
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

const RootLayout = () => {
 return (
  <QueryClientProvider client={queryClient}>
  <GluestackUIProvider>
   <Stack >
    <Stack.Screen name="index" options={{ title: "Shop" }} />
   </Stack>
  </GluestackUIProvider>
  </QueryClientProvider>
 )
}

export default RootLayout
