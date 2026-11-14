import '@/global.css';
import '@/i18n';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import React, { useEffect } from 'react';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'sans-regular': require('../assets/fonts/Inter_18pt-Regular.ttf'),
    'sans-bold': require('../assets/fonts/Inter_18pt-Bold.ttf'),
    'sans-medium': require('../assets/fonts/Inter_18pt-Medium.ttf'),
    'sans-semibold': require('../assets/fonts/Inter_18pt-SemiBold.ttf'),
    'sans-extrabold': require('../assets/fonts/Inter_18pt-ExtraBold.ttf'),
    'sans-light': require('../assets/fonts/Inter_18pt-Light.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
