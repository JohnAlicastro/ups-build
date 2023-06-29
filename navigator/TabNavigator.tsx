import { View, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import CustomerScreen from '../screens/CustomerScreen';
import OrdersScreen from '../screens/OrdersScreen';

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name='Customers' component={CustomerScreen} />
      <Tab.Screen name='Orders' component={OrdersScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
