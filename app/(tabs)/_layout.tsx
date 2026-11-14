import { tabs } from '@/constants/data';
import { icons } from '@/constants/icons';
import { colors, components } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { Tabs, usePathname } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const tabBar = components.tabBar;

const TabLayout = () => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const pathname = usePathname();

  const TabIcon = ({ color, focused, icon }: TabIconProps) => {
    const IconComponent = icons[icon];

    const strokeColor = color ?? (focused ? colors.primary : colors.secondary);

    return <IconComponent stroke={strokeColor} />;
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        tabBarStyle: {
          position: 'absolute',
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          height: tabBar.height,
          marginHorizontal: tabBar.horizontalInset,
          backgroundColor: colors.background,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          elevation: 0,
        },
        tabBarItemStyle: {
          paddingVertical: tabBar.itemPaddingVertical,
        },
        tabBarIconStyle: {
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          alignItems: 'center',
          marginBottom: 4,
        },
      }}
    >
      {tabs.map((tab) => {
        const isAdd = tab.name === 'add';

        return isAdd ? (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: t(`${tab.title}.tabTitle`),
              tabBarButton: ({ onPress }) => {
                const focused = pathname === '/add';

                return (
                  <Pressable
                    onPress={onPress}
                    style={{
                      width: tabBar.addButtonSize,
                      height: tabBar.addButtonSize,
                      alignSelf: 'center',
                      ...(focused && {
                        shadowColor: colors.primary,
                        shadowOffset: {
                          width: 0,
                          height: 4,
                        },
                        shadowOpacity: 0.4,
                        shadowRadius: 20,

                        elevation: 8,
                      }),
                    }}
                  >
                    <LinearGradient
                      colors={
                        focused
                          ? [colors.primary, colors.addButtonActive]
                          : [colors.addButtonUpLeftInactive, colors.addButtonDownRightInactive]
                      }
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={{
                        flex: 1,
                        borderRadius: tabBar.addButtonBorderRadius,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <TabIcon focused={focused} icon={tab.icon} color={colors.white} />
                    </LinearGradient>
                  </Pressable>
                );
              },
            }}
          />
        ) : (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: t(`${tab.title}.tabTitle`),
              tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={tab.icon} />,
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default TabLayout;
