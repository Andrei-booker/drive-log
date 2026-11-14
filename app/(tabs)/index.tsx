import '@/global.css';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import '../../i18n';

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  const { t } = useTranslation();
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-sans-bold text-foreground">{t('home.title')}</Text>
      <Link href="/onboarding" className="mt-4 rounded bg-black text-white p-4">
        Go to Onboarding
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-black text-white p-4">
        Go to Sign in
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-black text-white p-4">
        Go to Sign up
      </Link>
    </SafeAreaView>
  );
}
