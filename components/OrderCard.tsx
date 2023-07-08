import { View, Text } from 'react-native';
import React from 'react';

type OrderCardProps = {
  item: Order;
};

const OrderCard = ({ item }: OrderCardProps) => {
  return (
    <View>
      <Text>OrderCard</Text>
    </View>
  );
};

export default OrderCard;
