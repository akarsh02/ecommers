import React from 'react'
import { Stack, Tabs } from 'expo-router'
import "@/global.css";
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'


const RootLayout = () => {
 return (
  <GluestackUIProvider>
   <Stack >
    <Stack.Screen name="index" options={{ title: "Shop" }} />
   </Stack>
  </GluestackUIProvider>
 )
}

export default RootLayout
